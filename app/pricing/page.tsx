import { Metadata } from "next";
import { PricingPage } from "./page.client";
import { SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Pricing - Rideflow",
  description:
    "Explore Rideflow pricing plans for courier and logistics teams of every size, from starter dispatch operations to multi-branch fleets.",
};

export default function Pricing() {
  const pricingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rideflow Pricing",
    description:
      "Pricing plans for Rideflow's logistics operations platform.",
    url: `${SITE_URL}/pricing`,
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
