import { ServicesPage } from "./page.client";
import { Metadata } from "next";
import { getAllServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services - Rideflow",
  description:
    "Explore Rideflow's comprehensive logistics services including fleet management, rider management, operations management, and more.",
};

export default async function ServicePage() {
  const services = getAllServices();

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `https://rideflow.org/services/${service.slug}`,
        provider: {
          "@type": "Organization",
          name: "Rideflow Limited",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <ServicesPage />
    </>
  );
}
