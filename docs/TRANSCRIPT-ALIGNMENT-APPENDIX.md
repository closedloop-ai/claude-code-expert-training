# Transcript Alignment Appendix

This appendix explains how the curriculum aligns to the underlying transcript recommendations that informed the training design.

## Alignment Goals

The transcript emphasized six recurring themes:

1. expert use starts with environment and operating habits, not just prompting
2. investigation before editing reduces rework
3. better feedback artifacts produce better model behavior
4. verification discipline matters more than clever prompts
5. Claude should fit existing workflows
6. teams need reusable policies, permissions, and operating conventions

## Curriculum Mapping

### Theme 1: Environment and Operating Habits

Mapped to:
- Lab 00 setup and onboarding
- workflow integration guidance
- permissions examples

Why:
- learners need an explicit setup lab so they do not lose time on install, shell usage, repo orientation, or verification basics

### Theme 2: Investigation Before Editing

Mapped to:
- Lab 02 planning
- Lab 03 Git history and issue investigation

Why:
- the curriculum now inserts a stop-gap between planning and coding so learners practice recovering intent before making changes

### Theme 3: Better Feedback Artifacts

Mapped to:
- Lab 04 feedback tools

Why:
- this creates a dedicated exercise around screenshots, tests, app simulators, and CLI output instead of treating them as incidental techniques

### Theme 4: Verification Discipline

Mapped to:
- Lab 05 review, testing, and verification
- verification gate template

Why:
- the transcript repeatedly favored evidence-driven iteration over “one-shot” prompting

### Theme 5: Fit Claude Into Existing Workflows

Mapped to:
- Lab 06 workflow integration
- workflow integration guide

Why:
- many teams already operate through terminal, IDE, `tmux`, and SSH workflows; the training now treats those as first-class, not optional

### Theme 6: Reusable Team Conventions

Mapped to:
- Lab 07 operating at expert speed
- permissions examples
- templates directory

Why:
- the training should end by turning individual lessons into durable team practices

## Instructor Notes

- If time is short, keep Labs 00, 02, 04, and 05 intact. Those carry the highest transcript-alignment value.
- If the audience is advanced, compress Lab 01 and spend more time in Labs 03 and 06.
- If the audience is enterprise or security-heavy, expand the permissions examples and SSH workflow section.
