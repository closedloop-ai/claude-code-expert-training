# Lab 05 — Review, Test, & Verify

## Objective

Review the generated change adversarially, test it, and produce evidence that it is ready for handoff.

## Materials

- `examples/demo-app/src/order_totals.py`
- `examples/demo-app/tests/test_order_totals.py`
- [solution_order_totals.py](solution_order_totals.py)

## Steps

1. Implement Phase 1 only.
2. Inspect the diff for scope drift.
3. Run adversarial code review.
4. Add meaningful tests.
5. Run `python -m pytest`.
6. Fix failures without guessing.
7. Create PR handoff notes.

## Suggested Verification Commands

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

## Review Questions

Use these questions during the diff review:

- Did the change follow the execution brief?
- Did it touch files outside the approved work package?
- What assumptions are still untested?
- What would a skeptical reviewer flag?
- Is there a simpler implementation that preserves behavior?

## Deliverables

- working code branch or patch
- review findings
- verification evidence
- PR handoff
- reusable verification gate candidate

## Reused Later

The review findings, verification evidence, and PR handoff become required workflow phases and output artifacts in Lab 06.

## Reference Solution

[solution_order_totals.py](solution_order_totals.py) provides one possible end-state for the demo change. Use it for comparison after review and testing, not as a starting point.

## Pass Criteria

This lab passes when:

- the diff has been reviewed against the plan
- verification commands were actually run
- the evidence is recorded clearly enough for a reviewer to evaluate
- the PR handoff explains risks, follow-ups, and what was verified
