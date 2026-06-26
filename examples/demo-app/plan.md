# Evidence-first fix: refresh token rotation must invalidate the old token

## Bug
`SessionStore.rotate()` issued a new refresh token but left the **previous** token in
`sessionsByToken`, so the old token kept validating after rotation — and could even be
used to mint another session.

## 1. Evidence the bug is real (RED — before the fix)
Captured by temporarily removing the fix line from `rotate()` and running, from `examples/demo-app` on 2026-06-25:

- `pnpm vitest run -t "invalidates the old refresh token after rotation"` → **PASS (0) FAIL (1)**

  ```
  AssertionError: expected true to be false // Object.is equality
   ❯ tests/auth/refresh-token.test.ts:28   expect(store.validate(first.refreshToken)).toBe(false)
  ```
- `pnpm demo` → reproduces it at the console:

  ```
  new token valid?         true
  OLD token still valid?   true   <- should be false after the fix
  ```

The old token validating is the defect, demonstrated before any fix.

## 2. The fix
`src/auth/session-store.ts` — in `rotate()`, after issuing the new token, delete the
presented one (replacing the commented-out `// TODO (course exercise)` line):

```ts
this.sessionsByToken.set(rotated.refreshToken, rotated);
this.sessionsByToken.delete(refreshToken);   // ← added: invalidate the rotated token
return rotated;
```

One line; a single-key delete that touches only the presented token.

## 3. Evidence the bug is fixed (GREEN — after the fix)
Same commands, fix restored:

- `pnpm vitest run -t "invalidates the old refresh token after rotation"` → **PASS (1) FAIL (0)**
- `pnpm test` (full suite) → **Tests 7 passed (7)** — `refresh-token.test.ts` (**5**) + `login.test.ts` (2)
- `pnpm typecheck` (`tsc --noEmit`) → clean, no errors
- `pnpm demo` → `OLD token still valid?   false`

### Tests added to `tests/auth/refresh-token.test.ts`
All three fail against the RED state and pass against the fix:
1. `invalidates the old refresh token after rotation` — `validate(old)` is `false`.
2. `rejects an attempt to rotate an already-rotated token` — `rotate(old)` throws `/invalid refresh token/` (the old token can't mint a new session).
3. `invalidates every prior token across repeated rotations` — across two rotations, both earlier tokens are dead and only the newest validates.

## Scope review
- No public contract changes — `issue` / `rotate` / `validate` signatures unchanged; only
  `rotate()`'s internal bookkeeping changed.
- No unrelated auth code touched: `auth/login.ts` and the rest of `session-store.ts` are unchanged.

## Residual risk
- The fix removes only the in-memory map entry; there is no persistence layer in this demo,
  so no stored-token retention/cleanup behavior exists to address.
- The store is a plain `Map` with no locking. Concurrent `rotate()` on the same token is out
  of scope here but worth noting for any production port.
- Stale doc: the `rotate()` doc comment (`session-store.ts:35-37`) still describes the bug as
  live ("the fix is to invalidate it here"). Not corrected here pending sign-off, since it is
  course teaching material.

## PR handoff note
Reviewer should confirm the regression tests assert the intended invariant (old token invalid
post-rotation, and not reusable to rotate) and consider whether a production version needs
token-store concurrency guarantees and audit-grade retention of invalidated tokens.
