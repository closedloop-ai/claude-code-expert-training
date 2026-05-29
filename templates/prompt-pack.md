# Claude Code Expert Prompt Pack

## Debate before planning

```text
Before planning, run a debate.
Perspectives: fastest path, safest path, skeptical reviewer, future maintainer.
Reconcile into a final plan with tradeoffs. Do not edit files.
```

## Bounded codebase Q&A

```text
Explore only enough codebase context to plan this work. Do not edit files.
Return relevant files, patterns, tests, risks, unknowns, and context boundaries.
```

## Diff review

```text
Explain this diff against the approved plan. For each changed file: what changed, why, plan phase, expected/unexpected, risk. Flag scope drift.
```

## Failure hunting

```text
Assume this implementation is wrong. Find the top 5 production failure modes and the test or guardrail to add for each.
```
