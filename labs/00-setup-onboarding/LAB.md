# Lab 00 — No Speed Limits Setup & Local Stack Bootstrap

## Objective

Get every participant to a known-good starting point before they try to use Claude Code on real work.

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
