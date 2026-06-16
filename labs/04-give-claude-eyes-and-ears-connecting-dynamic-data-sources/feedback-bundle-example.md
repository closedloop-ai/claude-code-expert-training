# Example Request Changes

## Failure

`test_discount_unknown_code` fails because the current implementation silently ignores unknown discount codes.

## Evidence

- failing test output showing expected `ValueError` was not raised
- CLI trace showing the exact command used to reproduce the failure
- policy note from the requirements stating that unknown codes must fail closed

## Observation

The implementation currently treats missing and unknown discount codes as the same case, which collapses a required error path.

## Revised Instruction to Claude

Revise the pricing logic so unknown discount codes raise a clear `ValueError` while `None` still preserves the current no-discount behavior. Do not change tax semantics or item subtotal calculation.

## Why This Bundle Is Better

It provides an exact failing case, a policy constraint, and a bounded correction target instead of a generic “this is broken” response.
