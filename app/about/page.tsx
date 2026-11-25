import { AboutPage } from "./page.client";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us - Rideflow",
  description:
    "Learn about Rideflow Limited, building logistics operations software and the Rideflow Hubs marketplace for courier businesses in Nigeria.",
};

export default async function About() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Rideflow",
    description:
      "Rideflow Limited builds operational software designed for logistics companies, fleet operators, dispatch businesses, and transportation companies.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Rideflow Limited",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(aboutPageSchema) }}
      />
      <AboutPage />
    </>
  );
}
