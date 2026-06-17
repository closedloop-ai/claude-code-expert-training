import { SessionStore } from "./auth/session-store";
import { login } from "./auth/login";

// Runnable walk-through of the demo scenario. `pnpm demo` prints a login,
// a token rotation, and — because of the course bug — shows that the OLD
// refresh token still validates after rotation.
const store = new SessionStore();

const session = login(store, "alice", "correct-horse-battery-staple");
console.log("issued refresh token:   ", session.refreshToken);

const rotated = store.rotate(session.refreshToken);
console.log("rotated refresh token:  ", rotated.refreshToken);

console.log("new token valid?        ", store.validate(rotated.refreshToken));
console.log("OLD token still valid?  ", store.validate(session.refreshToken), "  <- should be false after the fix");
