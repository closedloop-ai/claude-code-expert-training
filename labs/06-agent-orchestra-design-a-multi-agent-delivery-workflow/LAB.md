# Lab 06 — Agent Orchestra: Design a Multi-Agent Delivery Workflow

## Purpose

Lab 06 brings together everything from Labs 00 through 05. Participants design a complete multi-phase Claude Code workflow that can take a real piece of work from intake through planning, implementation, review, testing, and PR handoff.

This lab brings it all together.

## Core Question

If you had to run this work again next week, how would you design the agentic workflow so it is faster, safer, and more reusable?

## What Gets Reused

| Prior lab | What gets reused in Lab 06 |
| --- | --- |
| Lab 00 | local setup, repo commands, toolchain assumptions |
| Lab 01 | primitive decision tree: prompt, tool, skill, agent, hook, MCP, workflow |
| Lab 02 | Implementation Plan, context map, open-question register, work packages |
| Lab 03 | Git history and issue investigation steps |
| Lab 04 | dynamic data sources: logs, tests, CLI output, screenshots, MCP, APIs, docs |
| Lab 05 | diff review, adversarial review, tests, verification evidence |

## Workflow Output

Participants produce a named multi-agent Workflow with the following sections:

- workflow name
- goal
- use when
- do not use when
- inputs
- data sources
- skills used
- tools used
- MCP servers or external context
- agents
- workflow phases
- handoffs
- verification gates
- stop conditions
- human approval checkpoints
- output artifacts
- failure modes
- reuse opportunities

## Output File

Create a single Workflow document that another team member could run without additional explanation.

## Example Workflow

Use [safe-feature-slice-delivery-example.md](safe-feature-slice-delivery-example.md) as a reference. It demonstrates one acceptable way to combine planning, investigation, dynamic data, implementation, review, testing, and PR handoff into a named workflow.

## Required Workflow Phases

Every Lab 06 workflow must include:

1. intake and goal clarification
2. context discovery
3. intent recovery
4. implementation planning
5. work disaggregation
6. implementation
7. code review
8. testing and verification
9. PR handoff
10. post-run summary

## Required Named Agents

Every workflow must define at least:

- Orchestrator Agent
- Context Scout
- Plan Critic
- Implementation Agent
- Diff Reviewer
- Test Strategist
- Verification Runner

Additional suggested agents:

- Commit Archaeologist
- PR Narrator
- Workflow Librarian

## Agent Definition Template

For each agent, define:

1. mission
2. inputs
3. context to gather
4. tools allowed
5. tools disallowed
6. output artifact
7. stop condition
8. handoff target

## Example Named Agents

Suggested roles:

| Agent | Role |
| --- | --- |
| Orchestrator Agent | Owns the workflow, delegates tasks, controls phase transitions, and produces final synthesis |
| Context Scout | Performs bounded codebase Q&A and file discovery |
| Commit Archaeologist | Uses Git history, blame, issues, and PRs to recover intent |
| Plan Critic | Red-teams the implementation plan before execution |
| Implementation Agent | Makes scoped code changes phase by phase |
| Diff Reviewer | Reviews the diff for scope drift and correctness |
| Test Strategist | Designs test strategy from acceptance criteria |
| Verification Runner | Runs checks, captures output, and reports pass/fail evidence |
| PR Narrator | Produces the final PR summary, risks, and follow-ups |
| Workflow Librarian | Identifies what should become a skill, command, hook, or reusable workflow |

## Handoff Rule

Pass artifacts, not transcripts.

Each workflow should define handoffs with:

- what is passed
- what is intentionally not passed
- the required artifact
- the success condition for the receiving agent

## Example Orchestrator Prompt

Use this as the final execution prompt skeleton:

```text
You are the Orchestrator Agent for the <workflow name> workflow.

Goal:
<goal>

Inputs:
<inputs>

Agents available:
<agents>

Workflow phases:
<phases>

Rules:
- Do not skip gates.
- Use bounded context discovery.
- Pass compact artifacts between agents.
- Stop on blocking questions.
- Implement one phase at a time.
- Run verification before PR handoff.

Begin with Phase 1: Intake.
```

## Exercises

1. Name the workflow for a real class of work.
2. Select and define the named agents.
3. Map the dynamic data sources the workflow needs.
4. Define artifact-based handoffs between agents.
5. Define at least three gates: plan review, scope drift, and verification.
6. Produce the final Orchestrator Agent execution prompt.

## Recommended Agent Set for Self-Study

If you do not have a real team workflow to model yet, start with:

- Orchestrator Agent
- Context Scout
- Commit Archaeologist
- Plan Critic
- Implementation Agent
- Diff Reviewer
- Test Strategist
- Verification Runner
- PR Narrator

## Pass Criteria

A Lab 06 workflow passes if:

- it names the workflow
- it defines at least seven agents
- each agent has a mission and output artifact
- it includes dynamic data sources
- it uses at least one skill
- it uses at least one tool or command
- it includes at least three verification or review gates
- it includes stop conditions
- it defines handoffs
- it produces PR-ready output
- it identifies reuse opportunities

## Self-Study Note

If you are taking this course without an instructor, do not skip the artifact collection from Labs 02 through 05. Lab 06 only works when the earlier artifacts are treated as real workflow inputs instead of hypothetical placeholders.

## Suggested Reflection

Which agent in your workflow is most likely to become a reusable organizational asset, and what would it need to become stable enough for reuse?
