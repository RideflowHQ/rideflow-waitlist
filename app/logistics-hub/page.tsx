import { Metadata } from "next";
import { Suspense } from "react";
import { LogisticsHubPage } from "./page.client";

export const metadata: Metadata = {
  title: "Logistics Hub - Rideflow",
  description:
    "The Rideflow Logistics Hub connects customers, logistics businesses, and independent riders on one verified platform.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-body-gray pt-32" />}>
      <LogisticsHubPage />
    </Suspense>
  );
}
