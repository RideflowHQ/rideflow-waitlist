function envApiBase(): string {
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");
  if (!raw) return "";
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

/** Rideflow-owned tracking only for now — no custom-domain host branching. */
export function resolvePublicApiBase(): {
  apiBase: string;
  socketUrl: string;
} {
  const apiBase = envApiBase();
  return {
    apiBase,
    socketUrl: apiBase ? `${apiBase.replace(/\/api$/, "")}/public` : "",
  };
}
