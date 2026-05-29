# Lab 00 — No Speed Limits Setup & Local Stack Bootstrap

## Objective

Get every participant to a known-good starting point before they try to use Claude Code on real work.

## What You Need

- Git
- Python 3
- a shell you are comfortable using
- an editor or IDE
- this repository cloned locally

## Why This Matters

Every later lab assumes the environment is already working. The purpose of this lab is to remove avoidable friction before the course moves into planning, investigation, multi-agent orchestration, and observability.

## Why This Lab Exists

Strong users lose very little time to setup friction. Weak users burn half the session on install issues, terminal confusion, missing tests, or repo context they should have established up front.

## Outcomes

By the end of this lab, participants can:

- explain the difference between terminal-first and IDE-first usage
- navigate the repo confidently
- run the baseline demo commands
- describe the current permissions posture
- show a basic repo warm-up routine
- explain the toolchain assumptions that later labs depend on

## Setup Checklist

1. Confirm shell, editor, and Python are installed.
2. Open the repo in both terminal and IDE.
3. Run the demo-app test suite.
4. Run the demo app directly.
5. Identify the labs, templates, examples, and docs directories.
6. Explain which commands are safe by default and which should require approval.

## Required Commands

Run these commands and capture the output:

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

## Repo Warm-Up Walkthrough

Complete the following before moving on:

1. Read the top-level `README.md`.
2. Read `docs/SYLLABUS.md`.
3. Identify where the labs, examples, templates, docs, and scripts live.
4. Open `examples/demo-app/src/order_totals.py`.
5. Explain what would count as a safe first prompt to Claude if no edits are allowed yet.

## Warm-Up Exercises

1. Use the terminal to list the repo layout.
2. Open `examples/demo-app/src/order_totals.py`.
3. Run `python -m pytest` in `examples/demo-app`.
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
- a short baseline operating-rules note for Labs 01 through 07

## Pass Criteria

This lab passes when the participant can:

- run the baseline commands without assistance
- describe the structure of the repo
- explain how they would investigate before editing
- state the basic permissions and approval posture they want for the rest of the course
