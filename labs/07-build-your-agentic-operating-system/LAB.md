# Lab 07 — Build Your Agentic Operating System

## Purpose

Lab 07 starts where Lab 06 ends:

Now that the workflow runs, how do we know it is working, and how does it improve itself over time?

This is the observability, feedback, and continuous improvement lab.

## Core Question

How do we turn one successful multi-agent workflow into a system that gets faster, safer, and more reusable every time it runs?

## Focus Areas

Participants should cover:

- observability
- usage review
- quality review
- gate review
- agent performance review
- routing changes
- governance and human approval points
- skill and workflow improvement backlog

## Success Dimensions

Define success across at least these dimensions:

| Dimension | Example metric |
| --- | --- |
| Delivery | PR created, ticket resolved, work accepted |
| Quality | tests passed, review findings resolved |
| Speed | cycle time, human wait time, phase duration |
| Efficiency | context usage, tokens, or tool calls per useful output |
| Reuse | skills, agents, or gates improved |

## Observability Targets

Participants should decide what to capture for:

- phase duration
- agent handoffs
- tool calls
- tests run
- failed commands
- files touched
- review findings
- stop conditions triggered
- human interventions
- usage breakdown

## Output

Participants produce an operating system specification with:

- workflow observed
- success metrics
- telemetry to capture
- usage review
- quality review
- gate review
- agent performance review
- skill improvement backlog
- routing changes
- stop-condition changes
- human review policy
- continuous improvement loop
- next-run checklist

## Supporting Material

Use [post-run-review-template.md](post-run-review-template.md) as the base template for the post-run review section.

## Exercises

1. Define at least five success metrics for the Lab 06 workflow.
2. Decide where telemetry should be captured: phase, agent, tool, handoff, and gate.
3. Run a post-run review and classify delivery, learning, verification, coordination, leverage, and waste.
4. Improve one skill, one gate, one handoff rule, one stop condition, or one routing decision.
5. Publish the next-run checklist.

## Next-Run Checklist Sections

The checklist should include:

- intake is clear
- context boundaries set
- agents selected
- skills loaded
- dynamic data sources connected
- gates configured
- stop conditions agreed
- human checkpoints assigned
- telemetry captured
- post-run review scheduled

## Pass Criteria

A Lab 07 artifact passes if:

- it defines success metrics
- it identifies telemetry to capture
- it includes a post-run review format
- it updates at least one skill, agent, or gate
- it defines a next-run checklist
- it explains how the workflow improves over time
- it makes quality, speed, and reuse observable

## Self-Study Note

If this lab is being completed independently, treat the output as the course capstone. The document should be usable by a future participant or teammate as a real operating guide for running the Lab 06 workflow again.
