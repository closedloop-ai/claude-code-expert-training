# Workflow: Safe Feature Slice Delivery

## Goal

Take a small feature request from ticket to PR-ready branch with bounded context, reviewed implementation, and verification evidence.

## Use When

- the feature is small to medium in scope
- the repository is already understood well enough to navigate
- the team wants strong review and verification discipline

## Inputs

- ticket or issue
- repo path
- acceptance criteria
- existing test command
- optional docs, design notes, or API references

## Data Sources

- local repo
- Git history
- GitHub issues and PRs
- test output
- CLI traces
- screenshots or simulator output when relevant
- docs or API references through MCP or URLs

## Skills Used

- ticket-to-plan
- open-question-triage
- work-disaggregation
- adversarial-code-review
- test-strategy
- pr-summary

## Agents

### Orchestrator Agent

Owns the workflow, delegates tasks, controls phase transitions, and produces final synthesis.

### Context Scout

Finds relevant files, patterns, tests, and commands. Does not edit files.

### Commit Archaeologist

Uses Git history, blame, issues, and PRs to recover why the current code behaves the way it does.

### Plan Critic

Reviews the plan from multiple perspectives: fastest path, safest path, skeptical reviewer, future maintainer.

### Implementation Agent

Implements one approved phase at a time.

### Diff Reviewer

Reviews the diff for scope drift, unintended behavior changes, missing tests, and unnecessary complexity.

### Test Strategist

Maps acceptance criteria to tests and identifies minimum merge-blocking verification.

### Verification Runner

Runs commands, captures output, and reports pass/fail evidence.

### PR Narrator

Produces final PR title, summary, verification section, risks, and follow-ups.

## Workflow Phases

1. intake
2. context discovery
3. intent recovery
4. planning
5. plan debate
6. work disaggregation
7. implementation
8. diff review
9. testing
10. PR handoff
11. post-run summary

## Verification Gates

- plan review gate
- scope drift gate
- test strategy gate
- targeted verification gate
- PR readiness gate

## Stop Conditions

- blocking product question
- unexpected files touched
- no verification path
- unexplained test failure
- security or privacy concern

## Output Artifacts

- context map
- open-question register
- Explore findings
- implementation plan
- work package map
- diff review
- verification evidence
- PR handoff
- reuse recommendations
