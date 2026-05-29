# Plugins, Skills, Commands, and Model Selection

## Purpose

This guide supports Day 1 of the course. It gives instructors and participants a concrete decision framework for:

- using Claude Marketplace and plugins
- distinguishing plugins, skills, commands, agents, and subagents
- deciding when work should stay interactive and when it should run headless
- selecting the right model for the job, including cases where a non-Anthropic model may be appropriate

## Start With the Smallest Useful Abstraction

Default rule:

1. start with a direct prompt or command
2. move to a custom command when the prompt repeats
3. move to a skill when the method repeats and needs structure
4. move to an agent or subagent when the work needs a bounded mission and output artifact
5. move to a plugin when multiple reusable components should be packaged and shared together

Do not start with the biggest abstraction. Start with the smallest abstraction that solves the problem reliably.

## Commands vs Skills vs Agents vs Plugins

### Command

Use a command when:

- the operation is prompt-shaped
- the user still wants to invoke it directly
- the behavior is short, explicit, and easy to understand

Examples:

- `/review-pr-risk`
- `/summarize-failing-test`
- `/draft-pr-body`

Good command characteristics:

- short invocation
- predictable output shape
- minimal setup
- easy team adoption

### Skill

Use a skill when:

- a method repeats often
- the work benefits from stable steps, references, or bundled assets
- the behavior needs more structure than a single command should carry

Examples:

- ticket-to-plan
- adversarial-code-review
- flaky-test-investigation
- release-risk-assessment

Good skill characteristics:

- clear trigger condition
- compact instructions
- references loaded only when needed
- reusable output artifacts

### Agent

Use an agent when:

- the task has a clear mission
- the work should be bounded
- tool access should be explicit
- the output should have a stable artifact format

Examples:

- Commit Archaeologist
- Diff Prosecutor
- Test Strategist
- PR Narrator

### Subagent

Use a subagent when:

- one part of a larger workflow should be delegated
- you want separate context for a narrow task
- you want specialized instructions without polluting the main thread

Examples:

- a history-only investigator
- a documentation-only researcher
- a verification-only runner

### Plugin

Use a plugin when:

- you want to package multiple reusable components together
- a team should install the same setup with one action
- the reuse unit is bigger than a single skill or command

Examples:

- a frontend workflow pack
- a security review pack
- a PR review pack
- a release workflow pack

## How Plugins Relate to Marketplace Usage

Think of the marketplace as a distribution layer, not as the workflow itself.

Use the marketplace to:

- discover reusable packages
- install team-standard operating bundles
- evaluate how others package commands, agents, hooks, and MCP integrations

Do not use the marketplace as an excuse to skip evaluation. Every install should still be reviewed for:

- source and maintainer trust
- tool and permission footprint
- overlap with existing internal skills or commands
- maintenance burden
- whether the team actually needs the full package

## Current Claude Code Mechanics

Teach these as concrete platform mechanics:

- plugins are installed through the `/plugin` flow
- custom slash commands are Markdown-backed reusable prompts
- MCP servers can expose prompts that appear as slash commands
- `/agents` is used to manage custom subagents
- `/model` is used to inspect or change the current model during an interactive session

These mechanics matter because they shape where reuse actually lives in day-to-day operation.

## What a Plugin Can Package

In Claude Code, a plugin is best taught as a packaged collection of extension points. A single plugin may bundle:

- slash commands
- subagents
- MCP servers
- hooks

That is why plugin should be taught as a distribution abstraction instead of as a synonym for any reusable instruction.

## Commands in Practice

There are three command patterns participants should understand:

### Built-In Commands

Examples:

- `/help`
- `/model`
- `/agents`
- `/mcp`
- `/permissions`
- `/compact`

These change or inspect the Claude Code environment directly.

### Custom Slash Commands

Use these when the team wants a short, repeatable prompt invocation backed by a Markdown file.

Teach them as:

- easy to create
- easy to share in a repo
- the right fit for small repeatable prompt patterns

### MCP-Exposed Commands

When an MCP server exposes prompts, those prompts can show up as slash commands. This is useful when:

- a system already has structured remote context
- the command should be backed by server-side logic or permissions
- the team wants discoverable operations from external systems inside Claude Code

## Why Subagents Matter for Context

Subagents should not be taught as just “more agents.”

Teach the key benefit directly:

- they can work with separate context from the main conversation
- they can have bounded tool access
- they keep narrow investigative or review work from polluting the main thread

This is one of the cleanest bridges between Lab 01 and Lab 02, because context management becomes real as soon as learners see why subagents and compact artifacts matter.

## Marketplace Evaluation Checklist

Before installing a plugin from a marketplace, ask:

1. What problem does this solve?
2. Is the package smaller than the problem, or larger than the problem?
3. Which commands, agents, hooks, or MCP connections does it add?
4. Which parts are safe by default, and which parts need approval?
5. Would we be better served by a local skill or project command instead?
6. Should this be installed for one user, one team, or the whole organization?

## Plugins vs Skills vs Commands

Use this quick decision table during instruction.

