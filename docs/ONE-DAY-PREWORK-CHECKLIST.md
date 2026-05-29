# One-Day Pre-Work Checklist

## Purpose

Use this checklist before the one-day intensive to confirm participants are ready for live instruction.

The live session is only five hours. Setup should not consume the teaching blocks.

## Participant Readiness

Each participant should confirm:

- Claude Code is installed and launches successfully
- Git is installed
- Python 3 is installed
- the repository is cloned locally
- the repository opens in both terminal and IDE
- the demo app test command runs successfully
- the demo app script runs successfully
- the participant understands the baseline permissions posture
- the participant completed the Lab 00 setup lab

## Required Commands

Participants should run:

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

## Instructor Go/No-Go Check

Before the session begins, confirm:

- most participants completed the required commands
- participants can access both terminal and editor
- there are no widespread install blockers
- participants know where the slides, labs, and demo artifacts live

## If A Participant Is Not Ready

Do not use the live session to repair individual setup issues unless the problem is cohort-wide.

Instead:

- redirect them to Lab 00
- pair them with a ready participant if needed
- have them observe the first block while resolving setup in parallel

## Minimum Acceptable State

A participant is minimally ready if:

- they can open the repo
- they can run the demo-app tests
- they can run the demo-app script
- they can follow the slide deck and open the demo artifacts

## Related Files

- [ONE-DAY-LIVE-AGENDA.md](ONE-DAY-LIVE-AGENDA.md)
- [../slides/one-day-intensive.md](../slides/one-day-intensive.md)
- [../labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md](../labs/00-no-speed-limits-setup-local-stack-bootstrap/LAB.md)
