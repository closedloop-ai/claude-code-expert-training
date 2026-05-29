# Day 1 Anti-Pattern Artifact

## Primitive Board

### Task

We need Claude to help with tickets better.

## Proposed Setup

- use an agent for all ticket work
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

- no task-by-task classification
- no distinction between tool, command, skill, agent, and plugin
- no model-routing logic
- no mode selection
- no output artifacts
- no stop conditions
- no explanation of why the chosen abstraction is correct
