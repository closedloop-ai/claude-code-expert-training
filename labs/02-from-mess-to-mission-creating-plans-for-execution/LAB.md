# Lab 02 — From Mess to Mission: Creating Plans for Execution.

## Objective

Turn ambiguous work into a plan that is compact, reviewable, and ready for execution.

The plan should survive context-window pressure: it must be short enough to reuse, specific enough to execute, and structured enough to hand off.

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

Good Implementation Plans do four things:

1. separate facts from assumptions
2. identify what must be learned before coding
3. bound the work into reviewable phases
4. define what “done” means before implementation starts

## Context Window Management

Strong planning is also context management. Use the following rules during the lab:

- gather context in bounded slices instead of reading the whole repo
- summarize findings into artifacts instead of carrying forward full transcripts
- keep open questions explicit so unresolved issues do not pollute later prompts
- compact long investigation output into short reusable notes
- pass artifacts, not raw exploration history, into later execution and review steps

If the plan cannot fit into an Implementation Plan, it is not ready.

## Planning Modes

Lab 02 should also make explicit use of operating modes from Lab 01:

- use goal mode when the work needs to remain anchored to a stable objective while context is gathered
- use debate mode when the draft plan needs structured criticism before implementation starts

## Steps

1. Assess intake quality.
2. Explore codebase context without editing and keep the search bounded.
3. Build a context map that identifies which findings should survive into the Implementation Plan.
4. Build an open-question register.
5. Draft an implementation plan.
6. Disaggregate work into executable packages.
7. Run peer or debate review.
8. Compact the plan into a Day 05 Implementation Plan.

## Required Artifacts

Produce the following as separate sections or separate files:

- intake assessment
- context map
- open-question register
- implementation plan
- Implementation Plan
- short context-budget note explaining what information was intentionally excluded

## Worked Example

Use [implementation-plan-example.md](implementation-plan-example.md) as a reference for the level of specificity expected. The example is not the only correct answer, but it shows the desired compactness and structure.

## Example Planning Prompt

```text
You are preparing an Implementation Plan for a small change to the demo app.

Goal:
Add optional percentage discount-code support.

Before proposing code:
1. inspect the relevant files,
2. summarize current behavior,
3. list open questions,
4. propose bounded work packages,
5. define a verification plan,
6. keep the final plan compact enough to hand off without the full exploration transcript.

Do not implement yet.
```

## Example Output Shape

Your Implementation Plan should have, at minimum:

- one-sentence goal
- current behavior summary
- explicit assumptions
- open questions
- phased work packages
- required tests
- stop conditions
- context notes that are short enough to reuse in later prompts

## Deliverables

- intake assessment
- context map
- open questions register
- implementation plan
- Implementation Plan
- context-budget note

## Reused Later

These artifacts are explicit inputs to Lab 06. Participants should keep them compact, reviewable, and handoff-ready.

## Pass Criteria

This lab passes when:

- the plan addresses the stated requirements
- non-goals are explicit
- open questions are separated from assumptions
- work packages are bounded enough to be reviewed phase by phase
- the Implementation Plan is compact enough to fit within a constrained context window
- the Implementation Plan is good enough for someone else to implement

## Suggested Reflection

Write one paragraph explaining which part of planning or context management you are most likely to skip under deadline pressure, and what problem that would create later in the workflow.
