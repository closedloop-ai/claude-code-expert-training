import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { SessionStore, type SecurityEvent } from "../../src/auth/session-store";

describe("refresh token rotation", () => {
  it("issues a new refresh token on rotation", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    const rotated = store.rotate(first.refreshToken);

    expect(rotated.refreshToken).not.toBe(first.refreshToken);
    expect(store.validate(rotated.refreshToken)).toBe(true);
  });

  it("rejects an unknown refresh token", () => {
    const store = new SessionStore();
    expect(() => store.rotate("not-a-real-token")).toThrow(/invalid refresh token/);
  });

  it("invalidates the old refresh token after rotation", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    store.rotate(first.refreshToken);

    expect(store.validate(first.refreshToken)).toBe(false);
  });

  it("detects reuse of a rotated token and revokes the whole family", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    const second = store.rotate(first.refreshToken);

    // Replaying the consumed token is reuse, not a generic invalid token.
    expect(() => store.rotate(first.refreshToken)).toThrow(/reuse detected/);

    // The current (descendant) token is revoked too — the family is burned.
    expect(store.validate(second.refreshToken)).toBe(false);
    expect(() => store.rotate(second.refreshToken)).toThrow(/reuse detected/);
  });

  it("emits an audit event on reuse detection", () => {
    const onSecurityEvent = vi.fn<(e: SecurityEvent) => void>();
    const store = new SessionStore(onSecurityEvent);
    const first = store.issue("alice");
    store.rotate(first.refreshToken);

    expect(() => store.rotate(first.refreshToken)).toThrow(/reuse detected/);
    expect(onSecurityEvent).toHaveBeenCalledTimes(1);
    expect(onSecurityEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "refresh_token_reuse_detected",
        userId: "alice",
        familyId: expect.any(String),
        at: expect.any(Number),
      }),
    );
  });

  it("still identifies the user on a repeated replay after the family is burned", () => {
    const onSecurityEvent = vi.fn<(e: SecurityEvent) => void>();
    const store = new SessionStore(onSecurityEvent);
    const first = store.issue("alice");
    store.rotate(first.refreshToken);

    // First replay burns the family; second replay must still audit with the
    // correct userId (not an empty string) so the operator knows who to alert.
    expect(() => store.rotate(first.refreshToken)).toThrow(/reuse detected/);
    expect(() => store.rotate(first.refreshToken)).toThrow(/reuse detected/);

    expect(onSecurityEvent).toHaveBeenCalledTimes(2);
    for (const call of onSecurityEvent.mock.calls) {
      expect(call[0]).toMatchObject({ type: "refresh_token_reuse_detected", userId: "alice" });
    }
  });

  it("still rejects an entirely unknown token as a generic invalid token", () => {
    const store = new SessionStore();
    expect(() => store.rotate("not-a-real-token")).toThrow(/invalid refresh token/);
  });
});

describe("refresh token expiration", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("validates before the deadline and stops validating after it elapses", () => {
    const store = new SessionStore();
    const session = store.issue("alice", Date.now() + 1000);

    expect(store.validate(session.refreshToken)).toBe(true);

    vi.advanceTimersByTime(1001);
    expect(store.validate(session.refreshToken)).toBe(false);
  });

  it("rejects rotation of an expired token as a distinct 'expired' error", () => {
    const store = new SessionStore();
    const session = store.issue("alice", Date.now() + 1000);

    vi.advanceTimersByTime(1001);
    expect(() => store.rotate(session.refreshToken)).toThrow(/expired/);
  });

  it("carries the expiry deadline forward across rotation", () => {
    const store = new SessionStore();
    const first = store.issue("alice", Date.now() + 1000);
    const second = store.rotate(first.refreshToken);

    // The rotated token inherits the family's original deadline — rotating does
    // not extend the window.
    expect(second.expiresAt).toBe(first.expiresAt);

    vi.advanceTimersByTime(1001);
    expect(store.validate(second.refreshToken)).toBe(false);
    expect(() => store.rotate(second.refreshToken)).toThrow(/expired/);
  });

  it("never expires a token issued without a deadline", () => {
    const store = new SessionStore();
    const session = store.issue("alice");

    vi.advanceTimersByTime(1_000_000_000);
    expect(store.validate(session.refreshToken)).toBe(true);
  });
});
