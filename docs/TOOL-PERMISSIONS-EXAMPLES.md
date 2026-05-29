# Tool and Permissions Examples

This document gives instructors and learners concrete examples of how to narrow or widen Claude Code's tool access for different environments.

## Why This Matters

Permissions shape behavior. If the model can run everything everywhere, learners do not build good operating judgment. If the model cannot run enough commands to verify work, learners fall back to guessing.

The goal is to match permissions to the task.

## Recommended Teaching Progression

1. Start with read-heavy, write-light permissions.
2. Add targeted write permissions once the learner can explain the plan.
3. Add network or GitHub permissions only when the task requires them.
4. Teach explicit escalation instead of silent broad access.

## Example 1: Safe Repo Exploration

Use this posture for onboarding, planning, Git-history investigation, and review labs.

Allowed:
- file reads
- search commands like `rg`
- Git history inspection like `git log`, `git blame`, `git show`, `git diff`
- test commands that do not mutate global state

Avoid:
- destructive Git commands
- package installation
- deploy commands
- broad shell access to unrelated directories

## Example 2: Controlled Implementation

Use this posture when the learner is editing a local repo with a clear plan.

Allowed:
- file reads and writes in the working tree
- formatter and test commands
- Git status and diff commands

Escalate only when needed:
- dependency installation
- browser or simulator launch
- remote API calls

## Example 3: Existing Team Repo With Guardrails

Use this posture in a shared production-adjacent codebase.

Allowed:
- read/search in the repo
- scoped edits in the active feature branch
- test commands defined by the repo

Require explicit approval for:
- pushing to remote
- modifying CI config
- changing migrations
- touching secrets or deployment scripts

## Example 4: Workflow-Specific Rules

Terminal-first teams often allow broader shell usage but narrow network access. IDE-first teams may allow less shell access but broader file editing. Remote SSH workflows often need tight host-level restrictions plus a strong verification checklist.

## Teaching Prompt for Permissions Discussion

Ask participants:

- What does this task need to read?
- What does it need to write?
- What should require approval?
- What would be expensive or dangerous if the model guessed?
- What evidence do you want before granting broader permissions?

## Practical Examples to Reference During Labs

- Lab 00: start with safe exploration permissions
- Lab 03: history and issue investigation should stay read-heavy
- Lab 04: allow screenshot/test/simulator artifacts, not broad edits
- Lab 05: allow local edits and verification
- Lab 06: discuss how `tmux`, SSH, and remote shells change the risk profile
- Lab 07: turn the team's preferred rules into a reusable policy
