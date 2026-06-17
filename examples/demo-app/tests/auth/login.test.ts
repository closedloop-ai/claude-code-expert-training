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
});
