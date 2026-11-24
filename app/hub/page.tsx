import { Metadata } from "next";
import { Suspense } from "react";
import { HubPage } from "./page.client";

export const metadata: Metadata = {
  title: "List on Rideflow Hubs - Get More Delivery Customers in Lagos & Nigeria",
  description:
    "Put your courier company or dispatch bike in front of customers ready to send a package on Rideflow Hubs. Get discovered, win orders, and grow.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-body-gray pt-32" />}>
      <HubPage />
    </Suspense>
  );
}
