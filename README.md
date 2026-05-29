# ClosedLoop.AI Claude Code Expert Training

Course materials for ClosedLoop.AI's Claude Code Expert Training.

This repository is designed for instructor-led delivery, guided self-study, and internal enablement. The material covers setup, investigation, planning, implementation, review, verification, workflow integration, and operating practices for Claude Code in software teams.

## Learn More

For course planning and internal delivery, begin with the live training agenda, formal syllabus, and lab guide.

- [docs/LIVE-TRAINING-AGENDA.md](docs/LIVE-TRAINING-AGENDA.md)
- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [labs/README.md](labs/README.md)

## Index

- Course Format
- Live Training Agenda
- Course Outcomes
- Course Components
- Minimal Qualified Student
- Important Reading
- Before You Attend
- Installing the Course Material

## Course Format

This course is delivered as a four-day live program with five instructional hours per day. Each day combines:

- participant share-and-tell on the next concept
- lecture and lesson framing
- instructor walkthroughs
- hands-on lab work
- group or individual demos of lab results

The labs are a major part of the course, but they are not the entire course structure. The live agenda is organized by instructional day, and the labs are the applied work blocks inside that agenda.

The course design assumes the cohort already has partial distributed knowledge. The instructor should pull that knowledge into the room at the start of each new concept with a simple prompt such as `Has anyone tried this? What is working?`

Lab 00 is the onboarding and environment bootstrap lab. It should be completed before Day 1 or used at the start of the first session if the cohort needs extra setup time.

## Live Training Agenda

The live course uses seven primary labs across four days:

1. **Day 1**
   Labs 01 and 02
2. **Day 2**
   Labs 03 and 04
3. **Day 3**
   Labs 05 and 06
4. **Day 4**
   Lab 07

See [docs/LIVE-TRAINING-AGENDA.md](docs/LIVE-TRAINING-AGENDA.md) for the day-by-day pacing model, teaching blocks, demos, and expected outputs.

## Course Outcomes

By the end of the course, participants should be able to:

- establish a reliable local Claude Code environment and repo warm-up routine
- select the correct primitive or abstraction for a given task
- explain the operating DNA of tools, skills, agents, subagents, hooks, MCP servers, and workflows
- decide when to work interactively, when to run headless, when to use goal mode, and when to use debate mode
- convert ambiguous work into an execution brief with explicit assumptions, context boundaries, and compact handoff artifacts
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

- [docs/LIVE-TRAINING-AGENDA.md](docs/LIVE-TRAINING-AGENDA.md)
- [docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md)
- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [labs/README.md](labs/README.md)
- [slides/README.md](slides/README.md)
- [slides/day-01-foundations-and-work-intake.md](slides/day-01-foundations-and-work-intake.md)
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

- [docs/LIVE-TRAINING-AGENDA.md](docs/LIVE-TRAINING-AGENDA.md)
- [docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md](docs/PLUGINS-SKILLS-COMMANDS-AND-MODELS.md)
- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [docs/WORKFLOW-INTEGRATION.md](docs/WORKFLOW-INTEGRATION.md)
- [docs/TOOL-PERMISSIONS-EXAMPLES.md](docs/TOOL-PERMISSIONS-EXAMPLES.md)
- [docs/TRANSCRIPT-CHEAT-SHEET.md](docs/TRANSCRIPT-CHEAT-SHEET.md)

## Before You Attend

The following preparation is recommended before the first live session or before beginning self-study.

### Preparation

- complete or review Lab 00
- read the live training agenda
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

The initial lab is [labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md](labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md).
