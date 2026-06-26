# Implementation Plan

## Goal
Invalidate the previous refresh token on rotation, so a rotated-away token can no
longer validate — without changing the `login()` / `issue()` response shape.
Security-correct version of the goal: an old token must not only stop validating,
its **replay should be detectable**.

## Threat model
Refresh tokens are bearer credentials; whoever holds one is the user. They leak via
logs, XSS, browser storage, or a store dump. Rotation exists to bound the blast
radius of such a leak and to surface theft:
- **T1 — Stolen token replay.** A leaked token is reused after the legitimate client
  rotated. Rotation must invalidate the old token (mitigated by this change) and,
  ideally, *detect* the replay rather than treat it as a generic error.
- **T2 — Store/log disclosure.** A dump of the session store hands out usable tokens
  if they are stored in the clear.
- **T3 — Indefinite validity.** A token with no expiry stays useful forever after a leak.
- **T4 — Concurrent rotation.** Two rotations of the same token race; a non-atomic
  fix lets both succeed and reintroduces double validity.
- **T5 — Cross-session blast radius.** A bug in rotation must not affect other users'
  sessions.

## Facts (verified against the repo)
- The store is in-memory only: `SessionStore` wraps a `Map<refreshToken, Session>`
  in `src/auth/session-store.ts`. There is no JWT layer, no middleware, and no
  database — validation is `this.sessionsByToken.has(token)` (`session-store.ts:56`).
- `rotate()` issues a new token (`session-store.ts:49`) but never deletes the
  presented one; the fix already exists as a commented line (`session-store.ts:50`).
- **Reproduction is a unit assertion, not an HTTP response.** There is no server,
  no 200/401, no logs: `tests/auth/refresh-token.test.ts:28` expects the old token
  to stop validating (`expect(store.validate(old)).toBe(false)`) and currently
  gets `true`.
- **Provenance:** `session-store.ts` has a single commit
  (`38cb9b0 feat(demo): recast demo app + labs onto the TS refresh-token story`);
  there is no PR #184 and no prior invalidation step that was later removed — the
  missing delete is original to the file, by design.
- `issuedAt` is recorded (`session-store.ts:26,47`) but never read — tokens never expire.

## Refuted leads (do not re-investigate)
Common but incorrect framings, checked and disproven against this repo:
- ❌ "Old-token reuse returns 200, expected 401" — no HTTP layer exists.
- ❌ "Server logs show the store resolving the previous token" — no server, no logging.
- ❌ "Invalidation belongs in `src/auth/middleware.ts`" — that file does not exist;
  invalidation belongs in `rotate()` in the session store.
- ❌ "Rotation was added in PR #184 without invalidation" — no such PR; see Provenance.

## Scope note
This is the course demo app, not a service. Per `CLAUDE.md` the rotation bug is a
deliberate exercise — apply the fix only when a task explicitly asks for it. The
plan separates the **demo fix** (one line) from **real-service requirements** so it
stays honest about being a teaching app.

## Context map
- `src/auth/session-store.ts` — `issue()` / `rotate()` / `validate()`; the bug and
  the fix both live in `rotate()`.
- `tests/auth/refresh-token.test.ts` — three cases; the third encodes the fix.
- `src/auth/login.ts` — presence-only credential check; delegates to `issue()`.
  Out of scope for this change.

## Work packages

### Demo scope (what this exercise actually changes)
1. ✅ Verify current behavior — done; old token still validates after rotation
   (`refresh-token.test.ts:28` fails). → addresses T1 (detection part).
2. Uncomment the invalidation line in `rotate()`:
   `this.sessionsByToken.delete(refreshToken)` (`session-store.ts:50`). → mitigates T1.
3. No new tests strictly required for the demo — the existing regression test is the
   acceptance check.

### Real-service requirements (out of scope here; documented so the lesson is correct)
4. **Reuse detection (T1).** Plain `delete()` makes a stolen-token replay and an
   expired-token typo produce the *same* "invalid token" error — it discards the theft
   signal. A real implementation tracks a **token family/lineage** and, on seeing a
   rotated-away token, **revokes the entire family/session** and emits a security event.
   This is the actual point of rotation, not a nice-to-have.
5. **Atomic rotation (T4).** Invalidate-old + issue-new must be one atomic operation
   (DB transaction, `DELETE ... RETURNING`, or a Redis Lua script). The current two
   statements are safe only because JS is single-threaded; a non-atomic backend port
   reintroduces double validity.
6. **Store tokens hashed (T2).** Persist a hash (e.g. SHA-256) of the token and look
   up by hash, so a store/log dump does not yield usable credentials. Here the raw
   token is the `Map` key (`session-store.ts:28,49`).
7. **Token expiry (T3).** Enforce absolute + idle TTL using `issuedAt`; `validate()`
   currently ignores it, so tokens live forever.

## Acceptance criteria

### Demo
- Previous refresh token cannot be reused →
  `pnpm vitest run -t "invalidates the old refresh token"` passes.
- Existing login/response shape unchanged → full suite stays green:
  `pnpm test` (the "issues a new refresh token on rotation" case still passes).

### Security cases worth adding (beyond the single regression test)
- Replay after a **chain** of rotations (A→B→C, then present A) is rejected.
- Rotating Alice's token **does not** affect Bob's session — no cross-session blast
  radius (T5).
- If reuse detection is adopted (WP4): presenting a rotated-away token **kills the
  whole family**, not just that token, and emits a security event.
- No token material appears in logs or error messages (T2).

## Verification
```bash
pnpm test          # all of tests/auth/refresh-token.test.ts green
pnpm typecheck     # tsc --noEmit, no errors
```

## Lower priority / acknowledged, not engineered for the demo
- **Rate limiting** on `rotate()` / `validate()` — bounds online guessing in a real
  service; negligible against 128-bit UUIDs but the pattern matters.
- **Constant-time lookup** — `Map.has` timing leak is dominated by the UUID space; not
  worth engineering around.
- **Sender-constrained tokens** (DPoP / mTLS device binding) — genuinely out of scope
  for a teaching demo; named once for completeness.

Do not load or read the `node_modules/` folder — it is not part of this codebase.
