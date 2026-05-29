# Lab 04 — Giving Claude Better Feedback Tools

## Objective

Improve the model's next answer by giving it better artifacts.

## Scenario

Claude produced a partial fix, but the result is still wrong. Your task is to avoid vague feedback like “that didn't work” and instead supply concrete evidence.

## Required Feedback Artifacts

Use at least three of the following:

- failing test output
- CLI output
- screenshot of the broken UI or state
- app simulator output or emulator trace
- diff excerpt showing the suspicious area
- short written observation about what changed versus what was expected

## Exercises

1. Run the failing command or test.
2. Capture the smallest useful output.
3. If the problem is visual, add a screenshot or simulator observation.
4. Summarize the failure in one precise sentence.
5. Ask Claude to revise the fix using only the supplied artifacts.

## Teaching Focus

- give evidence, not frustration
- reduce noise before pasting output
- tell Claude what to focus on in the artifact
- distinguish reproduction evidence from diagnosis

## Deliverable

Create a feedback bundle containing:

- one failing artifact
- one observation
- one revised instruction to Claude
- one sentence explaining why this feedback is better than a generic correction
