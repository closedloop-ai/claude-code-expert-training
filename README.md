# Claude Code Expert Training

A customer-facing, hands-on training repo for becoming effective with Claude Code: understanding the primitives, planning work, generating/reviewing code, testing/verification, and continuous improvement.

## Course structure

- **Day 1: The DNA of Claude Code** — context, tools, skills, plugins, agents, subagents, hooks, MCP, workflows, goals, debate, orchestration.
- **Day 2: From Work to Implementation Plan** — bounded discovery, context maps, open questions, implementation plans, work disaggregation, peer plan review.
- **Day 3: Code Review, Testing, and Verification** — controlled implementation, diff review, adversarial review, test strategy, verification gates, PR-ready evidence.
- **Day 4: Operating at Expert Speed** — background agents, workflows, routing, usage review, continuous improvement, reusable skills/commands/gates.

## Repo layout

```text
.
├── docs/                 # Detailed syllabus and instructor guides
├── slides/               # Lightweight markdown slide outlines
├── labs/                 # Day-by-day labs and answer keys
├── examples/demo-app/    # Small app used for live demos and labs
├── templates/            # Reusable prompts, plans, agents, skills, gates
├── resources/            # Video links and reading list
└── scripts/              # Utility scripts for demos
```

## Quick start for the demo app

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

The demo app intentionally starts small so participants can plan, modify, review, and test realistic code changes during the labs.

## Training philosophy

Claude Code expertise is not just prompting. It is knowing when to use the right primitive:

- prompt
- slash command
- tool
- skill
- plugin
- hook
- MCP server
- main agent
- subagent
- custom agent
- background agent
- workflow

Speed comes from choosing the right primitive, breaking work down, verifying results, and turning repeated wins into reusable flows.
