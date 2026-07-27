"use client";

import type {
  PublicApiResult,
  PublicTrackingData,
  PublicTrackingSite,
} from "@/lib/tracking/types";

function unwrapData<T>(json: unknown): T | null {
  if (!json || typeof json !== "object") return null;
  return "data" in json ? ((json as { data: T }).data ?? null) : (json as T);
}

/** Same-origin public API so Host is the current page hostname (rideflow.org or custom). */
function apiUrl(path: string) {
  return `/api${path}`;
}

async function publicGet<T>(path: string, fallback: string): Promise<PublicApiResult<T>> {
  try {
    const response = await fetch(apiUrl(path), {
      headers: { Accept: "application/json" },
    });
    const json = await response.json().catch(() => null);
    const error =
      json && typeof json === "object" && "error" in json
        ? String((json as { error: unknown }).error)
        : fallback;

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error,
        retryAfterSeconds: Number(response.headers.get("Retry-After")) || undefined,
      };
    }

    const data = unwrapData<T>(json);
    return data ? { ok: true, data } : { ok: false, status: 500, error: fallback };
  } catch {
    return { ok: false, status: 503, error: fallback };
  }
}

export async function fetchTrackingSite(): Promise<PublicApiResult<PublicTrackingSite>> {
  const result = await publicGet<PublicTrackingSite>(
    "/public/site",
    "Unable to load tracking site",
  );
  if (!result.ok && result.status === 404) {
    return { ...result, error: "Tracking site not found" };
  }
  return result;
}

export async function fetchTracking(
  reference: string,
): Promise<PublicApiResult<PublicTrackingData>> {
  const result = await publicGet<PublicTrackingData>(
    `/public/tracking/${encodeURIComponent(reference)}`,
    "Unable to load tracking information",
  );
  if (!result.ok && result.status === 404) {
    return { ...result, error: "Tracking reference not found" };
  }
  if (!result.ok && result.status === 429) {
    return {
      ...result,
      error: "Too many requests. Please wait a moment and try again.",
    };
  }
  return result;
}
