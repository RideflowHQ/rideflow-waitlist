import { platformStats } from "@/lib/content/site";
import type {
  PlatformDisplayStats,
  PublicPlatformStats,
} from "@/lib/types/stats";

const FALLBACK_STATS: PlatformDisplayStats = {
  ordersProcessed: platformStats[0].value,
  deliveriesCompleted: platformStats[1].value,
  customersServed: platformStats[2].value,
  deliveryFeesTracked: platformStats[3].value,
  activeBusinesses: platformStats[4].value,
  currency: "NGN",
};

export const PLATFORM_STAT_LABELS = {
  ordersProcessed: platformStats[0].label,
  deliveriesCompleted: platformStats[1].label,
  customersServed: platformStats[2].label,
  deliveryFeesTracked: platformStats[3].label,
  activeBusinesses: platformStats[4].label,
} as const;

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
    typeof stats.customersServed === "number" &&
    typeof stats.activeBusinesses === "number" &&
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

/** Maps public API fields to the homepage/about stats display. */
export function resolvePlatformDisplayStats(
  stats: PublicPlatformStats | null,
): PlatformDisplayStats {
  if (!stats) {
    return FALLBACK_STATS;
  }

  return {
    ordersProcessed: stats.totalOrdersProcessed,
    deliveriesCompleted:
      stats.deliveriesCompleted ?? FALLBACK_STATS.deliveriesCompleted,
    customersServed: stats.customersServed,
    deliveryFeesTracked:
      stats.deliveryFeesTracked ?? stats.deliveredAmount,
    activeBusinesses: stats.activeBusinesses,
    currency: stats.currency || FALLBACK_STATS.currency,
  };
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
