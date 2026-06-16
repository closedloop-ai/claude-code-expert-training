# Day 1 Presentation Guide

## Session Purpose

Day 1 establishes the operating vocabulary for the rest of the course. It should leave participants with:

- a working mental model for Claude Code primitives and modes
- a practical framework for commands, skills, agents, subagents, plugins, and marketplace usage
- a job-centered model-selection habit
- a disciplined approach to planning and context-window management

## Time Plan

Use this as a five-hour instructor guide, excluding breaks.

### Block 1 — Share-Out and Course Frame

Time: 30 minutes

Slides:

1. Course title and instructor framing
2. `Has anyone tried this? What is working?`
3. What the room already knows versus what the course will systematize

Instructor notes:

- start by normalizing uneven experience
- explicitly state that no one needs to know everything
- collect examples of existing workflows, failures, and workarounds

### Block 2 — Claude Code Operating Surface

Time: 50 minutes

Slides:

4. The Claude Code operating surface: prompts, tools, commands, skills, agents, subagents, hooks, MCP, plugins, workflows
5. Start with the smallest useful abstraction
6. Tool versus command versus skill
7. Agent versus subagent
8. Hook versus workflow
9. MCP as structured external context

Instructor notes:

- keep this concrete
- use engineering examples, not abstract definitions
- show how the same job can move across multiple abstraction levels over time

### Block 3 — Plugins and Marketplace

Time: 40 minutes

Slides:

10. What a plugin packages
11. `/plugin` and the install flow
12. Marketplace as distribution, not design
13. When to install from a marketplace
14. When to create a local skill or command instead
15. Plugin evaluation checklist
16. Team distribution patterns: personal, project, organization

Teaching points:

- commands are usually the smallest reusable layer
- skills capture method
- plugins package multiple reusable assets for distribution
- marketplace should follow workflow maturity, not precede it

Demo:

- show a hypothetical repeated team workflow
- classify whether it should be a command, skill, agent, or plugin

### Block 4 — Skill Creation and Reuse

Time: 35 minutes

Slides:

17. When a repeated method deserves a skill
18. The anatomy of a useful skill
19. Keeping skills concise
20. References versus instructions versus assets
21. First-pass skill template walkthrough

Instructor notes:

- use one real repeated workflow from the room
- convert it into a draft skill live
- keep the definition small and specific

Artifacts:

- [../templates/skill-template.md](../templates/skill-template.md)
- [../docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](../docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md)

### Block 5 — Agents, Subagents, and Modes

Time: 40 minutes

Slides:

22. The DNA of an agent
23. The DNA of a subagent
24. `/agents` and bounded tool access
25. Interactive versus headless execution
26. Goal mode
27. Debate mode
28. Choosing mode before choosing speed

Instructor notes:

- make the distinction between role and mode explicit
- a mode changes how work runs
- a primitive changes what kind of reusable thing you are building

Worked example:

- interactive planning for a new ticket
- headless verification for repeated test runs
- goal mode for multi-step execution
- debate mode for plan criticism

### Block 6 — Model Selection for the Job

Time: 30 minutes

Slides:

29. Model selection is job selection
30. `/model` and interactive model changes
31. Route by complexity, latency, cost, and deployment constraints
32. When Claude should be the default
33. When a non-Anthropic model may be acceptable
34. Codex and non-Anthropic model routing as optional complements, not ideology

Instructor notes:

- avoid vendor tribalism
- emphasize the idea of routing by job requirements
- keep the course Claude-centered while still teaching honest tradeoffs

Discussion prompt:

- Which engineering tasks in your environment would you keep on Claude by default, and which would you intentionally route elsewhere?

### Block 7 — Planning and Context Window Management

Time: 55 minutes

Slides:

35. Planning is context management
36. Facts, assumptions, and open questions
37. Build artifacts, not transcript dependency
38. Context maps and open-question registers
39. Compact execution briefs
40. Debate review before implementation

Instructor notes:

- this is the bridge into Lab 02
- show how poor context discipline creates poor execution
- demonstrate how to turn sprawling exploration into a compact brief

### Block 8 — Lab Launch and Demo Expectations

Time: 20 minutes

Slides:

41. Lab 01 outputs
42. Lab 02 outputs
43. What a good end-of-day demo looks like

Instructor notes:

- require participants to show artifact quality, not just enthusiasm
- ask them to defend primitive choices and context boundaries

## Slide-by-Slide Teaching Prompts

### Slide 6 — Tool versus command versus skill

Ask:

- What part is the concrete action?
- What part is the reusable invocation?
- What part is the reusable method?

### Slide 11 — Marketplace as distribution, not design

Ask:

- If you removed marketplace from the picture, would the workflow still make sense?

If the answer is no, the team is learning installation before workflow design.

### Slide 17 — The anatomy of a useful skill

Ask:

- What is the smallest instruction set that still makes the behavior reusable?

### Slide 23 — Interactive versus headless execution

Ask:

- What user decision points still exist?
- What could fail silently if this ran unattended?

### Slide 27 — Model selection is job selection

Ask:

- What requirement is driving the model choice here?
- If the model changed, what tradeoff would change with it?

### Slide 34 — Build artifacts, not transcript dependency

Ask:

- Could another engineer execute from this brief without the whole conversation?

If not, the artifact is not ready.

## Speaker-Ready Slide Content

Use the following sections as literal starting content for the most important Day 1 slides.

### Slide 6 — Tool versus Command versus Skill

Suggested slide body:

- Tool: concrete action or observation
- Command: reusable invocation
- Skill: reusable method
- Ask which layer actually needs to be repeated

Suggested speaker notes:

