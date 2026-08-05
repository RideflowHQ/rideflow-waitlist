export type Lane = "move" | "run";

export const LANE_COOKIE = "rf_lane";

/**
 * Run logistics is the default for first-time visitors: it is the live product,
 * it holds the existing SEO equity, and the Move goods side is still a waitlist.
 */
export const DEFAULT_LANE: Lane = "run";

export const LANE_HOME: Record<Lane, string> = {
  move: "/move",
  run: "/",
};

const MOVE_PREFIXES = ["/move"];

const RUN_PREFIXES = [
  "/platform",
  "/pricing",
  "/hub",
  "/riders",
  "/rider-sourcing",
];

/**
 * Which lane a path belongs to, or null for audience-neutral pages
 * (/about, /blog, /contact, legal) where the cookie decides instead.
 */
export function laneFromPathname(pathname: string): Lane | null {
  if (pathname === "/") return "run";
  if (MOVE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return "move";
  if (RUN_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return "run";
  return null;
}

function isLane(value: string): value is Lane {
  return value === "move" || value === "run";
}

export function readLaneCookie(): Lane | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LANE_COOKIE}=([^;]*)`),
  );
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  return isLane(value) ? value : null;
}

/** Session cookie by design — no Max-Age/Expires, so the choice resets each visit. */
export function writeLaneCookie(lane: Lane): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LANE_COOKIE}=${lane}; path=/; SameSite=Lax`;
}
