import { describe, it, expect } from "vitest";
import { SessionStore } from "../../src/auth/session-store";
import { login } from "../../src/auth/login";

describe("login", () => {
  it("issues a valid refresh token for valid credentials", () => {
    const store = new SessionStore();
    const result = login(store, "alice", "correct-horse-battery-staple");
    expect(result.refreshToken).toBeTruthy();
    expect(store.validate(result.refreshToken)).toBe(true);
  });

  it("rejects missing credentials", () => {
    const store = new SessionStore();
    expect(() => login(store, "alice", "")).toThrow();
  });

  it("returns exactly the login response contract (no extra fields leaked)", () => {
    const store = new SessionStore();
    const result = login(store, "alice", "correct-horse-battery-staple");

    // Goal: rotation work must not change the login response shape. Internal
    // fields like familyId/issuedAt must never surface in the login result.
    expect(Object.keys(result).sort()).toEqual(["refreshToken", "userId"]);
    expect(result.userId).toBe("alice");
  });
});
