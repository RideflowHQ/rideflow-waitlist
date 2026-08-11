"use client";

import { isCustomDomainBrowser } from "@/lib/tracking/host";
import type {
  PublicApiResult,
  PublicTrackingData,
  PublicTrackingSite,
} from "@/lib/tracking/types";

function publicApiBase(): string {
  if (isCustomDomainBrowser()) return "/api";
  return (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");
}

function unwrapData<T>(json: unknown): T | null {
  if (!json || typeof json !== "object") return null;
  return "data" in json ? ((json as { data: T }).data ?? null) : (json as T);
}

async function publicGet<T>(path: string, fallback: string): Promise<PublicApiResult<T>> {
  const base = publicApiBase();
  if (!base) {
    return { ok: false, status: 503, error: "Tracking API is not configured" };
  }

  try {
    const response = await fetch(`${base}${path}`, {
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
