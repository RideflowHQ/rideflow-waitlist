"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

/** Tracking is a standalone public surface — never show marketing chrome. */
export function HideOnTrackingPath({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isCustomDomain =
    typeof window !== "undefined" && !isRideflowOwnedHost(window.location.hostname);

  if (
    isCustomDomain ||
    pathname === "/tracking" ||
    pathname?.startsWith("/tracking/")
  ) {
    return null;
  }
  return <>{children}</>;
}
