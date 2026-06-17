# Module 3 Anti-Pattern Artifact: Request Changes

## Request Changes (Anti-Pattern)

That didn't work. Old tokens still work. Try again and make it return 401.

## Why this falls short as a handoff

- "that didn't work" omits what was attempted, expected, and observed
- no evidence: no test name, no actual-vs-expected, no trace
- no hypothesis about why it failed
- no constraint for the next attempt (for example, do not change response shape)
- forces another blind round-trip
