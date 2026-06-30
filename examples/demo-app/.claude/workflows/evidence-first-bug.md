# Workflow Name: Evidence-first bug fix

Trigger:
A ib bug report has enough detail to reproduce or investigate.

Artifacts:
1. Explore findings
2. Externally research best practices with @marketing-research-analyst
2. Compact Implementation Plan after review by @security-reviewer
3. Implementation diff 
4. Review and summarize any failing tests

Roles:
- Explorer subagent: identify relevant files, history, and evidence sources
- Planner: compress evidence into Implementation Plan
- Implementer: make bounded code changes from the brief
- Reviewer: compare diff against brief and produce findings
- GDPR privacy expert: review and ensure GDPR is compliant for this solution

Gates:
- Do not implement until facts, assumptions, and open questions are separated.
- Do not review until acceptance criteria are explicit.
- Do not hand off until verification evidence and residual risk are written.

Stop condition:
The change is PR-ready or blocked by a named open question.
