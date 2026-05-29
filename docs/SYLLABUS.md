# Detailed Syllabus

## Format

The course is structured as a sequence of numbered labs. Each lab has a single operating objective, a realistic scenario, explicit deliverables, and handoff points to the next lab.

## Lab 00 — Setup and Onboarding

Participants install prerequisites, configure terminal ergonomics, review IDE and terminal usage patterns, run the demo repo, and build a shared vocabulary around permissions, safety, and warm-up habits.

Topics:
- installation checklist
- terminal and shell setup
- IDE versus terminal operating model
- repo warm-up
- verification basics
- allowed tools and permissions posture

Primary artifact:
- setup checklist and warm-up evidence

## Lab 01 — Claude Code Primitives

Participants learn the building blocks underneath Claude Code: context windows, transcripts, compaction, tools, skills, slash commands, hooks, MCP, agents, subagents, custom agents, background agents, workflows, goals, and orchestration.

Topics:
- primitive selection
- stop conditions
- when to escalate from prompt to workflow
- choosing directness versus reuse

Primary artifact:
- primitive design worksheet

## Lab 02 — Planning and Execution Briefs

Participants take a piece of work and turn it into an execution-ready plan. Topics include intake assessment, bounded codebase Q&A, context maps, assumptions, open-question registers, work disaggregation, peer review, and execution briefs.

Topics:
- clarifying vague requests
- planning before editing
- defining phases and verification gates
- handoff-quality execution briefs

Primary artifact:
- implementation plan and execution brief

## Lab 03 — Git History and Issue Investigation

Participants learn how to recover intent from existing systems before editing code.

Topics:
- Git history and blame
- finding the commit that introduced behavior
- reading historical diffs
- investigating GitHub issues and PRs
- reconstructing product and technical intent

Primary artifact:
- investigation memo with evidence links and hypotheses

## Lab 04 — Giving Claude Better Feedback Tools

Participants improve model outcomes by providing better evidence rather than vaguer instructions.

Topics:
- using failing tests as feedback
- using CLI output as feedback
- using screenshots or simulator output as feedback
- narrowing the problem with concrete observations
- deciding when to stop and add better instrumentation

Primary artifact:
- feedback bundle for a broken change

## Lab 05 — Review, Testing, and Verification

Participants use the plan and investigation work to implement in controlled phases, inspect diffs, run adversarial review, create a test strategy, add tests, fix failures, and produce PR-ready evidence.

Topics:
- phase-by-phase implementation
- review discipline
- verification gate design
- evidence-first PR handoff

Primary artifact:
- code change, review notes, and verification packet

## Lab 06 — Claude in Existing Workflows

Participants learn how to use Claude inside the workflows they already rely on instead of treating it as a separate environment.

Topics:
- terminal-first operation
- IDE-assisted review and debugging
- `tmux` session management
- SSH and remote-repo workflows
- when to keep work local versus remote

Primary artifact:
- workflow playbook for the participant's preferred setup

## Lab 07 — Operating at Expert Speed

Participants review the full run, identify leverage and waste, improve reusable artifacts, and define how the team should keep compounding gains.

Topics:
- post-run review
- reusable gates and skills
- permissions policy examples
- workflow standardization
- escalation rules

Primary artifact:
- operating checklist and reusable artifact improvement plan

## Cross-Course Instructor Material

- [docs/TOOL-PERMISSIONS-EXAMPLES.md](TOOL-PERMISSIONS-EXAMPLES.md)
- [docs/WORKFLOW-INTEGRATION.md](WORKFLOW-INTEGRATION.md)
- [docs/TRANSCRIPT-CHEAT-SHEET.md](TRANSCRIPT-CHEAT-SHEET.md)
- [docs/TRANSCRIPT-ALIGNMENT-APPENDIX.md](TRANSCRIPT-ALIGNMENT-APPENDIX.md)
