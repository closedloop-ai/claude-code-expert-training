# Lab 02 — From Mess to Mission: Creating Plans for Execution.

## Objective

Turn ambiguous work into a plan that is compact, reviewable, and ready for execution.

## Materials

- [implementation-plan-example.md](implementation-plan-example.md)
- `examples/demo-app/src/order_totals.py`
- `examples/demo-app/tests/test_order_totals.py`

## Demo Ticket

Add support for optional percentage discount codes to `examples/demo-app/src/order_totals.py`.

Requirements:
- discount codes are optional
- a valid discount reduces subtotal before tax
- unknown codes should raise a clear error
- discounts cannot make subtotal negative
- existing behavior should remain unchanged when no discount code is provided

## Planning Lesson

Good execution briefs do four things:

1. separate facts from assumptions
2. identify what must be learned before coding
3. bound the work into reviewable phases
4. define what “done” means before implementation starts

## Steps

1. Assess intake quality.
2. Explore codebase context without editing.
3. Build an open-question register.
4. Draft an implementation plan.
5. Disaggregate work into executable packages.
6. Run peer or debate review.
7. Create a Day 05 execution brief.

## Required Artifacts

Produce the following as separate sections or separate files:

- intake assessment
- context map
- open-question register
- implementation plan
- execution brief

## Worked Example

Use [implementation-plan-example.md](implementation-plan-example.md) as a reference for the level of specificity expected. The example is not the only correct answer, but it shows the desired compactness and structure.

## Example Planning Prompt

```text
You are preparing an execution brief for a small change to the demo app.

Goal:
Add optional percentage discount-code support.

Before proposing code:
1. inspect the relevant files,
2. summarize current behavior,
3. list open questions,
4. propose bounded work packages,
5. define a verification plan.

Do not implement yet.
```

## Example Output Shape

Your execution brief should have, at minimum:

- one-sentence goal
- current behavior summary
- explicit assumptions
- open questions
- phased work packages
- required tests
- stop conditions

## Deliverables

- intake assessment
- context map
- open questions register
- implementation plan
- execution brief

## Reused Later

These artifacts are explicit inputs to Lab 06. Participants should keep them compact, reviewable, and handoff-ready.

## Pass Criteria

This lab passes when:

- the plan addresses the stated requirements
- non-goals are explicit
- open questions are separated from assumptions
- work packages are bounded enough to be reviewed phase by phase
- the execution brief is good enough for someone else to implement

## Suggested Reflection

Write one paragraph explaining which part of planning you are most likely to skip under deadline pressure, and what problem that would create later in the workflow.
