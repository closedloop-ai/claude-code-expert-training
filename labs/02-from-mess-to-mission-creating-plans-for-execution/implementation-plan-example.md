# Implementation Plan

## Goal

Add optional percentage discount-code support to order totals.

## Non-goals

- No persistence.
- No external coupon service.
- No stacking discounts.

## Proposed behavior

When no discount code is provided, totals behave exactly as before. When a known discount code is provided, the subtotal is reduced before tax. Unknown codes raise `ValueError`.

## Work packages

1. Add discount calculation helper.
2. Extend `total_cents` with optional `discount_code` and `discounts` parameters.
3. Add tests for no discount, valid discount, unknown code, and discount floor.

## Verification

Run `python -m pytest` from `examples/demo-app`.
