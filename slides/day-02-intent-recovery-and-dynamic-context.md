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
9. Explore findings structure

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
24. Final Request Changes and revised instruction

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

29. Lab 03 output: Explore findings
30. Lab 04 output: Request Changes
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

## Speaker-Ready Slide Content

### Slide 5 — Evidence Hierarchy

Suggested slide body:

- Current file shows present behavior
- Git history shows what changed
- Blame shows line ownership over time
- Issue or PR context shows why
- Memo separates evidence from inference

Suggested speaker notes:

Participants need to stop treating the current file as the whole truth. Engineering intent is distributed across commits, diffs, tickets, and discussion. This slide should help them understand which source answers which question.

### Slide 8 — When the Historical Record Disagrees with the Plan

Suggested slide body:

- Historical reason may still be valid
- Historical reason may be outdated
- Current plan may be incomplete
- Stop before editing if the conflict is unresolved

Suggested speaker notes:

This is where you normalize stopping. Many teams teach speed and skip restraint. The better operator knows when unresolved historical intent means the plan is not ready.

### Slide 15 — Dynamic Evidence Ladder

Suggested slide body:

- failing test
- CLI trace
- log line
- screenshot or simulator state
- contract or doc note
- issue or PR context

Suggested speaker notes:

Better reasoning does not come from larger output dumps. It comes from better evidence. Each artifact should answer a specific question that the model cannot answer reliably from static prompt text alone.

### Slide 19 — Why “That Didn’t Work” Is Not Feedback

Suggested slide body:

- say what failed
- show where it failed
- show what was expected
- narrow the next instruction

Suggested speaker notes:

Make this practical. Participants should feel embarrassed by vague feedback after this slide. If they cannot point to a failing artifact and explain what it proves, they are asking the model to guess.

### Slide 25 — MCP as a Live Context Bridge

Suggested slide body:

- repo context is not enough
- external systems often hold the contract
- MCP can expose live tools and prompts
- connect only the sources that change the next decision

Suggested speaker notes:

This slide is where Day 1 concepts become operational. MCP is not a novelty item. It is a structured bridge to systems the repo does not fully represent.

## Demo Script

### Demo 1 — From Suspicion to Explore Findings

Scenario:

The pricing logic appears wrong, but a teammate says it may have changed intentionally.

Steps:

1. Show the current behavior in the file.
2. Run `git log -- <file>` and inspect the most recent relevant commits.
3. Use `git blame <file>` on the suspicious line.
4. Open one historical diff and summarize what changed.
5. Pull a linked issue or PR and identify the stated motivation.
6. Write three columns live:
   - confirmed evidence
   - likely intent
   - unresolved question
7. End with a recommendation:
   - preserve
   - revise
   - revert

Key teaching line:

`If you cannot explain why the code is like this, you have not earned the right to change it yet.`

### Demo 2 — Evidence Bundle Upgrade

Start with:

`The last fix still fails.`

Upgrade it live to:

- failing test name and output
- exact CLI command
- one log line or contract note
- one short sentence: expected versus observed
- one revised instruction constrained to the affected behavior

## Worked Artifact Example

Use this in class as a sample Explore findings excerpt:

```md
## Confirmed Evidence

- Commit `abc123` introduced the current pricing branch.
- The PR discussion states the branch was added to preserve legacy enterprise pricing.
- `git blame` shows the fallback logic has not changed since that PR.

## Likely Intent

The behavior was added to prevent discount logic from altering enterprise contracts.

## Unresolved Question

Does the current ticket apply to enterprise pricing, or only to self-serve pricing?

## Recommendation

Do not revise the fallback branch until the ticket scope is clarified.
```

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
- a Request Changes using multiple dynamic sources
- a revised instruction that is narrower and more actionable than the original

## Required Supporting Files

- [executive-summary.md](executive-summary.md)
- [../docs/LIVE-TRAINING-AGENDA.md](../docs/LIVE-TRAINING-AGENDA.md)
- [../labs/03-commit-archaeology-find-the-why-before-the-what/LAB.md](../labs/03-commit-archaeology-find-the-why-before-the-what/LAB.md)
- [../labs/03-commit-archaeology-find-the-why-before-the-what/investigation-memo-template.md](../labs/03-commit-archaeology-find-the-why-before-the-what/investigation-memo-template.md)
- [../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/LAB.md](../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/LAB.md)
- [../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/feedback-bundle-example.md](../labs/04-give-claude-eyes-and-ears-connecting-dynamic-data-sources/feedback-bundle-example.md)
