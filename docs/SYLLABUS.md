# Detailed Syllabus

## Format

The course is a four-day live program with five instructional hours per day. Each day combines lecture, instructor walkthrough, self-guided lab work, and group or individual demos. The labs are major course components, but they support the live delivery plan rather than replacing it.

The live teaching model assumes the cohort already contains useful partial knowledge. Each new concept should begin with a short share-and-tell prompt so participants can surface what they have already tried and what appears to be working before the instructor moves into the formal lesson.

Use [LIVE-TRAINING-AGENDA.md](LIVE-TRAINING-AGENDA.md) for the day-by-day schedule. Use this syllabus to understand what each lab contributes to the larger course.

For Day 1 teaching details on marketplace usage, plugins versus skills versus commands, and model selection, use [PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](PLUGINS-SKILLS-COMMANDS-AND-MODELS.md).

## Lab 00 — No Speed Limits Setup & Local Stack Bootstrap

Participants install prerequisites, configure terminal ergonomics, review IDE and terminal usage patterns, run the demo repo, and build a shared vocabulary around permissions, safety, and warm-up habits.

Delivery note:
- complete before Day 1 when possible, or use as the opening setup block if the cohort requires live onboarding

Topics:
- installation checklist
- terminal and shell setup
- IDE versus terminal operating model
- repo warm-up
- verification basics
- allowed tools and permissions posture

Primary artifact:
- setup checklist and warm-up evidence

## Lab 01 — Know the Machine: Claude Code Primitives

Participants learn the building blocks underneath Claude Code: context windows, transcripts, compaction, tools, skills, slash commands, hooks, MCP, agents, subagents, custom agents, background agents, workflows, goals, and orchestration.

Topics:
- primitive selection
- the operating DNA of a tool, skill, agent, and subagent
- skill creation and when to mint a new reusable skill
- interactive versus headless execution
- goal mode and debate mode
- stop conditions
- when to escalate from prompt to workflow
- choosing directness versus reuse

Primary artifact:
- primitive design worksheet

## Lab 02 — From Mess to Mission: Creating Plans for Execution.

Participants take a piece of work and turn it into an execution-ready plan. Topics include intake assessment, bounded codebase Q&A, context maps, assumptions, open-question registers, work disaggregation, peer review, and execution briefs.

Topics:
- clarifying vague requests
- context window management and compaction discipline
- artifact-first planning instead of transcript-first planning
- planning before editing
- using debate review to pressure-test a plan before implementation
- defining phases and verification gates
- handoff-quality execution briefs

Primary artifact:
- implementation plan and execution brief

## Lab 03 — Commit Archaeology: Find the Why Before the What

Participants learn how to recover intent from existing systems before editing code.

Topics:
- Git history and blame
- finding the commit that introduced behavior
- reading historical diffs
- investigating GitHub issues and PRs
- reconstructing product and technical intent

Primary artifact:
- investigation memo with evidence links and hypotheses

## Lab 04 — Give Claude Eyes & Ears: Connecting Dynamic Data Sources

Participants improve model outcomes by connecting Claude to the dynamic data required to reason about real systems rather than relying on static prompt context alone.

Topics:
- logs and traces
- failing tests and test output
- screenshots and simulator output
- CLI output and shell state
- MCP servers, APIs, and documentation sources
- issue systems and PR discussions as live context
- narrowing the problem with concrete observations

Primary artifact:
- connected dynamic-context plan and feedback bundle

## Lab 05 — Review, Test, & Verify

Participants use the plan and investigation work to implement in controlled phases, inspect diffs, run adversarial review, create a test strategy, add tests, fix failures, and produce PR-ready evidence.

Topics:
- phase-by-phase implementation
- review discipline
- verification gate design
- evidence-first PR handoff

Primary artifact:
- code change, review notes, and verification packet

## Lab 06 — Agent Orchestra: Design a Multi-Agent Delivery Workflow

Participants bring together the outputs of Labs 00 through 05 and design a complete named multi-agent delivery workflow that can take a piece of work from intake through planning, implementation, review, testing, and PR handoff.

Topics:
- orchestrator-first workflow design
- named agents and responsibilities
- skills, tools, and MCP/data-source selection
- workflow phases and handoffs
- verification gates and stop conditions
- human approval checkpoints
- reusable workflow design

Primary artifact:
- named multi-agent workflow specification

## Lab 07 — Build Your Agentic Operating System

Participants start where Lab 06 ends: now that the workflow runs, they define how it should be observed, reviewed, measured, and improved over time.

Topics:
- success metrics
- workflow observability
- post-run review
- usage and quality review
- gate review
- routing changes
- skill and agent improvement backlog
- next-run checklist

Primary artifact:
- agentic operating system specification

## Live Delivery Mapping

- Day 1: Labs 01 and 02
- Day 2: Labs 03 and 04
- Day 3: Labs 05 and 06
- Day 4: Lab 07

Lab 00 is the onboarding lab and should be completed before the main sequence whenever possible.

## Cross-Course Instructor Material

- [LIVE-TRAINING-AGENDA.md](LIVE-TRAINING-AGENDA.md)
- [PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](PLUGINS-SKILLS-COMMANDS-AND-MODELS.md)
- [TOOL-PERMISSIONS-EXAMPLES.md](TOOL-PERMISSIONS-EXAMPLES.md)
- [WORKFLOW-INTEGRATION.md](WORKFLOW-INTEGRATION.md)
- [TRANSCRIPT-CHEAT-SHEET.md](TRANSCRIPT-CHEAT-SHEET.md)
- [TRANSCRIPT-ALIGNMENT-APPENDIX.md](TRANSCRIPT-ALIGNMENT-APPENDIX.md)
