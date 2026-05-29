# Lab 03 — Commit Archaeology: Find the Why Before the What

## Objective

Recover intent before editing code.

## Materials

- local Git history
- any linked GitHub issue or PR
- the execution brief from Lab 02
- [investigation-memo-template.md](investigation-memo-template.md)

## Scenario

A teammate says, “This pricing behavior looks wrong, but I think it changed for a reason.” Before touching the code, investigate what changed, why it changed, and what downstream behavior depends on it.

## Exercises

1. Use Git history to identify the last three commits touching the relevant file.
2. Use `git blame` to find the line-level origin of the suspect logic.
3. Inspect at least one historical diff and summarize its intent.
4. Investigate the linked GitHub issue or PR discussion that motivated the change.
5. Write down what is confirmed, what is inferred, and what is still unknown.

## Example Commands

```bash
git log -- examples/demo-app/src/order_totals.py
git blame examples/demo-app/src/order_totals.py
git show <commit>
```

If GitHub context exists for the work item, capture the relevant issue or PR links as part of the memo.

## Example Investigation Prompt

```text
Investigate why this pricing logic currently behaves the way it does.

Use:
- git log
- git blame
- at least one historical diff
- any linked issue or PR context

Return:
1. confirmed evidence,
2. likely intent,
3. risks of changing the behavior,
4. one unresolved question.

Do not edit code.
```

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

Use [investigation-memo-template.md](investigation-memo-template.md) if you want a starting structure.

## Reused Later

The investigation memo becomes a required handoff artifact in Lab 06 for any workflow that claims to recover intent before editing.

## Pass Criteria

This lab passes when the memo:

- distinguishes evidence from inference
- identifies at least one concrete historical artifact
- explains how the historical intent affects the current plan

## Suggested Reflection

What did the history tell you that a read of the current file alone would have missed?
