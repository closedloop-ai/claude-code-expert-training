---
description: Multi-agent code review with adversarial verification and enforced identity-security test depth
argument-hint: [optional path or diff scope]
---

# Multi-agent code review

Review the change under review with concurrent agents. Default scope is the working-tree diff;
honor any path or scope passed in `$ARGUMENTS`. Ground every claim in the real files — read them,
and run the project's tests/typecheck when a claim depends on behavior.

## 1. Fan out
Spawn one reviewer per lens, in parallel:

- **correctness** — logic errors, broken invariants, and edge cases introduced by the change.
- **security** — vulnerabilities the change introduces or leaves open (injection, leakage, unsafe defaults).
- **identity-security** — for any change touching authentication, sessions, tokens, credentials, or
  access control, hunt for **missing or weak tests** across these threat classes. Treat each as a
  coverage checklist and report any class the tests do not pin down:
  - **Token replay / reuse** — an old, rotated, revoked, or expired token must stop validating *and*
    must not be usable to mint a new session.
  - **Cross-session / cross-user isolation** — operating on one principal's token (rotate, revoke,
    logout) must not affect any other session or user; assert a second independent session survives.
  - **Session fixation** — the token must change across a privilege transition (login, rotation,
    re-auth); a pre-auth token must not carry into an authenticated session.
  - **Authorization boundaries** — a token for principal A must not grant access or actions as B;
    no privilege escalation through rotation or reuse.
  - **Expiry / lifetime** — idle and absolute expiry are enforced where claimed.
  - **Malformed / forged input** — unknown, empty, null, or tampered tokens are rejected, not silently accepted.
  - **Leakage** — tokens/secrets are not exposed in error messages, logs, or thrown errors.
- **scope** — blast radius, public-contract changes, and accuracy of any docs/claims the change adds
  (e.g. a plan or handoff doc must match what was actually run).
- **regression** — whether the change breaks existing behavior, tests, or runnable entry points.
- **tests** — are added tests correct, meaningful, and non-tautological; do they actually fail
  against the un-fixed code and pass against the fix.

## 2. Collect
Merge and dedupe raw findings by normalized (file + title); union the lenses that raised each.

## 3. Verify (adversarial)
For each surviving finding, spawn a skeptic that tries hard to **refute** it against the real code.
Default to `refuted = true` for findings that are hypothetical, already handled, tautological, or
out of the change's scope.

**Identity-security exception:** when the change touches auth/identity, do **not** refute a missing
identity-security test as "gold-plating," "speculative," or "out of scope." Absent coverage of a real
threat class from the checklist above is a keepable finding — the correct outcome is to demand the
test, not to dismiss it. Refute such a finding only if the threat class is genuinely inapplicable to
the code (state why) or a test already covers it (cite it).

## 4. Keep
Keep only findings the skeptic could not refute.

## 5. Report
Severity-ranked, each with its surviving evidence. For every kept identity-security gap, propose the
concrete test to add (name + the invariant it asserts) so the gap is actionable, not just noted.
