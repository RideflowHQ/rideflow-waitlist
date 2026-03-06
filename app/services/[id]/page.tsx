import { ServicesDetailPage } from "./page.client";
import { getServiceBySlug, getAllServices } from "@/lib/services-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceBySlug(id);

  if (!service) {
    return {
      title: "Service Not Found - Rideflow",
    };
  }

  return {
    title: `${service.title} - Rideflow`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceBySlug(id);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `https://rideflow.org/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Rideflow Limited",
      url: "https://rideflow.org",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesDetailPage />
    </>
  );
}
