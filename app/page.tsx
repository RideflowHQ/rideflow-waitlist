import { LandingPage } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rideflow - Streamline your Logistics Operations",
  description:
    "Rideflow is a logistics operations platform that helps businesses manage riders, drivers, fleets, and delivery workflows from a centralized system. Improve operational efficiency and accountability.",
  openGraph: {
    title: "Rideflow - Streamline your Logistics Operations",
    description:
      "Logistics operations platform for managing riders, drivers, fleets, and delivery workflows",
    url: "https://rideflow.org",
    siteName: "Rideflow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rideflow - Streamline your Logistics Operations",
    description:
      "Logistics operations platform for managing riders, drivers, fleets, and delivery workflows",
    site: "@RideflowHQ",
  },
};

export default async function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rideflow",
    url: "https://rideflow.org",
    description:
      "Logistics operations platform for managing riders, drivers, fleets, and delivery workflows",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rideflow.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LandingPage />
    </>
  );
}
