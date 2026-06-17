# Example Request Changes

## Failure

The new regression test for refresh-token reuse still fails: after `SessionStore.rotate`, the **old** refresh token continues to validate instead of being rejected.

## Evidence

- failing test output showing the rotated (old) token still passes `validate`
- CLI trace from `pnpm demo` printing `OLD token still valid?  true`
- policy note from the requirements stating that a rotated refresh token must not be reusable

## Observation

The fix added a new token on rotation but never removed the previous one from the store, so both the old and new tokens validate. The invalidation belongs in `SessionStore.rotate`, not in a calling layer.

## Revised Instruction to Claude

In `src/auth/session-store.ts`, update `rotate` so the previously presented refresh token is invalidated when the new one is issued, so only the new token validates. Do not change the login response shape or credential checking.

## Why This Bundle Is Better

It provides an exact failing case, a runtime trace, and a policy constraint, and it points at the precise file and method to change — instead of a generic "this is broken" response.