| If the thing you want is... | Prefer... | Why |
| --- | --- | --- |
| a short reusable prompt shortcut | command | simplest reusable invocation |
| a repeatable method with structure | skill | reusable instructions and references |
| a bounded worker with a mission | agent or subagent | clear role, artifact, and stop conditions |
| a packaged bundle of reuse units | plugin | installable collection for a team or marketplace |

## Where Marketplace Fits

Marketplace is most useful when:

- a team wants a shared starter kit
- a reusable pack combines multiple components
- an internal best practice should be distributed consistently

Marketplace is less useful when:

- the behavior is one small command
- the team has not stabilized the workflow yet
- the package adds more surface area than the team is ready to operate

## How to Teach Marketplace Use

Recommended instructor flow:

1. show the problem first
2. show the smallest abstraction that solves it
3. show when the abstraction should be promoted into a packaged reusable asset
4. only then show where marketplace helps with distribution

This prevents learners from confusing installation mechanics with workflow design.

## Commands, Skills, and Plugins in One Example

Example: repeated PR review workflow

- command: `/review-risk`
- skill: `adversarial-code-review`
- agent: `Diff Prosecutor`
- plugin: `review-workflow-pack` containing commands, subagents, hooks, and optional MCP configuration

The same workflow can exist at multiple layers. The question is not which layer is best in general. The question is which layer is best for the current reuse problem.

## Using a Skill-Creation Workflow

When a repeated method shows up often, teach participants to ask:

- Is this stable enough to repeat?
- Does it need references or assets?
- Is the output shape predictable?
- Would a future teammate benefit from the same guidance?

If the answer is yes, mint a new skill.

Minimum fields for a first-pass skill:

- name
- description
- when to use
- when not to use
- required inputs
- workflow
- output artifact
- verification checklist

Use [../templates/skill-template.md](../templates/skill-template.md) as the course starter pattern.

## Interactive vs Headless

### Interactive

Prefer interactive operation when:

- requirements are still moving
- the user needs frequent steering points
- the task is exploratory
- the cost of one wrong action is high

### Headless

Prefer headless operation when:

- the task is well-scoped
- the verification path is known
- the same job will run repeatedly
- the operator wants predictable automation

Teaching note:

Headless should be described as a delivery mode, not as a substitute for thinking. If the plan is weak, headless just makes the failure faster.

## Goal Mode

Use goal mode when:

- the work spans multiple steps or turns
- the objective must remain stable
- the plan needs to survive context changes

Goal mode is useful for keeping planning and execution anchored to the actual job instead of drifting toward whatever detail was most recently discussed.

## Debate Mode

Use debate mode when:

- a plan looks plausible but may be weak
- there are multiple valid implementations
- a skeptical pass is needed before coding
- the team wants pressure-testing instead of immediate agreement

Debate mode is especially useful in Lab 02 before implementation begins.

## Model Selection Framework

The course is Claude-centered, but model selection should remain job-centered. Do not turn model choice into brand loyalty.

Select the model based on:

- task complexity
- need for long-horizon reasoning
- tolerance for latency
- cost sensitivity
- need for tool use or code editing
- need for deterministic formatting or structured output
- sensitivity of the data and approved deployment surface

## Practical Model Routing Heuristics

Use these heuristics in class discussion:

- use the strongest reasoning model available for ambiguous planning, adversarial review, and complex coding decisions
- use a faster model when the work is repetitive, bounded, and easy to verify
- use batch-friendly lower-cost models for large-scale classification or summarization if quality remains acceptable
- route to an approved non-Anthropic model only when the organization, platform, cost envelope, or workload makes that the better operational choice

The correct answer is not “always Claude” or “always cheapest.” The correct answer is the model that best fits the actual job.

## Suggested Model Routing Questions

Ask these in order:

1. Is this primarily coding, planning, research, review, or summarization?
2. Does the task need fast iteration or deep reasoning?
3. Is the task interactive or batch?
4. Does the environment require a specific vendor or deployment surface?
5. Does the team need the best available model, or the fastest acceptable model?

## When a Non-Anthropic Model May Be Reasonable

A non-Anthropic model may be reasonable when:

- the organization already standardizes a different model for that workload
- the task is simple enough that model quality is not the bottleneck
- latency or cost dominates the decision
- a specific external platform requires a different model family

Examples:

- inexpensive summarization at scale
- batch labeling or classification
- existing product features already built on another provider

## When Claude Should Still Be the Preferred Default

Keep Claude as the default when the work depends on:

- tool use across real engineering workflows
- nuanced code review
- multi-step planning
- artifact synthesis from mixed evidence
- agentic workflows with gates and handoffs

## Teaching Rule for Model Selection

Teach participants to route by job, not by hype.

A good operator can explain:

- why this model is being used
- what tradeoff is being accepted
- when the job should be rerouted to a different model or mode

## Discussion Prompts

- What repeated workflow in your team should be a command, not a plugin?
- What repeated workflow in your team should be a skill, not a command?
- What packaged setup would justify plugin distribution?
- Which jobs in your current stack would you keep on Claude, and which would you intentionally route elsewhere?
