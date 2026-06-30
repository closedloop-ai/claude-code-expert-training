# Implementation Plan

## Goal
Implement refresh token rotation — including reuse detection — without changing the existing login response contract.

## Known facts
- Session persistence and refresh-token rotation are implemented in `src/auth/session-store.ts` (`SessionStore`).
- Login issues the first session/refresh token in `src/auth/login.ts` and returns `LoginResult { userId, refreshToken }`.
- There is no JWT middleware in this codebase (no `src/auth/middleware.ts`, no JWT layer). Auth state lives entirely in the in-memory `SessionStore`.

## Assumptions to verify
- ~~Old refresh tokens are not currently invalidated after rotation.~~ Verified: previously true (the threading bug). Now fixed — `rotate()` deletes the presented token (`session-store.ts:49`) and a regression test locks it in.

## Open questions
- ~~Should reuse detection emit an audit event?~~ Resolved: **yes.** Reuse detection is the single highest-value security signal this store produces; replay of an already-rotated token must emit an audit event so an operator learns a credential was compromised.

## Context map
- Session store (`src/auth/session-store.ts`): token issuance, rotation, invalidation, and (to add) reuse detection.
- Login (`src/auth/login.ts`): issues the first session and returns the response contract that must not change.

## Work packages
1. ~~Verify current token rotation behavior.~~ Done — old token was not invalidated; now it is.
2. ~~Add invalidation logic.~~ Done — `rotate()` deletes the presented token.
3. ~~Extend tests for old-token reuse.~~ Done — `tests/auth/refresh-token.test.ts` asserts the old token no longer validates.
4. Add refresh-token **reuse detection** (token-family revocation). The root cause is that `rotate()` deletes the old token and keeps no record it existed, so a replay is indistinguishable from garbage. Replace "delete and forget" with "delete from active, remember as revoked."

   Required state in `SessionStore`:
   - Add `familyId: string` to the `Session` interface; set it in `issue()` and carry it forward in `rotate()`.
   - `private revokedTokens = new Map<string, string>()` — consumed token → `familyId`.
   - `private tokensByFamily = new Map<string, Set<string>>()` — `familyId` → live tokens, so a family can be revoked at once.
   - `private revokeFamily(familyId)` helper — delete every token in the family from `sessionsByToken` and move them into `revokedTokens`, then clear the family set.

   The two lines of detection logic in `rotate()`:
   - On the way out (replacing the bare `delete`): `this.revokedTokens.set(refreshToken, existing.familyId)` so the consumed token is remembered, not forgotten.
   - At the top, before the existing `!existing` throw: look up `this.revokedTokens.get(refreshToken)`; on a hit, call `revokeFamily()`, emit the audit event (WP5), and `throw new Error("refresh token reuse detected")` — a distinct error, not the generic "invalid refresh token".
5. Emit an audit event on reuse detection. Accept an optional `onSecurityEvent?: (e: { type: string; userId: string; familyId: string; at: number }) => void` callback in the `SessionStore` constructor; emit `{ type: "refresh_token_reuse_detected", userId, familyId, at: Date.now() }` when a revoked token is replayed. Keep it an injected function — no logging subsystem.
6. Add a contract test asserting `LoginResult` shape (`{ userId, refreshToken }`) is unchanged, to guard the "don't change the login response" goal.
7. Run `@security-reviewer` against the final diff as a sign-off gate. (Treat any *new* feature recommendations as separate scope — log them, don't silently expand this plan.)

## Out of scope (acknowledged, not addressed here)
- ~~Refresh-token expiration: `issuedAt` is recorded but never read, so tokens live forever. Tracked for a follow-up; not part of this rotation work.~~ Implemented on request: `issue(userId, expiresAt?)` now takes an absolute deadline. A token is rejected once it is used (existing rotation/reuse logic) or its `expiresAt` elapses; the deadline carries forward across rotation so a family can't outlive its window. Distinct `"refresh token expired"` error; omitting `expiresAt` preserves the never-expires behavior.
- Trivial credential check in `login.ts` (any non-empty password authenticates) — deliberate for the demo; flagged so it is never cargo-culted into real code.

## Acceptance criteria
- Previous refresh token cannot be reused after rotation.
- Replay of an already-rotated token is detected as reuse, revokes the whole token family, and emits an audit event.
- Existing login response shape (`LoginResult`) is unchanged — guarded by a contract test.
- Test coverage exists for: rotation issues a new token, old token is rejected, reuse detection revokes the family, and the login contract is stable.

## Verfication Gate
- run all tests, ensure they pass
- no side effect, no new files should be created