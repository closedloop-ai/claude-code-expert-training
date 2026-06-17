# Lab 00 — Environment Setup & Local Stack Bootstrap

## Objective

Get every participant to a known-good starting point before they try to use Claude Code on real work.

## What You Need

- Git
- Node.js 18+ and pnpm
- a shell you are comfortable using
- an editor or IDE
- this repository cloned locally
- [operating-rules-template.md](operating-rules-template.md)

## Why This Matters

Every later lab assumes the environment is already working. The purpose of this lab is to remove avoidable friction before the course moves into planning, investigation, multi-agent orchestration, and observability.

## Why This Lab Exists

Setup friction is avoidable, and it is expensive: any time spent fixing installs, terminal issues, or missing repo context during the live session is time taken from hands-on practice. Clearing all of it beforehand means everyone can spend the live time building.

## Outcomes

By the end of this lab, participants can:

- explain the difference between terminal-first and IDE-first usage
- navigate the repo confidently
- run the baseline demo commands
- describe the current permissions posture
- show a basic repo warm-up routine
- explain the toolchain assumptions that later labs depend on

## Setup Checklist

1. Confirm shell, editor, Node.js, and pnpm are installed.
2. Open the repo in both terminal and IDE.
3. Run the demo-app test suite.
4. Run the demo app directly.
5. Identify the labs, templates, examples, and docs directories.
6. Explain which commands are safe by default and which should require approval.

## Required Commands

Run these commands and capture the output:

```bash
cd examples/demo-app
pnpm install
pnpm test
pnpm demo
```

## Repo Warm-Up Walkthrough

Complete the following before moving on:

1. Read the top-level `README.md`.
2. Read `docs/ONE-DAY-LIVE-AGENDA.md`.
3. Identify where the labs, examples, templates, docs, and scripts live.
4. Open `examples/demo-app/src/auth/session-store.ts`.
5. Explain what would count as a safe first prompt to Claude if no edits are allowed yet.

## Example First Prompt

Use a bounded prompt like this:

```text
Inspect this repository and explain:
1. what the demo app appears to do,
2. which file contains the refresh-token rotation logic,
3. which tests cover that logic,
4. what commands I should run before proposing any changes.

Do not edit files. Do not guess beyond the files you inspect.
```

## Baseline Operating Rules

Before leaving this lab, define a short operating policy for the rest of the course.

Recommended baseline:

- investigate before editing
- prefer small phases over one-shot rewrites
- run verification before claiming completion
- treat test output and CLI output as evidence
- stop on blocking questions instead of inventing requirements
- request approval for destructive or high-risk actions

## Warm-Up Exercises

1. Use the terminal to list the repo layout.
2. Open `examples/demo-app/src/auth/session-store.ts`.
3. Run `pnpm test` in `examples/demo-app`.
4. Capture the output and explain what it proves.
5. Describe how you would ask Claude to investigate without editing yet.

## Discussion Prompts

- When is the terminal faster than the IDE?
- When is the IDE faster than the terminal?
- What evidence should you gather before asking for a change?
- What permissions feel reasonable for onboarding versus implementation?

## Deliverables

- completed setup checklist
- baseline test output
- a one-paragraph repo warm-up routine
- a short baseline operating-rules note for the rest of the course using [operating-rules-template.md](operating-rules-template.md)

## Pass Criteria

This lab passes when the participant can:

- run the baseline commands without assistance
- describe the structure of the repo
- explain how they would investigate before editing
- state the basic permissions and approval posture they want for the rest of the course

## Suggested Reflection

Write two sentences:

1. What setup problem would have slowed you down later if you had skipped this lab?
2. What local command or repo fact now feels like “ground truth” for the rest of the course?
