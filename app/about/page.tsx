import { AboutPage } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Rideflow",
  description:
    "Learn about Rideflow Limited - A logistics operations platform helping businesses manage riders, drivers, fleets, and delivery workflows efficiently.",
};

export default async function About() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Rideflow",
    description:
      "Rideflow Limited builds operational software designed for logistics companies, fleet operators, dispatch businesses, and transportation companies.",
    url: "https://rideflow.org/about",
    mainEntity: {
      "@type": "Organization",
      name: "Rideflow Limited",
      url: "https://rideflow.org",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutPage />
    </>
  );
}
