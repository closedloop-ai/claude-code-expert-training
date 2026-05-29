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
