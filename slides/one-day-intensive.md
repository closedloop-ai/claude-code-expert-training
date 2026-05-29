# One-Day Intensive Presentation Guide

## Session Purpose

This is the consolidated five-hour instructor guide for the one-day version of the course.

Participants should leave with:

- a practical operating model for Claude Code
- one compact planning artifact
- one investigation memo and feedback bundle pattern
- one review and verification packet pattern
- one compact multi-agent workflow design

Lab 00 setup is required pre-work and is not taught live except for a brief readiness check.

## Pre-Work Gate

Before the session begins, confirm participants have completed:

- [../labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md](../labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md)
- [../docs/ONE-DAY-PREWORK-CHECKLIST.md](../docs/ONE-DAY-PREWORK-CHECKLIST.md)
- demo-app warm-up commands
- local editor and terminal setup

If setup is incomplete, redirect participants to pre-work follow-up instead of burning live session time.

## Time Plan

### Block 1 — Operating Surface and Routing

Time: 70 minutes

Slides:

1. One-day course frame
2. `Has anyone tried this? What is working?`
3. Tools, commands, skills, agents, subagents, plugins, and marketplace
4. Interactive versus headless
5. Goal mode and debate mode
6. Model selection for the job
7. What should be a command, skill, agent, or plugin?

Speaker goal:

Get participants to classify work correctly and route by job instead of hype.

Recommended demo artifact:

- [demo-artifacts/day-01-primitive-and-routing-board.md](demo-artifacts/day-01-primitive-and-routing-board.md)
- [demo-artifacts/anti-patterns/day-01-primitive-board-anti-pattern.md](demo-artifacts/anti-patterns/day-01-primitive-board-anti-pattern.md)

### Block 2 — Planning and Context Management

Time: 55 minutes

Slides:

8. Planning is context management
9. Facts, assumptions, and open questions
10. Context maps and compact execution briefs
11. Debate review before coding
12. What makes a plan reusable downstream?

Speaker goal:

Show how to compress messy intake into a small artifact another operator could execute.

### Block 3 — Intent Recovery and Dynamic Evidence

Time: 60 minutes

Slides:

13. Find the why before the what
14. Git history, blame, commits, issues, and PRs
15. Evidence versus inference
16. Dynamic evidence sources
17. Why “that didn’t work” fails as feedback
18. What makes a good feedback bundle?

Speaker goal:

Teach participants to recover intent and improve the next model turn with evidence instead of guesswork.

Recommended demo artifacts:

- [demo-artifacts/day-02-investigation-memo-example.md](demo-artifacts/day-02-investigation-memo-example.md)
- [demo-artifacts/day-02-feedback-bundle-example.md](demo-artifacts/day-02-feedback-bundle-example.md)
- [demo-artifacts/anti-patterns/day-02-investigation-memo-anti-pattern.md](demo-artifacts/anti-patterns/day-02-investigation-memo-anti-pattern.md)
- [demo-artifacts/anti-patterns/day-02-feedback-bundle-anti-pattern.md](demo-artifacts/anti-patterns/day-02-feedback-bundle-anti-pattern.md)

### Block 4 — Review, Test, and Verify

Time: 60 minutes

Slides:

19. Review the diff against the brief
20. Scope drift and regression risk
21. Testing is one gate, not the only gate
22. What a verification packet must contain
23. What makes a handoff PR-ready?

Speaker goal:

Make review findings, verification evidence, and residual risk explicit.

Recommended demo artifacts:

- [demo-artifacts/day-03-review-and-verification-packet.md](demo-artifacts/day-03-review-and-verification-packet.md)
- [demo-artifacts/anti-patterns/day-03-review-packet-anti-pattern.md](demo-artifacts/anti-patterns/day-03-review-packet-anti-pattern.md)

### Block 5 — Workflow Design and Minimal Improvement Loop

Time: 45 minutes

Slides:

24. Build a compact multi-agent workflow
25. Handoffs, gates, and stop conditions
26. What should be improved on the next run?
27. One lightweight scorecard
28. Closing synthesis

Speaker goal:

Leave the room with one named workflow and one credible improvement loop, without expanding into the full Day 4 operating-system depth.

Recommended demo artifacts:

- [demo-artifacts/day-04-operating-system-scorecard.md](demo-artifacts/day-04-operating-system-scorecard.md)
- [demo-artifacts/anti-patterns/day-04-operating-system-scorecard-anti-pattern.md](demo-artifacts/anti-patterns/day-04-operating-system-scorecard-anti-pattern.md)

## Critique Prompt Pattern

Use this repeatedly:

`What would you improve about this artifact?`

`What would make it better as a downstream input?`

`Could another operator use this without reopening the whole problem?`

## What To Cut Live If Time Compresses Further

Cut in this order:

1. extended plugin packaging discussion
2. deeper model-routing nuance
3. longer workflow-library discussion
4. most of the improvement-loop discussion

Do not cut:

- planning and context management
- intent recovery
- dynamic evidence quality
- review and verification discipline

## Deliverables For The One-Day Version

Participants should leave with:

- primitive and routing board
- compact execution brief
- short investigation memo
- evidence bundle
- review and verification packet
- compact workflow sketch
- one next-run improvement note
