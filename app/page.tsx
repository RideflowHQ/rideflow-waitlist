import { LandingPage } from "./page.client";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rideflow - Streamline your Logistics Operations",
  description:
    "Run fleets, dispatch riders, and courier operations on Rideflow, or send a package in Lagos on Rideflow Hubs — one logistics platform for Nigeria.",
};

export default async function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rideflow",
    url: SITE_URL,
    description:
      "Logistics operations platform and Rideflow Hubs courier marketplace in Nigeria.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(webPageSchema) }}
      />
      <LandingPage />
    </>
  );
}
