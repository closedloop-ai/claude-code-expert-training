# Day 3 Presentation Guide

## Session Purpose

Day 3 turns planning and evidence into controlled implementation, skeptical review, verification, and reusable workflow design. It should leave participants with:

- a clear review method for spotting scope drift and regressions
- a habit of testing against the brief instead of testing against hope
- a concrete pattern for multi-agent workflow design
- a reusable model for handoffs, gates, and stop conditions

## Time Plan

Use this as a five-hour instructor guide, excluding breaks.

### Block 1 — Share-Out and Day 3 Frame

Time: 25 minutes

Slides:

1. Day 3 purpose and artifact handoff from Day 2
2. `Has anyone tried this? What is working?`
3. Why “the tests passed” is not the same as “the change is safe”

Instructor notes:

- ask what reviewers actually catch that tests miss
- ask what tests actually catch that reviewers miss
- connect the answers to Lab 05 and Lab 06

### Block 2 — Diff Court

Time: 55 minutes

Slides:

4. Review the diff against the plan, not in isolation
5. Scope drift detection
6. Behavioral regression detection
7. Missing test detection
8. Simpler-path challenge
9. Findings-first review format

Instructor notes:

- teach review as adversarial verification, not social approval
- require participants to compare the diff against the Lab 02 brief
- keep the discussion anchored to severity and evidence

### Block 3 — Verification and Evidence

Time: 40 minutes

Slides:

10. Testing is one gate, not the only gate
11. What verification evidence should contain
12. Command output as merge evidence
13. When to stop because verification is weak
14. PR handoff as an evidence artifact

Instructor notes:

- show how to write down exactly what was run and what passed
- distinguish “I ran tests” from “here is what those tests prove”
- reinforce that follow-up risks belong in the handoff

### Block 4 — Review and Verification Demo

Time: 35 minutes

Slides:

15. Start with the approved brief
16. Inspect the diff for drift
17. Run targeted checks
18. Capture evidence and residual risk
19. Produce a PR-ready handoff

Demo goals:

- show the bridge from change to review to test to handoff
- demonstrate that review is structured, not improvised

### Block 5 — Multi-Agent Workflow Design

Time: 50 minutes

Slides:

20. Why reusable workflows matter
21. Workflow phases from intake to PR handoff
22. Agent roles: orchestrator, scout, critic, implementer, prosecutor, strategist, verifier, narrator
23. Handoffs as artifact contracts
24. Gates and stop conditions
25. Human approval checkpoints

Instructor notes:

- tie every workflow phase back to an artifact from Labs 01 through 05
- define agents by mission and output, not personality
- insist on explicit stop conditions

### Block 6 — Workflow Capstone Demo

Time: 40 minutes

Slides:

26. A named workflow for safe feature delivery
27. Mapping prior artifacts into workflow inputs
28. Passing artifacts instead of transcripts
29. Where review and verification happen in the workflow
30. What should become a command, skill, hook, or agent next

Demo goals:

- design a realistic workflow live
- show why named phases and gates matter
- identify one reusable asset the workflow should produce

### Block 7 — Lab Launch and Demo Expectations

Time: 35 minutes

Slides:

31. Lab 05 outputs
32. Lab 06 outputs
33. What makes a Workflow reusable
34. Day 4 handoff: observability begins after workflow exists

Instructor notes:

- ask participants to defend their gate placement
- ask what happens if an agent fails or returns weak output

## Slide-by-Slide Teaching Prompts

### Slide 4 — Review the diff against the plan

Ask:

- What touched the code that was never approved in the brief?

### Slide 8 — Simpler-path challenge

Ask:

- What complexity exists here only because no one forced a simpler alternative?

### Slide 12 — Command output as merge evidence

Ask:

- If a reviewer could only see one command output, which one would matter most?

### Slide 23 — Handoffs as artifact contracts

Ask:

- What does the next agent need, and what would just create noise?

### Slide 24 — Gates and stop conditions

Ask:

- What should force the workflow to stop instead of continuing optimistically?

## Speaker-Ready Slide Content

### Slide 4 — Review the Diff Against the Plan

Suggested slide body:

- approved scope
- actual scope
- unexpected files touched
- missing tests
- unexplained complexity

Suggested speaker notes:

This slide should reset the idea of review. The reviewer is not reacting emotionally to the diff. The reviewer is comparing the diff against the contract established earlier in the workflow.

### Slide 10 — Testing Is One Gate, Not the Only Gate

