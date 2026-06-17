import { describe, it, expect } from "vitest";
import { SessionStore } from "../../src/auth/session-store";

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

  // NOTE: there is deliberately no test here for reuse of the OLD refresh
  // token after rotation. The store currently still accepts it. Writing that
  // regression test — and making it pass by invalidating the old token in
  // SessionStore.rotate — is the exercise that threads Modules 2-5.
});
