"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Tracking is a standalone public surface — never show marketing chrome. */
export function HideOnTrackingPath({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/tracking" || pathname?.startsWith("/tracking/")) {
    return null;
  }
  return <>{children}</>;
}
