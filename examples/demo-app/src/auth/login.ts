import type { SessionStore } from "./session-store";

export interface LoginResult {
  userId: string;
  refreshToken: string;
}

/**
 * Minimal login: validate that credentials are present, then issue a session.
 * The demo deliberately keeps credential checking trivial — the interesting
 * behavior for the course lives in refresh-token rotation, not in login.
 */
export function login(
  store: SessionStore,
  userId: string,
  password: string,
): LoginResult {
  if (!userId || !password) {
    throw new Error("missing credentials");
  }
  const session = store.issue(userId);
  return { userId: session.userId, refreshToken: session.refreshToken };
}
