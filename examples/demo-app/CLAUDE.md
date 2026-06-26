# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`demo-app` is the running example for the Claude Code one-day intensive (the parent
repo, `claude-code-expert-training`). It is a minimal in-memory auth/session library,
not a production service. Its reason for existing is a **deliberate bug**: see below.

## The deliberate bug (read before "fixing" anything)

`SessionStore.rotate()` in `src/auth/session-store.ts` issues a new refresh token but
**does not delete the old one**, so the previous token still validates after rotation.
This is intentional — recovering the intent, planning the fix, and verifying it is the
exercise that threads Modules 2–5 of the course.

- The fix is a single line, already marked: `this.sessionsByToken.delete(refreshToken)` in `rotate()`.
- `tests/auth/refresh-token.test.ts` has a regression test ("invalidates the old refresh
  token after rotation") that is **expected to fail** until that line is added.
- Do **not** fix the bug unprompted. Treat it as the subject of an exercise, not a defect
  to clean up. Only apply the fix when the task explicitly asks for it.

## Commands

This is a pnpm package (`type: module`, TypeScript via `tsx`/`vitest`, no build step — `tsc` is `--noEmit`).

```bash
pnpm install          # esbuild build approval is pre-configured in pnpm-workspace.yaml
pnpm test             # run all tests (vitest run, single-shot)
pnpm typecheck        # tsc --noEmit
pnpm demo             # runnable walk-through; prints that the OLD token still validates
```

Run a single test file or test by name:

```bash
pnpm vitest run tests/auth/refresh-token.test.ts
pnpm vitest run -t "invalidates the old refresh token"
```

Note: `pnpm-workspace.yaml` carries `allowBuilds`/`onlyBuiltDependencies` for `esbuild`
on purpose — pnpm 10+ blocks dependency build scripts by default, which would otherwise
break `pnpm install`/`test`/`demo` on a fresh clone. Don't remove those entries.

## Architecture

Three source files under `src/`, intentionally tiny so the auth flow fits in one read:

- `auth/session-store.ts` — `SessionStore`, an in-memory `Map<refreshToken, Session>`
  with `issue()`, `rotate()`, and `validate()`. This is where all the interesting (and
  buggy) behavior lives.
- `auth/login.ts` — `login()` does trivial credential presence checking and delegates to
  `SessionStore.issue()`. Kept deliberately uninteresting.
- `demo.ts` — the `pnpm demo` entry point; scripts a login → rotate → validate sequence
  to surface the bug at the console.

Tests under `tests/auth/` mirror `src/auth/`.
