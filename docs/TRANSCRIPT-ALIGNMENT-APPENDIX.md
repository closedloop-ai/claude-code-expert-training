# Transcript Alignment Appendix

This appendix explains how the curriculum aligns to the underlying transcript recommendations that informed the training design.

## Alignment Goals

The transcript emphasized six recurring themes:

1. expert use starts with environment and operating habits, not just prompting
2. investigation before editing reduces rework
3. better feedback artifacts produce better model behavior
4. verification discipline matters more than clever prompts
5. Claude should connect to live context and fit existing workflows
6. teams need reusable orchestration, policies, permissions, and operating conventions

## Curriculum Mapping

### Theme 1: Environment and Operating Habits

Mapped to:
- Lab 00 No Speed Limits Setup & Local Stack Bootstrap
- workflow integration guidance
- permissions examples

Why:
- learners need an explicit setup lab so they do not lose time on install, shell usage, repo orientation, or verification basics

### Theme 2: Investigation Before Editing

Mapped to:
- Lab 02 From Mess to Mission
- Lab 03 Commit Archaeology

Why:
- the curriculum now inserts a stop-gap between planning and coding so learners practice recovering intent before making changes

### Theme 3: Better Feedback Artifacts

Mapped to:
- Lab 04 Give Claude Eyes & Ears

Why:
- this creates a dedicated exercise around screenshots, tests, app simulators, CLI output, MCP context, APIs, and issue systems instead of treating them as incidental techniques

### Theme 4: Verification Discipline

Mapped to:
- Lab 05 Diff Court
- verification gate template

Why:
- the transcript repeatedly favored evidence-driven iteration over “one-shot” prompting

### Theme 5: Multi-Agent Workflow Design

Mapped to:
- Lab 06 Agent Orchestra
- workflow integration guide

Why:
- the curriculum now culminates in an explicit multi-agent orchestration lab that reuses setup, planning, investigation, dynamic context, review, and verification artifacts from the earlier labs

### Theme 6: Observability and Continuous Improvement

Mapped to:
- Lab 07 Build Your Agentic Operating System
- permissions examples
- templates directory

Why:
- the training should end by making the workflow observable, measurable, and improvable over repeated runs

## Instructor Notes

- If time is short, keep Labs 00, 02, 04, and 05 intact. Those carry the highest transcript-alignment value.
- If the audience is advanced, compress Lab 01 and spend more time in Labs 03 and 06.
- If the audience is enterprise or security-heavy, expand the permissions examples and SSH workflow section.
