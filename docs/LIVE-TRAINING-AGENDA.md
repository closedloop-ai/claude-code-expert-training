# Live Training Agenda

## Delivery Model

This course is designed as a four-day live training program with five instructional hours per day, excluding breaks. Each day follows the same teaching pattern:

1. lesson framing and concept lecture
2. instructor-led walkthrough
3. self-guided lab execution
4. group or individual demo of lab results
5. day-end synthesis and handoff to the next day

The labs are a major component of the course, but the agenda is driven by live instruction and guided application rather than by lab sequence alone.

## Concept Introduction Pattern

Each major concept should begin with a short cohort knowledge exchange before the formal lesson.

Recommended prompt:

`Has anyone tried this? What is working?`

Why this matters:

- in a large cohort, many participants will already know at least one technique, workflow, or failure mode
- no individual participant is expected to know everything
- the room often already contains useful working knowledge that should be surfaced before the instructor moves into structured teaching

Recommended facilitation sequence:

1. ask for prior attempts, working patterns, and failure cases
2. collect a few concrete examples from the room
3. normalize that partial familiarity is expected
4. transition into the formal lesson with a clearer sense of what the cohort already knows

This pattern should be used at the start of new topic blocks on primitives, planning, Git investigation, dynamic data sources, review, orchestration, and observability.

## Pre-Course Work

### Lab 00 — No Speed Limits Setup & Local Stack Bootstrap

Lab 00 is the onboarding lab. Use it before Day 1 whenever possible so the live sessions can focus on operating discipline instead of environment repair.

Primary outcomes:

- local environment works
- repo warm-up is complete
- operating rules are defined
- participants can move between IDE and terminal without friction

## Daily Structure

Each live day uses five instructional hours. A standard pacing model is:

- 60 minutes: lesson and concept framing
- 45 minutes: instructor walkthrough
- 75 minutes: applied lab block A
- 45 minutes: debrief and demo for lab block A
- 45 minutes: applied lab block B or guided extension
- 30 minutes: demo, synthesis, and next-step handoff

Instructors can adjust the block lengths, but every day should preserve all four modes: lesson, walkthrough, lab, and demonstration.

Within the lesson block, reserve the opening minutes for the concept introduction pattern so participants can contribute working knowledge before the instructor formalizes the material.

## Day 1 — Foundations and Work Intake

### Teaching Focus

- operating model for Claude Code
- tools, skills, and the operating DNA of agents and subagents
- interactive versus headless execution, goal mode, and debate mode
- using a skill-creation workflow to mint new reusable skills
- converting ambiguous work into bounded execution plans
- managing the context window so planning artifacts stay compact and reusable

### Labs

- Lab 01 — Know the Machine: Claude Code Primitives
- Lab 02 — From Mess to Mission: Creating Plans for Execution.

### Expected Outputs

- primitive decision worksheet
- agent and skill anatomy notes
- draft skill definition for one repeated team task
- execution brief
- context map
- open-question register

## Day 2 — Intent Recovery and Dynamic Context

### Teaching Focus

- recover intent before editing
- use dynamic evidence instead of static prompt guesses

### Labs

- Lab 03 — Commit Archaeology: Find the Why Before the What
- Lab 04 — Give Claude Eyes & Ears: Connecting Dynamic Data Sources

### Expected Outputs

- investigation memo
- evidence links from Git, issues, and PRs
- dynamic-context plan
- feedback bundle

## Day 3 — Review Discipline and Workflow Design

### Teaching Focus

- test and verification rigor
- adversarial review
- designing reusable multi-agent workflows

### Labs

- Lab 05 — Review, Test, & Verify
- Lab 06 — Agent Orchestra: Design a Multi-Agent Delivery Workflow

### Expected Outputs

- review notes
- verification packet
- named multi-agent workflow specification
- phase and handoff map

## Day 4 — Operating System and Improvement Loop

### Teaching Focus

- making workflows observable
- deciding what to measure
- improving routing, gates, agents, and skills over time

### Lab

- Lab 07 — Build Your Agentic Operating System

### Expected Outputs

- agentic operating system specification
- success metrics
- telemetry plan
- next-run checklist

## Instructor Guidance

- Treat Labs 01 through 07 as applied components inside a broader teaching day.
- Use Lab 00 to absorb setup friction before the main agenda starts.
- Start each new concept with the cohort question: `Has anyone tried this? What is working?`
- Require demos at the end of every day so participants practice explaining evidence, decisions, and outputs.
- Preserve artifact handoffs across days. Day 2 should reuse Day 1 planning artifacts. Day 3 should reuse Day 2 evidence. Day 4 should evaluate the workflow created on Day 3.

## Recommended Demo Cadence

- Day 1: demo the execution brief and primitive choices
- Day 2: demo the investigation memo and connected data sources
- Day 3: demo the review packet and multi-agent workflow
- Day 4: demo the operating system specification and improvement loop

## Presentation Guides

Use the day-specific presentation guides in [../slides/README.md](../slides/README.md) for instructor-facing block timing, slide sequencing, demos, and teaching prompts.
