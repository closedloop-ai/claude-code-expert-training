# ClosedLoop.AI Claude Code Expert Training

Course materials for ClosedLoop.AI's Claude Code Expert Training.

This repository is designed for instructor-led delivery, guided self-study, and internal enablement. The material covers setup, investigation, planning, implementation, review, verification, workflow integration, and operating practices for Claude Code in software teams.

## Learn More

For course planning and internal delivery, begin with the formal syllabus and lab sequence.

- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [labs/README.md](labs/README.md)

## Index

- Course Scope
- Course Outcomes
- Course Components
- Minimal Qualified Student
- Important Reading
- Before You Attend
- Installing the Course Material

## Course Scope

The course is organized as a sequence of numbered labs.

1. **Lab 00: No Speed Limits Setup & Local Stack Bootstrap**  
   Install, configure, warm up the repository, and establish baseline operating rules.
2. **Lab 01: Know the Machine: Claude Code Primitives**  
   Understand prompts, tools, skills, agents, subagents, hooks, MCP, workflows, and when to use each.
3. **Lab 02: From Mess to Mission: Creating Plans for Execution.**  
   Turn ambiguous work into plans, context maps, open-question registers, and bounded work packages.
4. **Lab 03: Commit Archaeology: Find the Why Before the What**  
   Use Git history, blame, commits, issues, and PRs to recover intent before editing.
5. **Lab 04: Give Claude Eyes & Ears: Connecting Dynamic Data Sources**  
   Connect Claude to live context: logs, tests, screenshots, CLI traces, simulators, MCP, APIs, docs, and issue systems.
6. **Lab 05: Diff Court: Review, Test, Prove**  
   Review generated diffs adversarially, add tests, run checks, and produce PR-ready evidence.
7. **Lab 06: Agent Orchestra: Design a Multi-Agent Delivery Workflow**  
   Capstone workflow design using custom agents, skills, MCP data, tools, planning, review, testing, and verification.
8. **Lab 07: Build Your Agentic Operating System**  
   Add observability, feedback loops, usage review, metrics, and continuous improvement so the workflow improves over time.

## Course Outcomes

By the end of the course, participants should be able to:

- establish a reliable local Claude Code environment and repo warm-up routine
- select the correct primitive or abstraction for a given task
- convert ambiguous work into an execution brief with explicit assumptions and boundaries
- recover implementation intent from Git and GitHub artifacts before making changes
- connect Claude to useful dynamic data sources instead of relying on static prompts alone
- evaluate diffs, tests, and verification output with adversarial rigor
- design a named multi-agent workflow that can run the same class of work repeatedly
- observe, review, and improve that workflow over time with metrics and feedback loops

## Course Components

```text
.
├── docs/                 # Syllabus, workflow guidance, transcript alignment material
├── examples/demo-app/    # Demonstration and lab application
├── labs/                 # Numbered course labs
├── resources/            # Supporting references and videos
├── scripts/              # Utility scripts for warm-up and demos
├── slides/               # Presentation outlines
└── templates/            # Reusable prompts, plans, skills, and verification gates
```

Primary course entry points:

- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [labs/README.md](labs/README.md)
- [docs/TOOL-PERMISSIONS-EXAMPLES.md](docs/TOOL-PERMISSIONS-EXAMPLES.md)
- [docs/WORKFLOW-INTEGRATION.md](docs/WORKFLOW-INTEGRATION.md)
- [docs/TRANSCRIPT-CHEAT-SHEET.md](docs/TRANSCRIPT-CHEAT-SHEET.md)
- [docs/TRANSCRIPT-ALIGNMENT-APPENDIX.md](docs/TRANSCRIPT-ALIGNMENT-APPENDIX.md)

## Minimal Qualified Student

The material is intended for software engineers who already work in a professional development environment and want a more rigorous operating model for Claude Code.

Students will get the most from the course if they:

- have at least one to two years of professional programming experience
- are comfortable using a command shell
- can navigate a repository and run tests locally
- understand pull requests, code review, and issue tracking
- have used an IDE or terminal-based editor in day-to-day work
- are prepared to reason about verification, not just prompt wording

## Important Reading

Participants should review the following before or during the course:

- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [docs/WORKFLOW-INTEGRATION.md](docs/WORKFLOW-INTEGRATION.md)
- [docs/TOOL-PERMISSIONS-EXAMPLES.md](docs/TOOL-PERMISSIONS-EXAMPLES.md)
- [docs/TRANSCRIPT-CHEAT-SHEET.md](docs/TRANSCRIPT-CHEAT-SHEET.md)

## Before You Attend

The following preparation is recommended before the first live session or before beginning self-study.

### Preparation

- read the syllabus
- review the lab sequence
- confirm Python and Git are installed
- open the repository in both terminal and IDE

### Local Environment

The course assumes a local shell environment that can:

- run `python -m pytest`
- execute standard Git inspection commands
- edit markdown and source files

### Editors and Terminal

Participants may use any editor or IDE. The course includes guidance for terminal-first, IDE-first, `tmux`, and SSH-based workflows, but those workflows are deliberately incorporated into the larger orchestration sequence rather than taught as an isolated side topic.

## Installing the Course Material

Clone the repository locally and run the demo application warm-up:

```bash
git clone https://github.com/closedloop-ai/claude-code-expert-training.git
cd claude-code-expert-training/examples/demo-app
python -m pytest
python src/order_totals.py
```

The initial lab is [labs/00-setup-onboarding/LAB.md](labs/00-setup-onboarding/LAB.md).
