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

  // Regression test for the course bug: after rotation the OLD refresh token
  // must no longer validate. This currently FAILS — SessionStore.rotate leaves
  // the previous token in the store. Making it pass by invalidating the old
  // token in rotate() is the exercise that threads Modules 2-5.
  it("invalidates the old refresh token after rotation", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    store.rotate(first.refreshToken);

    expect(store.validate(first.refreshToken)).toBe(false);
  });

  it("rejects an attempt to rotate an already-rotated token", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    store.rotate(first.refreshToken);

    // The old token must not be reusable to mint another session.
    expect(() => store.rotate(first.refreshToken)).toThrow(/invalid refresh token/);
  });

  it("invalidates every prior token across repeated rotations", () => {
    const store = new SessionStore();
    const first = store.issue("alice");
    const second = store.rotate(first.refreshToken);
    const third = store.rotate(second.refreshToken);

    expect(store.validate(first.refreshToken)).toBe(false);
    expect(store.validate(second.refreshToken)).toBe(false);
    expect(store.validate(third.refreshToken)).toBe(true);
  });
});
