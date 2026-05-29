# Using Claude in Existing Workflows

Claude Code should fit into the workflow the engineer already uses. This repo teaches Claude as an amplifier for existing habits, not as a replacement for them.

## Terminal-First Workflow

Best for:
- debugging
- running tests
- code review
- Git history investigation

Teaching emphasis:
- keep the transcript grounded in command output
- use small feedback loops
- ask for diffs and verification evidence often
- prefer explicit commands over vague “fix it” instructions

## IDE-First Workflow

Best for:
- code navigation
- symbol search
- refactor review
- side-by-side diff inspection

Teaching emphasis:
- use Claude to propose or explain the change
- use the IDE to inspect call sites, types, and references
- keep review discipline outside the transcript when visual context is better

## `tmux` Workflow

Best for:
- parallel workstreams
- background verification
- keeping long-running commands separate from the main editing flow

Teaching emphasis:
- dedicate panes for tests, logs, and edits
- keep one pane reserved for “ground truth” outputs
- use named sessions for repeatable routines

## SSH / Remote Workflow

Best for:
- remote build environments
- staging-like reproduction
- restricted production-adjacent debugging

Teaching emphasis:
- verify host and repo context first
- narrow permissions aggressively
- prefer read/investigate/plan before edit
- capture exact CLI output and environment facts

## Suggested Rule of Thumb

Use Claude:
- to analyze
- to plan
- to draft
- to review
- to synthesize evidence

Use your normal tools:
- to navigate visually when that is faster
- to compare diffs
- to inspect UIs and simulators
- to confirm the fix in the environment that matters

## Where This Appears in the Curriculum

- Lab 00: terminal, IDE, and repo warm-up
- Lab 03: history and issue investigation
- Lab 04: screenshots, tests, simulator output, CLI output as feedback
- Lab 06: explicit workflow comparison and operating playbook
- Lab 07: team-standard workflow design
