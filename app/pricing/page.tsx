import { Metadata } from "next";
import { PricingPage } from "./page.client";

export const metadata: Metadata = {
  title: "Pricing - Rideflow",
  description:
    "Explore Rideflow pricing plans for logistics teams of every size, from starter operations to enterprise-scale fleet and branch management.",
};

export default function Pricing() {
  const pricingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rideflow Pricing",
    description:
      "Pricing plans for Rideflow's logistics operations platform.",
    url: "https://rideflow.org/pricing",
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Rideflow Pricing Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "20000",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "50000",
          priceCurrency: "NGN",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "100000",
          priceCurrency: "NGN",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageSchema) }}
      />
      <PricingPage />
    </>
  );
}
