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

async function publicGet<T>(path: string, fallback: string): Promise<PublicApiResult<T>> {
  try {
    const response = await fetch(`/api${path}`, {
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

export function fetchTrackingSite() {
  return publicGet<PublicTrackingSite>("/public/site", "Unable to load tracking site");
}

export function fetchTracking(reference: string) {
  return publicGet<PublicTrackingData>(
    `/public/tracking/${encodeURIComponent(reference)}`,
    "Unable to load tracking information",
  );
}
