# Day 2 Presentation Guide

## Session Purpose

Day 2 teaches participants how to recover intent before editing and how to improve model performance by attaching the right runtime evidence. It should leave participants with:

- a disciplined investigation method using Git history, blame, issues, and PRs
- a clear distinction between evidence, inference, and guesswork
- a practical approach to dynamic data sources such as logs, tests, screenshots, simulator output, docs, and MCP context
- a stronger habit of giving Claude evidence instead of generic feedback

## Time Plan

Use this as a five-hour instructor guide, excluding breaks.

### Block 1 — Share-Out and Day 2 Frame

Time: 25 minutes

Slides:

1. Day 2 purpose and artifact handoff from Day 1
2. `Has anyone tried this? What is working?`
3. Why teams break code when they skip intent recovery

Instructor notes:

- ask who has been burned by “this looks wrong” changes that turned out to be intentional
- collect examples of incidents caused by missing history or missing runtime evidence
- connect those failures directly to Labs 03 and 04

### Block 2 — Commit Archaeology

Time: 55 minutes

Slides:

4. Find the why before the what
5. Evidence hierarchy: current code, Git history, blame, issue, PR discussion
6. `git log`, `git blame`, and historical diff inspection
7. Confirmed evidence versus inferred intent
8. When the historical record disagrees with the current plan
9. Investigation memo structure

Instructor notes:

- teach participants not to treat the current implementation as self-explanatory
- show how line history, commit message, and issue discussion each answer different questions
- require commit hashes, issue links, or quoted rationale in the final memo

### Block 3 — Intent Recovery Demo

Time: 35 minutes

Slides:

10. Demo setup: suspicious behavior in a pricing path
11. Reconstructing a behavior change from history
12. Pulling product intent from issue or PR discussion
13. Writing the memo: preserve, revise, or revert?

Demo goals:

- start from a behavior that appears wrong
- inspect history without editing
- show what changed, why it changed, and what downstream risk exists now

### Block 4 — Dynamic Data Sources

Time: 45 minutes

Slides:

14. Static prompt versus live context
15. Dynamic evidence ladder: tests, CLI traces, logs, screenshots, simulators, docs, MCP, issue context
16. Reproduction evidence versus diagnosis
17. Minimal useful artifact versus noisy artifact dump
18. Connecting Claude to changing systems
19. Why “that didn’t work” is not feedback

Instructor notes:

- stress the difference between more data and better data
- make participants explain what each artifact proves
- teach them to label evidence explicitly

### Block 5 — Runtime Feedback Demo

Time: 35 minutes

Slides:

20. Starting with a weak correction
21. Improving it with a failing test
22. Improving it again with CLI output and docs
23. Adding a screenshot or simulator observation
24. Final evidence bundle and revised instruction

Demo goals:

- begin with vague feedback
- add evidence one artifact at a time
- show how instruction quality improves with targeted data

### Block 6 — MCP, Docs, and External Systems

Time: 30 minutes

Slides:

25. MCP as a live context bridge
26. When docs should be attached explicitly
27. When issue systems matter more than code comments
28. Routing between local repo evidence and external evidence

Instructor notes:

- keep this operational, not theoretical
- show when external systems answer questions that local code cannot
- tie this back to Day 1 distinctions between tools, MCP, and workflow design

### Block 7 — Evidence Packaging and Lab Launch

Time: 45 minutes

Slides:

29. Lab 03 output: investigation memo
30. Lab 04 output: feedback bundle
31. What makes a dynamic artifact merge-worthy
32. Demo expectations for end of day
33. Day 3 handoff: evidence becomes review input

Instructor notes:

- reinforce that the artifacts are inputs to the next day, not disposable exercises
- require participants to defend why each artifact belongs in the bundle

## Slide-by-Slide Teaching Prompts

### Slide 5 — Evidence hierarchy

Ask:

- Which source tells us what changed?
- Which source tells us why?
- Which source tells us whether that reason still applies?

### Slide 8 — When the historical record disagrees with the plan

Ask:

- Are we changing a bug, or erasing a tradeoff we do not understand yet?

### Slide 15 — Dynamic evidence ladder

Ask:

- What is the cheapest artifact that would actually change the next decision?

### Slide 19 — Why “that didn’t work” is not feedback

Ask:

- If you were the reviewer, what exact missing fact would you demand?

### Slide 27 — When issue systems matter more than code comments

Ask:

- Which decision was social or product-driven rather than visible in code?

## Instructor Demo Ideas

### Demo 1 — False Bug Archaeology

Take a seemingly broken behavior and prove whether it is:

- intentional
- accidental
- partially intentional but now outdated

### Demo 2 — Artifact Upgrade Ladder

Start with:

- “the fix still fails”

Then upgrade it to:

- failing test
- CLI trace
- log snippet
- contract note
- revised instruction with explicit focus

### Demo 3 — Evidence Compression

Show how to turn a long failing output into:

- one short evidence quote
- one interpretation
- one actionable instruction

## End-of-Day Demo Rubric

A good participant demo should show:

- at least one historical artifact with explanation
- clear separation of evidence and inference
- a feedback bundle using multiple dynamic sources
- a revised instruction that is narrower and more actionable than the original

## Required Supporting Files

- [executive-summary.md](executive-summary.md)
- [../docs/LIVE-TRAINING-AGENDA.md](../docs/LIVE-TRAINING-AGENDA.md)
- [../labs/03-commit-archaeology-find-the-why-before-the-what/LAB.md](../labs/03-commit-archaeology-find-the-why-before-the-what/LAB.md)
- [../labs/03-commit-archaeology-find-the-why-before-the-what/investigation-memo-template.md](../labs/03-commit-archaeology-find-the-why-before-the-what/investigation-memo-template.md)
- [../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/LAB.md](../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/LAB.md)
- [../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/feedback-bundle-example.md](../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/feedback-bundle-example.md)
