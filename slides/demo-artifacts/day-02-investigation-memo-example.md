# Day 2 Demo Artifact

## Explore Findings

### Work Item

“The pricing fallback looks wrong. Can we simplify it?”

### File Investigated

`examples/demo-app/src/order_totals.py`

## Confirmed Evidence

- Commit `abc1234` introduced the current fallback branch.
- The historical diff added the branch at the same time as enterprise pricing support.
- The linked PR discussion states the fallback exists to prevent promotional discount logic from changing enterprise contract pricing.
- `git blame` shows the fallback branch has not been meaningfully revised since the original PR.

## Likely Intent

The fallback behavior exists to preserve contract pricing for enterprise customers even when the rest of the pricing logic evolves for self-serve flows.

## Risks of Changing It

- a “cleanup” could silently alter enterprise invoices
- current tests may only cover self-serve paths
- the ticket request may be about readability, not business behavior

## Unresolved Question

Does the current request apply to all pricing flows, or only to self-serve pricing?

## Recommendation

Do not simplify the fallback branch until ticket scope is clarified and enterprise-specific verification exists.

## Why This Is A Good Artifact

- it separates confirmed evidence from inference
- it identifies a concrete business risk
- it ends with a recommendation and an unresolved question
- it gives a future implementer enough context without replaying the full history search