Do not teach these as competing brands. Teach them as layers of reuse. A tool does work. A command makes an invocation repeatable. A skill makes a method repeatable. If the team jumps directly to skills for everything, they create overhead. If they stay at the prompt layer for everything, they create drift and rework.

### Slide 10 — What a Plugin Packages

Suggested slide body:

- Commands
- Subagents
- MCP servers
- Hooks
- Distribution bundle, not workflow design

Suggested speaker notes:

The important distinction is that a plugin packages multiple extension points together. That makes it a distribution unit. It does not replace the need to decide whether the underlying behavior should be a command, skill, agent, or hook in the first place.

### Slide 18 — The Anatomy of a Useful Skill

Suggested slide body:

- Clear trigger condition
- Small instruction surface
- Stable output artifact
- References only when needed
- Verification checklist

Suggested speaker notes:

Participants should leave this slide knowing that a skill is not “more prompt.” A skill is a compact reusable method. The quality bar is not eloquence. The quality bar is whether another operator could trigger the same method and get a similar artifact shape without re-explaining the task.

### Slide 24 — `/agents` and Bounded Tool Access

Suggested slide body:

- Define mission
- Limit tool surface
- Keep context scoped
- Return one artifact

Suggested speaker notes:

Subagents become useful when the team wants a narrow worker with separate context and explicit tool boundaries. This is where learners should stop thinking of “agent” as personality and start thinking of it as bounded operating contract.

### Slide 30 — `/model` and Interactive Model Changes

Suggested slide body:

- Model choice follows job shape
- Deep reasoning versus fast iteration
- Cost and latency are real constraints
- Route by need, not ideology

Suggested speaker notes:

This slide is where you explicitly say that the course is Claude-centered but not blind. Some jobs merit a faster or cheaper model. Some organizations may route selected workloads to Codex or another approved non-Anthropic model. The operator’s job is to justify the routing decision clearly.

### Slide 37 — Build Artifacts, Not Transcript Dependency

Suggested slide body:

- Context map
- Assumptions
- Open questions
- Work packages
- Compact execution brief

Suggested speaker notes:

This is the bridge into Lab 02. The team should stop assuming the transcript is the system of record. The artifact is the system of record. If the next engineer needs the whole conversation, the team has not yet built a usable planning artifact.

## Demo Script

Use this Day 1 demo to move from repeated task to reusable operating design.

### Demo 1 — From Repeated Ticket Work to Skill and Agent Design

Scenario:

A team repeatedly receives small bugfix tickets with vague acceptance criteria and wants a better operating pattern.

Steps:

1. Start with the raw repeated task:
   `Take a ticket, inspect the repo, identify open questions, produce an execution brief.`
2. Ask the room:
   `What part is just a one-off prompt?`
   `What part is a reusable invocation?`
   `What part is a reusable method?`
3. Classify live:
   - repo search and test execution: tools
   - shortcut for repeated intake prompt: command
   - ticket-to-plan method: skill
   - Git history investigator: subagent
4. Show a first-pass skill draft using [../templates/skill-template.md](../templates/skill-template.md)
5. Show a first-pass agent draft using [../templates/custom-agent-template.md](../templates/custom-agent-template.md)
6. Close by asking whether the combined bundle is large enough to justify plugin distribution

Key teaching line:

`Do not package the workflow before you understand the workflow.`

## Worked Artifact Example

Use this in class as an example of a first-pass skill definition:

```md
# Skill: ticket-to-plan

## Purpose
Turn an ambiguous engineering ticket into a compact execution brief.

## When to use
Use when a work item is real but underspecified.

## Required inputs
- ticket text
- repo path
- known acceptance criteria

## Workflow
1. inspect only relevant files
2. summarize current behavior
3. separate assumptions from facts
4. list open questions
5. create phased work packages
6. produce a compact execution brief

## Outputs
- context map
- open-question register
- execution brief

## Verification checklist
- assumptions are explicit
- non-goals are explicit
- work packages are reviewable
```

## Instructor Demo Ideas

### Demo 1 — Classification Sprint

Take one repeated team task and classify it live:

- direct prompt
- command
- skill
- agent
- plugin

Then explain why the smaller abstractions fail before moving upward.

### Demo 2 — Skill Minting

Convert a repeated team behavior into a first-pass skill definition using the course template.

### Demo 3 — Plan Compression

Start with messy notes from an ambiguous request. Compress them into:

- current behavior summary
- assumptions
- open questions
- work packages
- compact execution brief

## End-of-Day Demo Rubric

A good participant demo should show:

- the chosen primitives and modes
- at least one clear rationale for command versus skill versus agent
- one draft reusable skill
- a compact execution brief
- explicit context boundaries

## Required Supporting Files

- [executive-summary.md](executive-summary.md)
- [../docs/LIVE-TRAINING-AGENDA.md](../docs/LIVE-TRAINING-AGENDA.md)
- [../docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](../docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md)
- [../labs/01-know-the-machine-claude-code-primitives/LAB.md](../labs/01-know-the-machine-claude-code-primitives/LAB.md)
- [../labs/02-from-mess-to-mission-creating-plans-for-execution/LAB.md](../labs/02-from-mess-to-mission-creating-plans-for-execution/LAB.md)
- [../templates/skill-template.md](../templates/skill-template.md)
- [../templates/custom-agent-template.md](../templates/custom-agent-template.md)
- [../templates/command-template.md](../templates/command-template.md)
- [../templates/hook-template.json](../templates/hook-template.json)
- [../templates/tool-script-template.sh](../templates/tool-script-template.sh)
- [../templates/mcp-tool-template.json](../templates/mcp-tool-template.json)
- [../templates/plugin-manifest-template.json](../templates/plugin-manifest-template.json)
