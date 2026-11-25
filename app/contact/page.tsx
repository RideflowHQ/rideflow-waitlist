import { ContactPage } from "./page.client";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us - Rideflow",
  description:
    "Contact Rideflow in Ikeja, Lagos for demos, partnerships, or support across our logistics operations platform and Rideflow Hubs.",
};

export default async function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rideflow",
    description: "Contact Rideflow Limited for logistics operations solutions",
    url: `${SITE_URL}/contact`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactPageSchema) }}
      />
      <ContactPage />
    </>
  );
}
