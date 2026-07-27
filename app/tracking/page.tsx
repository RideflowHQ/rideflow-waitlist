import type { Metadata } from "next";

import { TrackingPageClient } from "./page.client";
import { resolvePublicApiBase } from "@/lib/tracking/public-api";
import type { PublicTrackingBranding } from "@/lib/tracking/types";
import { fontCssFamily } from "@/lib/tracking/utils";

export const metadata: Metadata = {
  title: "Track Your Order - Rideflow",
  description:
    "Enter your tracking ID to check the status of your order or international shipment.",
  robots: { index: false, follow: false },
};

const DEFAULT_BRANDING: PublicTrackingBranding = {
  primaryColor: "#2563EB",
  font: "DM_SANS",
};

export default function TrackingPage() {
  const { apiBase, socketUrl } = resolvePublicApiBase();
  const fontFamily = fontCssFamily(DEFAULT_BRANDING.font);
  const googleFamily = encodeURIComponent(fontFamily);

  return (
    <>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${googleFamily}:wght@400;500;600;700&display=swap`}
      />
      <TrackingPageClient
        companyName="Rideflow"
        branding={DEFAULT_BRANDING}
        apiBase={apiBase}
        socketUrl={socketUrl}
      />
    </>
  );
}
