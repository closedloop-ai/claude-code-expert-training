# Day 1 Demo Artifact

## Primitive and Routing Board

### Scenario

A team repeatedly receives small engineering tickets with vague requirements and wants to improve intake, planning, and review quality.

## Task Breakdown

| Task | Best primitive | Why | Mode | Output artifact |
| --- | --- | --- | --- | --- |
| inspect a file and explain current behavior | prompt | one-off explanation | interactive | current behavior summary |
| run tests and show failure output | tool | concrete execution is required | interactive | failing test evidence |
| reuse the same intake prompt for many tickets | command | repeatable invocation | interactive | ticket intake summary |
| turn vague tickets into structured plans | skill | repeatable method with stable outputs | goal mode | execution brief |
| recover Git and PR intent | subagent | narrow mission with separate context | interactive | investigation memo |
| red-team the implementation plan | agent | bounded skeptical review role | debate mode | plan findings |
| package command + skill + subagent setup for multiple teammates | plugin | distribution unit | headless install, interactive use | shared team bundle |

## Model Routing Example

| Job | Default route | Why |
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

- classify work live with the room
- compare command versus skill versus plugin decisions
- discuss interactive versus headless operation
- discuss when Claude should remain the default versus when another approved model may be acceptable
