# Day 4 Presentation Guide

## Session Purpose

Day 4 turns the workflow from Day 3 into an observable, reviewable, and improving system. It should leave participants with:

- a framework for measuring whether the workflow is actually working
- a practical set of telemetry and review points
- a method for deciding what to improve next
- a reusable operating checklist for the next run

## Time Plan

Use this as a five-hour instructor guide, excluding breaks.

### Block 1 — Share-Out and Day 4 Frame

Time: 25 minutes

Slides:

1. Day 4 purpose and capstone framing
2. `Has anyone tried this? What is working?`
3. Why one successful run is not yet a system

Instructor notes:

- ask what teams actually track today
- ask which metrics are vanity metrics versus operating metrics
- connect the room’s answers to Lab 07

### Block 2 — What Does Working Mean?

Time: 45 minutes

Slides:

4. Success dimensions: delivery, quality, speed, efficiency, reuse
5. What good metrics look like
6. What bad metrics look like
7. Leading versus lagging indicators
8. Human intervention as signal, not embarrassment

Instructor notes:

- keep metrics tied to concrete decisions
- resist the temptation to measure everything
- ask what action each metric would change

### Block 3 — Observability for Agentic Workflows

Time: 45 minutes

Slides:

9. What to capture per phase
10. What to capture per agent
11. What to capture per tool, handoff, and gate
12. Stop conditions and failures as first-class telemetry
13. Usage review and context efficiency

Instructor notes:

- emphasize observability that improves routing and review, not vanity dashboards
- keep attention on artifacts that will affect the next run

### Block 4 — Post-Run Review

Time: 35 minutes

Slides:

14. Post-run review categories: delivery, learning, verification, coordination, leverage, waste
15. How to classify what happened
16. What should change before the next run
17. The skill, gate, and routing improvement backlog

Instructor notes:

- teach the post-run review as an engineering review, not a retrospective ritual
- require evidence for each claimed success or failure

### Block 5 — Operating System Demo

Time: 40 minutes

Slides:

18. Starting from the Lab 06 workflow
19. Add metrics and telemetry
20. Add human review policy
21. Add one routing change and one gate improvement
22. Publish the next-run checklist

Demo goals:

- turn a Workflow into an operating system spec
- show how a workflow becomes measurable and improvable

### Block 6 — Governance and Model Routing Over Time

Time: 30 minutes

Slides:

23. Where human approval must remain
24. When to change agents, skills, or routing
25. When to change models or execution mode
26. How to know the workflow is improving versus merely getting busier

Instructor notes:

- connect this back to Day 1 model selection and mode selection
- emphasize that routing changes require evidence

### Block 7 — Capstone Lab and Final Demos

Time: 50 minutes

Slides:

27. Lab 07 outputs
28. What a credible operating system spec includes
29. Demo rubric for the final capstone
30. Closing synthesis: from user to operator

Instructor notes:

- ask participants to identify the single most important metric and the single highest-leverage improvement
- end with the next-run checklist as the most practical artifact

## Slide-by-Slide Teaching Prompts

### Slide 5 — What good metrics look like

Ask:

- If this number moved next week, what would we do differently?

### Slide 8 — Human intervention as signal

Ask:

- Which interventions indicate healthy oversight, and which indicate broken workflow design?

### Slide 12 — Stop conditions as telemetry

Ask:

- What failure should be counted even when the workflow never reaches implementation?

### Slide 16 — What should change before the next run

Ask:

- Which improvement would compound, rather than merely patch today’s run?

### Slide 25 — When to change models or execution mode

Ask:

- What evidence would justify rerouting this class of work?

## Speaker-Ready Slide Content

### Slide 4 — Success Dimensions

Suggested slide body:

- Delivery
- Quality
- Speed
- Efficiency
- Reuse

Suggested speaker notes:

This slide should make one point clearly: a workflow can look busy and still fail. If it ships slowly, creates review churn, burns context, and teaches nothing reusable, it is not working well.

### Slide 9 — What to Capture Per Phase

Suggested slide body:

- phase start and stop
- artifact produced
- gate outcome
- human intervention
- unresolved blocker

Suggested speaker notes:

The goal is not surveillance. The goal is enough telemetry to explain why a run succeeded, stalled, or regressed.

### Slide 14 — Post-Run Review Categories

Suggested slide body:

- delivery
- learning
- verification
- coordination
- leverage
- waste

Suggested speaker notes:

This becomes the language of improvement. It helps teams discuss failures and gains without collapsing everything into vague sentiment.

### Slide 21 — Add One Routing Change and One Gate Improvement

Suggested slide body:

- choose one high-leverage change
- justify it with evidence
- document what changes next run
- keep the backlog small and real

Suggested speaker notes:

This is where the workflow starts to self-improve. Do not let participants leave with a huge wish list. Make them choose one change they can defend.

### Slide 25 — When to Change Models or Execution Mode

Suggested slide body:

- slower than needed
- weaker than needed
- too expensive for the value
- too interactive for a repeatable job
- too headless for an ambiguous job

Suggested speaker notes:

Bring the course full circle here. Model and mode routing should change only when the evidence supports a better tradeoff.

## Demo Script

### Demo 1 — Turning a Workflow into an Operating System

Scenario:

The Day 3 workflow works once, but the team wants to know whether it will improve over repeated runs.

Steps:

1. Put the Lab 06 workflow on screen.
2. Choose five metrics:
   - one delivery metric
   - one quality metric
   - one speed metric
   - one efficiency metric
   - one reuse metric
3. Add telemetry capture points for:
   - phase
   - agent
   - gate
4. Add one human approval checkpoint.
5. Add one routing change backed by evidence.
6. Produce a next-run checklist.

Key teaching line:

`A workflow becomes an operating system only when the next run gets smarter because of this run.`

## Worked Artifact Example

Use this in class as a sample metric table:

```md
| Metric | Why it matters | Action if weak |
| --- | --- | --- |
| plan approval rate | planning quality | tighten Plan Critic review |
| scope drift incidents | delivery control | strengthen diff gate |
| verification pass rate | technical correctness | improve test strategy |
| human interventions per run | workflow stability | clarify stop conditions |
| reusable asset updates | compounding leverage | promote successful patterns into skills |
```

## Instructor Demo Ideas

### Demo 1 — Metric Triage

Take a long list of possible metrics and reduce it to:

- five core metrics
- two warning indicators
- one metric to ignore

### Demo 2 — Post-Run Review

Walk through a real or simulated run and classify:

- what delivered value
- what created waste
- what should become a skill or gate improvement

### Demo 3 — Next-Run Checklist

Build a one-page checklist that a team could actually use before the next workflow run.

## Final Demo Rubric

A good participant demo should show:

- a clear workflow being observed
- metrics tied to decisions
- telemetry tied to phases, agents, tools, or gates
- at least one concrete improvement to the workflow
- a next-run checklist another team member could use

## Required Supporting Files

- [executive-summary.md](executive-summary.md)
- [../docs/LIVE-TRAINING-AGENDA.md](../docs/LIVE-TRAINING-AGENDA.md)
- [../labs/07-build-your-agentic-operating-system/LAB.md](../labs/07-build-your-agentic-operating-system/LAB.md)
- [../labs/07-build-your-agentic-operating-system/agentic-operating-system-template.md](../labs/07-build-your-agentic-operating-system/agentic-operating-system-template.md)
- [../labs/07-build-your-agentic-operating-system/post-run-review-template.md](../labs/07-build-your-agentic-operating-system/post-run-review-template.md)
