import { Metadata } from "next";
import { Suspense } from "react";
import { HubPage } from "./page.client";

export const metadata: Metadata = {
  title: "Rideflow Hub - Get Discovered, Get Orders",
  description:
    "List your logistics business on the Rideflow Hub and receive delivery requests from customers searching in your service area.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-body-gray pt-32" />}>
      <HubPage />
    </Suspense>
  );
}
