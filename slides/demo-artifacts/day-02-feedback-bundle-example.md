# Day 2 Demo Artifact

## Feedback Bundle

### Problem

The prior change was intended to reject unknown discount codes, but the implementation still accepts them silently.

## Evidence

### Failing Test

`test_discount_unknown_code`

Observed result:

`ValueError` was not raised.

### CLI Trace

```bash
cd examples/demo-app
python -m pytest tests/test_order_totals.py -k unknown_code
```

### Contract Note

Unknown discount codes must fail closed and return a clear error.

### Expected vs Observed

Expected:

unknown codes stop processing with a clear error

Observed:

unknown codes continue through the pricing path without an exception

## Revised Instruction

```text
The previous change still fails for unknown discount codes.

Use this evidence:
- failing test: test_discount_unknown_code
- observed result: ValueError was not raised
- contract note: unknown discount codes must fail closed

Revise only the discount-code handling path so unknown codes raise a clear error.
Do not change tax behavior or enterprise fallback behavior.
Explain which file changed and why.
```

## Why This Is Better Than “Fix This”

- it identifies the failing behavior precisely
- it names the test and expected error path
- it constrains the next change to one behavior
- it protects unrelated logic from unnecessary edits
