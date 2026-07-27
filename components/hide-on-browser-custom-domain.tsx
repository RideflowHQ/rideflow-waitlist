"use client";

import { useEffect, useState, type ReactNode } from "react";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

/** Hides children when the browser hostname is a company custom domain. */
export function HideOnBrowserCustomDomain({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isRideflowOwnedHost(window.location.hostname)) {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;
  return <>{children}</>;
}
