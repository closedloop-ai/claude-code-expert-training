# Module 3 Demo Artifact: Request Changes

## Request Changes

### Attempted change
Added token rotation logic in src/auth/middleware.ts.

### Expected result
Old refresh token reuse should return 401.

### Actual result
Old refresh token reuse returns 200.

### Evidence
Test: pnpm test tests/auth/refresh-token.test.ts
Failure: expected 401, received 200
Trace: old token still resolves in session-store lookup.

### Updated hypothesis
Middleware is not the right layer for invalidation. The session store accepts both token records.

### Next instruction
Inspect session-store token persistence and invalidation. Do not change response shape.

## Why This Is A Good Artifact

- it states action, expectation, observation, and evidence
- the failure is reproduced with an exact command and result
- it updates the hypothesis instead of repeating the same attempt
- it ends with a bounded next instruction and a constraint
