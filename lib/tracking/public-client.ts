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

function apiUrl(path: string, apiBase: string, isCustomDomain: boolean) {
  return isCustomDomain ? `/api${path}` : `${apiBase}${path}`;
}

async function publicGet<T>(
  path: string,
  apiBase: string,
  isCustomDomain: boolean,
  fallback: string,
): Promise<PublicApiResult<T>> {
  if (!isCustomDomain && !apiBase) {
    return { ok: false, status: 503, error: "Tracking service is not configured" };
  }

  try {
    const response = await fetch(apiUrl(path, apiBase, isCustomDomain), {
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

export async function fetchTrackingSite(
  apiBase: string,
  isCustomDomain: boolean,
): Promise<PublicApiResult<PublicTrackingSite>> {
  const result = await publicGet<PublicTrackingSite>(
    "/public/site",
    apiBase,
    isCustomDomain,
    "Unable to load tracking site",
  );
  if (!result.ok && result.status === 404) {
    return { ...result, error: "Tracking site not found" };
  }
  return result;
}

export async function fetchTracking(
  reference: string,
  apiBase: string,
  isCustomDomain: boolean,
): Promise<PublicApiResult<PublicTrackingData>> {
  const result = await publicGet<PublicTrackingData>(
    `/public/tracking/${encodeURIComponent(reference)}`,
    apiBase,
    isCustomDomain,
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
