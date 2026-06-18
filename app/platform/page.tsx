import { Metadata } from "next";
import { PlatformPage } from "./page.client";

export const metadata: Metadata = {
  title: "Platform - Rideflow",
  description:
    "Every moving part of your logistics business in one platform. HR, fleet, dispatch, compliance, and finances connected in real time.",
};

export default function Page() {
  return <PlatformPage />;
}
