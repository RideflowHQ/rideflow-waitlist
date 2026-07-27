import type { Metadata } from "next";

import { TrackingPageClient } from "./page.client";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Enter your tracking ID to check the status of your order or shipment.",
  robots: { index: false, follow: false },
};

export default function TrackingPage() {
  return <TrackingPageClient />;
}
