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
  console.log(h);
  return <TrackingPageClient />;
}
