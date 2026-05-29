# Claude Code Expert Training

A customer-facing, hands-on training repo for becoming effective with Claude Code in the way strong delivery teams actually use it: from environment setup and repo warm-up to planning, implementation, review, verification, workflow integration, and operating improvement.

This curriculum is now organized in an numbered lab sequence so participants can move through the material in order and instructors can insert stop-gaps or shorten sections without losing the narrative.

## Curriculum arc

1. **Lab 00: Setup and Onboarding**  
   Install the toolchain, configure terminal and IDE ergonomics, learn the repo, run the warm-up commands, and establish baseline operating rules.
2. **Lab 01: Claude Code Primitives**  
   Learn when to use a prompt, tool, skill, custom agent, subagent, hook, MCP server, or workflow.
3. **Lab 02: Planning and Execution Briefs**  
   Turn a work item into an implementation plan with context maps, assumptions, open questions, and bounded work packages.
4. **Lab 03: Git History and Issue Investigation**  
   Use Git history, blame, commit archaeology, and GitHub issues/PRs to recover intent before editing code.
5. **Lab 04: Giving Claude Better Feedback Tools**  
   Improve outcomes by supplying screenshots, failing tests, simulator output, CLI traces, and targeted observations instead of vague corrections.
6. **Lab 05: Review, Testing, and Verification**  
   Implement in phases, review diffs adversarially, add tests, and produce PR-ready evidence.
7. **Lab 06: Claude in Existing Workflows**  
   Fit Claude Code into terminal-first, IDE-first, `tmux`, and SSH-driven workflows instead of inventing a parallel process.
8. **Lab 07: Operating at Expert Speed**  
   Convert wins into reusable prompts, permissions policies, hooks, skills, and operating checklists.

## Repo layout

```text
.
├── docs/                 # Syllabus, workflow guidance, transcript alignment docs
├── examples/demo-app/    # Small app used for demos, review, and verification labs
├── labs/                 # Numbered, sequential labs
├── resources/            # Video links and supporting references
├── scripts/              # Utility scripts for demos and repo warm-up
├── slides/               # Lightweight markdown slide outlines
└── templates/            # Reusable prompts, plans, agents, skills, and gates
```

## Start Here

1. Read [docs/SYLLABUS.md](docs/SYLLABUS.md).
2. Complete [labs/00-setup-onboarding/LAB.md](labs/00-setup-onboarding/LAB.md).
3. Run the demo-app warm-up:

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

4. Use the crosswalk docs while teaching or self-studying:
   - [docs/TRANSCRIPT-CHEAT-SHEET.md](docs/TRANSCRIPT-CHEAT-SHEET.md)
   - [docs/TRANSCRIPT-ALIGNMENT-APPENDIX.md](docs/TRANSCRIPT-ALIGNMENT-APPENDIX.md)
   - [docs/TOOL-PERMISSIONS-EXAMPLES.md](docs/TOOL-PERMISSIONS-EXAMPLES.md)
   - [docs/WORKFLOW-INTEGRATION.md](docs/WORKFLOW-INTEGRATION.md)

## What This Training Optimizes For

Claude Code expertise is not just prompting. It is knowing:

- how to set up the environment so the tool is fast and safe to use
- how to investigate a codebase before editing it
- how to choose the right primitive for the work
- how to give the model concrete feedback artifacts
- how to keep verification tight
- how to integrate the tool into the workflow you already use
- how to turn repeated work into reusable systems

Speed comes from choosing the right primitive, breaking work down, feeding the model better evidence, verifying results, and turning repeated wins into reusable flows.
