import type { PublicPlatformStats } from "@/lib/types/stats";

export function parseGeneratedAt(generatedAt: string): Date {
  return new Date(generatedAt);
}

export function isValidStatsSnapshot(
  payload: unknown,
): payload is PublicPlatformStats {
  if (!payload || typeof payload !== "object") return false;

  const stats = payload as PublicPlatformStats;

  return (
    typeof stats.totalOrdersProcessed === "number" &&
    typeof stats.deliveredAmount === "number" &&
    typeof stats.activeVendors === "number" &&
    typeof stats.fleetInUse === "number" &&
    typeof stats.currency === "string" &&
    typeof stats.generatedAt === "string"
  );
}

export function normalizeStatsPayload(
  payload: unknown,
): PublicPlatformStats | null {
  if (isValidStatsSnapshot(payload)) {
    return payload;
  }

  if (payload && typeof payload === "object" && "data" in payload) {
    const nested = (payload as { data: unknown }).data;
    if (isValidStatsSnapshot(nested)) {
      return nested;
    }
  }

  return null;
}

export function resolveStatsUrls(apiBaseUrl: string) {
  const trimmed = apiBaseUrl.replace(/\/+$/, "");
  const socketOrigin = trimmed.replace(/\/api$/, "");
  const restBase = trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;

  return {
    restUrl: `${restBase}/company/public/platform-stats`,
    socketUrl: `${socketOrigin}/public`,
  };
}
