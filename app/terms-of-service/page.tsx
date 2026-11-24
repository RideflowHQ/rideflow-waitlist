import { Metadata } from "next";
import { TermsOfServicePage } from "./page.client";

export const metadata: Metadata = {
  title: "Terms of Service - Rideflow",
  description:
    "Review the Terms of Service governing your use of the Rideflow logistics operations dashboard, Rideflow Hubs, and related mobile applications.",
};

export default async function TermsOfService() {
  return <TermsOfServicePage />;
}
