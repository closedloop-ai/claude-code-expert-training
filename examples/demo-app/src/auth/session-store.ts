import { randomUUID } from "node:crypto";

export interface Session {
  userId: string;
  refreshToken: string;
  issuedAt: number;
  /** Absolute expiry as a ms epoch timestamp; undefined means the token never expires. */
  expiresAt?: number;
  /** Identifies the rotation lineage this token descends from a single login. */
  familyId: string;
}

/** Emitted when a previously-rotated token is replayed (signals compromise). */
export interface SecurityEvent {
  type: "refresh_token_reuse_detected";
  userId: string;
  familyId: string;
  at: number;
}

/**
 * In-memory session store with refresh-token rotation.
 *
 * This is the demo app for the one-day intensive. It carries a deliberate
 * bug that threads the whole course: when a refresh token is rotated, the
 * PREVIOUS token is left in the store, so the old token still validates after
 * rotation. Recovering that intent, planning the fix, and verifying it is the
 * running example across Modules 2-5.
 */
export class SessionStore {
  private sessionsByToken = new Map<string, Session>();
  /** Consumed (rotated-away) token -> familyId, so a replay can be detected. */
  private revokedTokens = new Map<string, string>();
  /** familyId -> live tokens, so a whole family can be revoked at once. */
  private tokensByFamily = new Map<string, Set<string>>();
  /** familyId -> owning userId; kept after revocation so replays still audit correctly. */
  private familyOwners = new Map<string, string>();

  constructor(private onSecurityEvent?: (event: SecurityEvent) => void) {}

  /**
   * Issue a brand-new session, starting a fresh token family.
   *
   * `expiresAt` is an absolute ms-epoch deadline: once it elapses the token no
   * longer validates and can no longer be rotated. Omit it for a non-expiring
   * token. The deadline is carried forward across rotation, so a family cannot
   * outlive its window by repeatedly refreshing.
   */
  issue(userId: string, expiresAt?: number): Session {
    const session: Session = {
      userId,
      refreshToken: randomUUID(),
      issuedAt: Date.now(),
      expiresAt,
      familyId: randomUUID(),
    };
    this.sessionsByToken.set(session.refreshToken, session);
    this.tokensByFamily.set(session.familyId, new Set([session.refreshToken]));
    this.familyOwners.set(session.familyId, userId);
    return session;
  }

  /**
   * Rotate a refresh token: validate the presented token and issue a new one.
   *
   * The previous refresh token is invalidated so it can no longer be used after
   * rotation. Replaying an already-rotated token is treated as proof of
   * compromise: the entire token family is revoked and a security event is
   * emitted, rather than failing as an indistinguishable "invalid token".
   */
  rotate(refreshToken: string): Session {
    // Replay of a consumed token => the family is compromised. Detect this
    // before the generic-invalid check so reuse is distinguishable from garbage.
    const revokedFamily = this.revokedTokens.get(refreshToken);
    if (revokedFamily) {
      const userId = this.revokeFamily(revokedFamily);
      this.onSecurityEvent?.({
        type: "refresh_token_reuse_detected",
        userId,
        familyId: revokedFamily,
        at: Date.now(),
      });
      throw new Error("refresh token reuse detected");
    }

    const existing = this.sessionsByToken.get(refreshToken);
    if (!existing) {
      throw new Error("invalid refresh token");
    }
    // An elapsed deadline is a distinct condition from reuse or garbage.
    if (this.isExpired(existing)) {
      throw new Error("refresh token expired");
    }
    const rotated: Session = {
      userId: existing.userId,
      refreshToken: randomUUID(),
      issuedAt: Date.now(),
      expiresAt: existing.expiresAt,
      familyId: existing.familyId,
    };
    this.sessionsByToken.set(rotated.refreshToken, rotated);
    this.tokensByFamily.get(existing.familyId)?.add(rotated.refreshToken);

    // Delete from active, but remember it as consumed so a replay is detectable.
    this.sessionsByToken.delete(refreshToken);
    this.tokensByFamily.get(existing.familyId)?.delete(refreshToken);
    this.revokedTokens.set(refreshToken, existing.familyId);
    return rotated;
  }

  /** Whether a refresh token currently validates (present, not rotated away, not expired). */
  validate(refreshToken: string): boolean {
    const session = this.sessionsByToken.get(refreshToken);
    return session !== undefined && !this.isExpired(session);
  }

  /** A session is expired once its absolute deadline has elapsed. */
  private isExpired(session: Session): boolean {
    return session.expiresAt !== undefined && Date.now() >= session.expiresAt;
  }

  /**
   * Revoke every live token in a family and mark them consumed. Returns the
   * family's userId for audit reporting; the owner is recorded at issue() time
   * so a repeated replay (after the family is already burned) still audits
   * correctly instead of reporting an empty userId.
   */
  private revokeFamily(familyId: string): string {
    const tokens = this.tokensByFamily.get(familyId);
    if (tokens) {
      for (const token of tokens) {
        this.sessionsByToken.delete(token);
        this.revokedTokens.set(token, familyId);
      }
      this.tokensByFamily.delete(familyId);
    }
    return this.familyOwners.get(familyId) ?? "";
  }
}
