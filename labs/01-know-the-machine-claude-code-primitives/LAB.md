# Lab 01 — Know the Machine: Claude Code Primitives

## Objective

Choose the right Claude Code primitive or operating mode for a task, and explain why.

## Materials

- [primitive-design-worksheet.md](primitive-design-worksheet.md)
- `README.md`
- `docs/SYLLABUS.md`
- `docs/TOOL-PERMISSIONS-EXAMPLES.md`
- `docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md`

## Scenario

You have a repeated workflow: given a ticket, inspect the codebase, identify open questions, create an implementation plan, and prepare a clean execution brief.

Your team also wants to know which parts of that workflow should become a reusable skill, which steps need a focused agent or subagent, and which actions should stay as direct tool use.

## Core Definitions

Use these working definitions during the lab:

| Concept | Working definition |
| --- | --- |
| Tool | a concrete action or observation such as running a command, reading a file, or calling an external system |
| Skill | a reusable method that packages instructions, references, and optional assets for a repeated task |
| Agent | a bounded worker with a mission, inputs, allowed tools, stop conditions, and an output artifact |
| Subagent | a narrower delegated worker inside a larger workflow, usually isolated to one investigative or implementation task |
| Hook | an automatic pre-run or post-run action used to enforce repeated behavior |
| MCP server | a structured external context source that gives Claude access to systems, datasets, or documentation |
| Workflow | a multi-phase operating pattern with gates, handoffs, approvals, and reusable artifacts |

## DNA of a Reusable Primitive

When evaluating a tool, skill, agent, or subagent, define the following:

- mission
- inputs
- context required
- allowed tools
- tools disallowed
- output artifact
- stop condition
- verification rule

## Operating Modes

This lab also distinguishes the execution mode from the primitive itself.

| Mode | Use it when |
| --- | --- |
| Interactive | the user needs steering, iteration, or live decisions as work progresses |
| Headless | the task is well-bounded, repeatable, and can run with minimal intervention |
| Goal mode | the work should stay anchored to a durable objective across multiple steps or turns |
| Debate mode | the plan or design needs structured pressure-testing before implementation |

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

## Skill-Minting Exercise

One outcome of this lab is deciding when a repeated pattern deserves to become a new skill.

For one repeated team task, draft a new skill definition that includes:

- skill name
- short description
- trigger condition
- core workflow steps
- references or assets the skill would need

Use the course discussion of skill creation as the model: keep the skill concise, focused on reusable method, and explicit about when it should trigger.

## Plugins and Marketplace

This lab should also make participants explain where packaging and distribution begin.

Use the following rule:

- command when the reuse unit is a single invocation
- skill when the reuse unit is a method
- plugin when the reuse unit is a bundle of commands, agents, hooks, or MCP integrations intended for distribution

Marketplace should be treated as a way to discover and distribute packaged reuse, not as the starting point for deciding how work should be structured.

## Steps

1. Identify the goal.
2. Identify required context.
3. Decide the primitive: prompt, slash command, tool, skill, custom agent, subagent, hook, MCP server, background agent, or workflow.
4. Decide the mode: interactive, headless, goal mode, or debate mode.
5. Define inputs and outputs.
6. Define stop conditions.
7. Define verification.
8. Draft one reusable skill that your team should mint from repeated practice.

## Deliverable

Complete [primitive-design-worksheet.md](primitive-design-worksheet.md) or adapt it into a cleaner team-ready version.

Also produce:

- one tool/skill/agent/subagent anatomy table
- one draft skill definition for a repeated team workflow

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
- chosen mode
- why it fits
- output artifact
- stop condition
```

## Why It Matters for Later Labs

The primitive choices made here are reused in Lab 06 when participants explicitly define which parts of a multi-agent workflow should be handled by prompts, tools, skills, agents, hooks, MCP servers, or orchestration logic.

## Pass Criteria

This lab passes when the participant can explain:

- why the chosen primitive is the correct one
- why the chosen mode is the correct one
- what the primitive should accept as input
- what artifact it should return
- what makes a tool different from a skill, and a skill different from an agent
- when the primitive should stop and ask for human help
- when a repeated pattern should be minted into a reusable skill

## Suggested Reflection

Name one task you previously handled with a vague prompt that should really become a skill, agent, or workflow, and explain whether it should run interactively or headless.
