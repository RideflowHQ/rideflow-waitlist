"use client";

import { DetailHero } from "@/components/website/services/services-details/hero";
import { ServiceDetails } from "@/components/website/services/services-details/details";
import { OtherServices } from "@/components/website/services/services-details/others";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { getServiceById } from "@/lib/services-data";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

export function ServicesDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <main className="w-full flex flex-col relative">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <p className="mt-4">
            The service you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col relative">
      <DetailHero service={service} />
      <ServiceDetails service={service} />
      <OtherServices currentServiceId={serviceId} />
      <BookingSection />
    </main>
  );
}
// mx-auto max-w-screen-2xl
