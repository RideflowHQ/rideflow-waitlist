import { Metadata } from "next";
import { PrivacyPolicyPage } from "./page.client";

export const metadata: Metadata = {
  title: "Privacy Policy - Rideflow",
  description:
    "Read Rideflow Limited's Privacy Policy covering how we collect, use, and protect personal data across the Rideflow platform and Rideflow Hubs.",
};

export default async function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
