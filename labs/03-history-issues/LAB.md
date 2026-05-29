# Lab 03 — Commit Archaeology: Find the Why Before the What

## Objective

Recover intent before editing code.

## Scenario

A teammate says, “This pricing behavior looks wrong, but I think it changed for a reason.” Before touching the code, investigate what changed, why it changed, and what downstream behavior depends on it.

## Exercises

1. Use Git history to identify the last three commits touching the relevant file.
2. Use `git blame` to find the line-level origin of the suspect logic.
3. Inspect at least one historical diff and summarize its intent.
4. Investigate the linked GitHub issue or PR discussion that motivated the change.
5. Write down what is confirmed, what is inferred, and what is still unknown.

## Teaching Focus

- do not edit until the investigation is coherent
- separate evidence from guesses
- prefer direct quotes from issue or PR context when available
- capture links or commit hashes in the memo

## Deliverable

Produce an investigation memo with:

- the relevant commit hashes
- the likely intent of the change
- one unresolved question
- your recommendation on whether to preserve, revert, or revise the behavior

## Reused Later

The investigation memo becomes a required handoff artifact in Lab 06 for any workflow that claims to recover intent before editing.
