# Module 3 Demo Artifact: Explore Findings

## Explore Findings

Builds on the Module 2 Implementation Plan: "refresh token rotation".

### Question
Why is an old refresh token still accepted after rotation issues a new one?

### Evidence gathered
- Reproduces: pnpm test tests/auth/refresh-token.test.ts — old-token reuse returns 200, expected 401.
- Server logs show the session store resolves the previous token after rotation.
- Git history shows rotation added in PR #184 with no invalidation step.
- src/auth/middleware.ts validates tokens but never deletes the prior record.

### Inferences
- Rotation issues a new token but does not invalidate the previous one.
- Invalidation likely belongs in the session store, not the middleware.

### Open questions
- Where should the previous token be invalidated — session store or middleware?
- Should reuse of an old token emit an audit event?

### Recommended next step
Trace refresh-token writes and invalidation in src/auth/session-store.ts before changing code.

## Why This Is A Good Artifact

- it separates confirmed evidence from inference
- it ties each claim to a command, log, commit, or file
- it ends with an open question and a concrete next step
- it gives a future implementer enough context without replaying the whole investigation
