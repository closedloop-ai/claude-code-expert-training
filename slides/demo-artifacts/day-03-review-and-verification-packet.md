# Day 3 Demo Artifact

## Review and Review

### Change Summary

Added validation so unknown discount codes now raise a clear error before pricing proceeds.

### Files Touched

- `examples/demo-app/src/order_totals.py`
- `examples/demo-app/tests/test_order_totals.py`

## Review Findings

### Medium

The first draft also refactored tax calculation naming even though the Implementation Plan did not authorize unrelated cleanup. That change should be removed or split into separate work.

### Low

The new test covers the failure path, but a follow-up test should confirm existing behavior is unchanged when no discount code is provided.

## Verification Commands Run

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

## Verification Result

- targeted failure case now passes
- full demo-app test suite passes
- direct script execution still works

## Residual Risk

Enterprise fallback behavior was not modified, but there is still no explicit enterprise-only regression test in the demo suite.

## PR Handoff

### What Changed

Unknown discount codes now fail closed with a clear error.

### Why

The Implementation Plan required invalid codes to stop processing rather than continue silently.

### What Was Verified

- full test suite
- unknown code regression path
- baseline script execution

### Follow-Up

Add an enterprise-path regression test if this demo is expanded further.

## Why This Is A Good Artifact

- findings appear before summary language
- commands run are explicit
- residual risk is documented instead of hidden
- a reviewer can evaluate both correctness and scope control
