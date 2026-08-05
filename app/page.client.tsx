"use client";

import {
  Hero,
  Brands,
  PlatformStatsSection,
  WhyChooseUsSection,
  HowItWorksSection,
  StakesSection,
  PartnerBridgeSection,
  TestimoniesSection,
} from "@/components/website/home";
import dynamic from "next/dynamic";
// Imported statically on purpose: loading it through next/dynamic puts the Radix
// Accordion inside a lazy/Suspense boundary, and React 19 folds Suspense into
// useId generation — so the server and client produced different radix-_R_… ids
// and hydration warned on every load.
import Faqs from "@/components/Faqs";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

export function LandingPage() {
  return (
    <main className=" w-full flex flex-col relative">
      <Hero />
      <Brands />
      <PlatformStatsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <StakesSection />
      <TestimoniesSection />
      <PartnerBridgeSection />
      <BookingSection />
      <Faqs />
    </main>
  );
}
