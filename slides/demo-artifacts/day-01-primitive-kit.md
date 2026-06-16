# Day 1 Demo Artifact

## Primitive Kit

### Scenario

A team repeatedly receives small engineering tickets with vague requirements and wants to improve intake, planning, and review quality. Instead of reaching for one big agent, they **craft a small kit of primitives** and learn how those primitives **stitch together** into a workflow.

## Crafted primitives

Each primitive is written down with an explicit spec: what it does, which mode and model it runs in, what it consumes, what it produces, and when it stops. A new teammate should be able to pick any one of these up without guessing.

| Primitive | What it does | Mode | Output artifact |
| --- | --- | --- | --- |
| intake prompt | inspect a file and explain current behavior | interactive | current behavior summary |
| test tool call | run tests and show failure output | interactive | failing test evidence |
| `/intake-ticket` command | turn a raw ticket into a standard intake summary | interactive | ticket intake summary |
| `ticket-to-brief` skill | turn vague tickets into structured plans | goal mode | Implementation Plan |
| history-investigator subagent | recover Git and PR intent in isolated context | interactive | Explore findings |
| plan-prosecutor agent | red-team the implementation plan | debate mode | plan findings |
| `review-workflow-pack` plugin | distribute the reusable command + subagent + MCP setup to the team | headless (print mode) install, interactive use | shared team bundle |

## Stitching primitives into a workflow

Crafted primitives are only useful when they connect. For one ticket, the kit runs as a sequence:

1. `/intake-ticket` command -> ticket intake summary
2. history-investigator subagent -> Explore findings (why the code is shaped this way)
3. `ticket-to-brief` skill -> Implementation Plan
4. implementation -> bounded change made from the brief
5. plan-prosecutor agent -> review findings against the brief

That sequence is the workflow. It raises the question Module 2 answers: once you can stitch primitives together, **how do you tell the workflow what to accomplish?**

## Model selection for the job

Model routing means choosing a model by the demands of the job, not by habit.

| Job | Model choice | Why |
| --- | --- | --- |
| ambiguous implementation planning | strongest reasoning model available | quality of judgment matters more than speed |
| repeated test summarization | faster lower-cost model if approved | bounded, easy to verify |
| deep code review with mixed evidence | Claude default | tool use plus reasoning quality matter |
| batch issue classification | approved non-Anthropic model if cheaper and good enough | cost and throughput may dominate |

## Plugin Evaluation Snapshot

### Candidate

`review-workflow-pack`

### Contains

- one PR review command
- one diff-prosecutor subagent
- one GitHub MCP setup
- one post-review hook

### Evaluation

| Question | Answer |
| --- | --- |
| Does this solve a real repeated problem? | yes, the team runs the same review pattern weekly |
| Is plugin the right level? | yes, because multiple reuse units travel together |
| What should still stay local? | one experimental review command not yet stabilized |
| What is the main risk? | over-approving tool access through the MCP setup |

## Teaching Use

Use this file to:

- craft each primitive live with the room, giving every one an explicit spec
- compare command versus skill versus plugin decisions
- show how the crafted primitives stitch into one workflow
- discuss interactive versus headless (print mode, `claude -p`) operation
- discuss when Claude should remain the default versus when another approved model may be acceptable
