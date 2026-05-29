# ClosedLoop.AI Claude Code Expert Training

Course materials for ClosedLoop.AI's Claude Code Expert Training.

This repository is designed for instructor-led delivery, guided self-study, and internal enablement. The material covers setup, investigation, planning, implementation, review, verification, workflow integration, and operating practices for Claude Code in software teams.

## Learn More

For course planning and internal delivery, begin with the formal syllabus and lab sequence.

- [docs/SYLLABUS.md](docs/SYLLABUS.md)
- [labs/README.md](labs/README.md)

## Index

- Course Scope
- Course Components
- Minimal Qualified Student
- Important Reading
- Before You Attend
- Installing the Course Material

## Course Scope

The course is organized as a sequence of numbered labs.

1. **Lab 00: Setup and Onboarding**  
   Local setup, terminal and IDE use, permissions posture, and repository warm-up.
2. **Lab 01: Claude Code Primitives**  
   Selecting the correct primitive for the work.
3. **Lab 02: Planning and Execution Briefs**  
   Turning a request into a bounded, reviewable plan.
4. **Lab 03: Git History and Issue Investigation**  
   Recovering technical and product intent before editing code.
5. **Lab 04: Giving Claude Better Feedback Tools**  
   Using tests, screenshots, simulator traces, and CLI output as feedback artifacts.
6. **Lab 05: Review, Testing, and Verification**  
   Implementation, adversarial review, testing, and evidence collection.
7. **Lab 06: Claude in Existing Workflows**  
   Using Claude in terminal, IDE, `tmux`, and SSH-based workflows.
8. **Lab 07: Operating at Expert Speed**  
   Standardizing reusable prompts, workflows, permissions, and review habits.

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

Participants may use any editor or IDE. The course includes guidance for terminal-first, IDE-first, `tmux`, and SSH-based workflows.

## Installing the Course Material

Clone the repository locally and run the demo application warm-up:

```bash
git clone https://github.com/closedloop-ai/claude-code-expert-training.git
cd claude-code-expert-training/examples/demo-app
python -m pytest
python src/order_totals.py
```

The initial lab is [labs/00-setup-onboarding/LAB.md](labs/00-setup-onboarding/LAB.md).
