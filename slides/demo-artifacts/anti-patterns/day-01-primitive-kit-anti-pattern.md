# Day 1 Anti-Pattern Artifact

## Primitive Kit (Anti-Pattern)

### Task

We need Claude to help with tickets better.

## Proposed Setup

- use one big agent for all ticket work
- maybe add some commands later
- probably make a plugin too
- use the best model for everything

## Why

- agents are powerful
- plugins sound reusable
- commands are easy
- best models are safer

## Workflow

1. ask Claude what to do
2. let it inspect the repo
3. let it make changes
4. review if there is time

## Why This Is Weak

- no primitives are actually crafted; one vague agent absorbs everything
- no distinction between tool, command, skill, agent, and plugin
- no spec per primitive: missing mode, model, inputs, outputs, and stop conditions
- no model selection by job
- no sense of how the primitives stitch into a workflow
- packaged as a plugin before the workflow has stabilized
