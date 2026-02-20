"use client";

import { DetailHero, ServiceDetails, OtherServices } from "@/components/website/services";
import { Book } from "lucide-react";
import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);
export function ServicesDetailPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <DetailHero />
      <ServiceDetails />
      <OtherServices />
      <BookingSection />
    </main>
  );
}
// mx-auto max-w-screen-2xl
