# Implementation Plan

## Goal

Make refresh-token rotation reject reuse of the old token. Today, after `SessionStore.rotate` issues a new refresh token, the previous token still validates.

## Non-goals

- No database or external session-store persistence.
- No change to the login response shape.
- No change to login credential checking.

## Proposed behavior

When a refresh token is rotated, the previous token is invalidated immediately, so only the newly issued token validates. A rotated (old) token is rejected the same way an unknown token is.

## Work packages

1. Invalidate the previous refresh token inside `SessionStore.rotate` (`src/auth/session-store.ts`).
2. Add a regression test in `tests/auth/refresh-token.test.ts` that rotates a token and asserts the old token no longer validates.
3. Confirm the existing rotation and login tests still pass.

## Verification

Run `pnpm test` from `examples/demo-app`. The new regression test fails before the fix and passes after it; `pnpm demo` should print `OLD token still valid?  false`.
