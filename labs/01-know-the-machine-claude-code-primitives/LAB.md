# Lab 01 — Know the Machine: Claude Code Primitives

## Objective

Choose the right Claude Code primitive for a task.

## Materials

- [primitive-design-worksheet.md](primitive-design-worksheet.md)
- `README.md`
- `docs/SYLLABUS.md`

## Scenario

You have a repeated workflow: given a ticket, inspect the codebase, identify open questions, create an implementation plan, and prepare a clean execution brief.

## Primitive Reference

Use this short decision frame during the lab:

| Primitive | Use it when |
| --- | --- |
| Prompt | the task is one-off and does not justify reuse |
| Tool or command | the task depends on a concrete external action or observation |
| Skill | the task repeats and benefits from a consistent method |
| Agent | the task has a focused mission and a clear output artifact |
| Subagent | one step of a larger workflow should be delegated and isolated |
| Hook | a repeated pre/post action should run automatically |
| MCP server | Claude needs structured access to an external system or dataset |
| Workflow | the work has phases, gates, handoffs, or approvals |

## Example Classification

Use the table below as a worked example.

| Situation | Best primitive | Why |
| --- | --- | --- |
| Explain what a single file does | Prompt | one-off interpretation with no reuse requirement |
| Run a test command and inspect output | Tool or command | requires concrete execution and evidence |
| Convert tickets into plans repeatedly | Skill | repeatable method with stable output structure |
| Investigate Git history and PR context | Agent | focused mission with a clear output memo |
| Pull documentation from an external system | MCP server | structured external context is required |
| Coordinate planning, implementation, review, and testing | Workflow | multiple phases, handoffs, and gates |

## Steps

1. Identify the goal.
2. Identify required context.
3. Decide the primitive: prompt, slash command, tool, skill, custom agent, subagent, hook, MCP server, background agent, or workflow.
4. Define inputs and outputs.
5. Define stop conditions.
6. Define verification.

## Deliverable

Complete [primitive-design-worksheet.md](primitive-design-worksheet.md) or adapt it into a cleaner team-ready version.

## Example Prompt

```text
We repeatedly receive small bugfix tickets with unclear reproduction steps.

Help me choose the right Claude Code primitive for:
1. intake clarification,
2. repo context gathering,
3. Git history investigation,
4. implementation planning,
5. review and verification.

For each step, state:
- chosen primitive
- why it fits
- output artifact
- stop condition
```

## Why It Matters for Later Labs

The primitive choices made here are reused in Lab 06 when participants explicitly define which parts of a multi-agent workflow should be handled by prompts, tools, skills, agents, hooks, MCP servers, or orchestration logic.

## Pass Criteria

This lab passes when the participant can explain:

- why the chosen primitive is the correct one
- what the primitive should accept as input
- what artifact it should return
- when the primitive should stop and ask for human help

## Suggested Reflection

Name one task you previously handled with a vague prompt that should really become a skill, agent, or workflow.