Suggested slide body:

- tests prove some things
- review proves different things
- historical intent still matters
- evidence packet must be coherent

Suggested speaker notes:

Participants often over-trust green tests. This is where you explain that a workflow can still be unsafe if the diff drifted, the requirements changed, or the evidence packet is weak.

### Slide 22 — Agent Roles in the Workflow

Suggested slide body:

- Orchestrator owns the run
- Scout gathers bounded context
- Critic attacks the plan
- Implementer changes one phase at a time
- Prosecutor reviews for drift
- Verifier proves outcome

Suggested speaker notes:

Keep the descriptions operational. An agent is useful only if the team can tell when to invoke it, what it can use, and what artifact it must return.

### Slide 23 — Handoffs as Artifact Contracts

Suggested slide body:

- pass compact artifacts
- do not pass noisy transcript history
- define success condition for the receiver
- fail fast on weak handoffs

Suggested speaker notes:

This is one of the most important workflow-design slides in the course. Teams often design agents before they design handoffs. That usually produces chaos. The handoff contract is what keeps the workflow composable.

### Slide 29 — Where Review and Verification Happen

Suggested slide body:

- review after implementation
- verification before handoff
- both can stop the workflow
- evidence persists into PR handoff

Suggested speaker notes:

This is where participants should see that review and verification are not epilogues. They are gates with authority to stop progress.

## Demo Script

### Demo 1 — Scope Drift Trial

Scenario:

A seemingly correct patch touches an extra helper file and adds an unnecessary refactor.

Steps:

1. Put the Implementation Plan on screen.
2. Show the diff.
3. Ask the room to identify:
   - planned change
   - unplanned change
   - risky change
4. Record findings in severity order.
5. Decide whether the drift should be:
   - removed
   - split into a new work item
   - explicitly re-approved

Key teaching line:

`A good diff can still be a bad delivery if it violates the brief.`

### Demo 2 — Workflow Assembly

Build a workflow live from the prior artifacts:

1. list the artifacts from Labs 01 through 05
2. assign a named agent to each major phase
3. define one required handoff artifact per phase
4. add three gates:
   - plan review
   - scope drift
   - verification
5. identify one stop condition where human approval is mandatory

## Worked Artifact Example

Use this in class as a sample handoff:

```md
## Handoff: Plan Critic -> Implementation Agent

### Pass
- approved Implementation Plan
- context map
- open-question register with resolved and unresolved items marked

### Do Not Pass
- raw exploratory notes
- unrelated repo findings

### Required Artifact
- implementation-ready work package list

### Success Condition
- Implementation Agent can start Phase 1 without reopening planning
```

## Instructor Demo Ideas

### Demo 1 — Scope Drift Trial

Take a change with extra edits and walk through:

- what was approved
- what drifted
- why it matters
- whether the extra work should be reverted, separated, or re-approved

### Demo 2 — Review

Create a minimal but defensible packet containing:

- summary of change
- commands run
- results
- known risks
- follow-up work

### Demo 3 — Workflow Assembly

Start with the Day 1 and Day 2 artifacts and map them into:

- named agents
- workflow phases
- handoffs
- gates
- stop conditions

## End-of-Day Demo Rubric

A good participant demo should show:

- review findings tied to the brief
- actual verification evidence
- a Workflow with named agents and phases
- at least three explicit gates or stop conditions

## Required Supporting Files

- [executive-summary.md](executive-summary.md)
- [../docs/LIVE-TRAINING-AGENDA.md](../docs/LIVE-TRAINING-AGENDA.md)
- [../labs/05-review-test-and-verify/LAB.md](../labs/05-review-test-and-verify/LAB.md)
- [../labs/05-review-test-and-verify/solution_order_totals.py](../labs/05-review-test-and-verify/solution_order_totals.py)
- [../labs/06-agent-orchestra-design-a-multi-agent-delivery-workflow/LAB.md](../labs/06-agent-orchestra-design-a-multi-agent-delivery-workflow/LAB.md)
- [../labs/06-agent-orchestra-design-a-multi-agent-delivery-workflow/safe-feature-slice-delivery-example.md](../labs/06-agent-orchestra-design-a-multi-agent-delivery-workflow/safe-feature-slice-delivery-example.md)
- [../templates/custom-agent-template.md](../templates/custom-agent-template.md)
- [../templates/verification-gate-template.md](../templates/verification-gate-template.md)
