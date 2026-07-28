import type { Metadata } from "next";
import { headers } from "next/headers";

import { TrackingPageClient } from "./page.client";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Enter your tracking ID to check the status of your order or shipment.",
  robots: { index: false, follow: false },
};

export default async function TrackingPage() {
  const h = await headers();
  console.log("[tracking page headers]", {
    host: h.get("host"),
    "x-forwarded-host": h.get("x-forwarded-host"),
    "x-forwarded-proto": h.get("x-forwarded-proto"),
    "x-forwarded-for": h.get("x-forwarded-for"),
    "x-forwarded-port": h.get("x-forwarded-port"),
    "x-forwarded-ua": h.get("x-forwarded-ua"),
  });

  return <TrackingPageClient />;
}
