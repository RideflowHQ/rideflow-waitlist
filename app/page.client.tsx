"use client";

import {
  Hero,
  ProductShowcase,
  OrderFlow,
  AppDownloadSection,
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

const GlobeCoverage = dynamic(
  () =>
    import("@/components/website/home/product/globe-coverage").then(
      (mod) => mod.GlobeCoverage,
    ),
  {
    ssr: false,
    loading: () => (
      <section
        className="h-[28rem] bg-rideflow-ink-hard lg:h-[40rem]"
        aria-hidden
      />
    ),
  },
);

export function LandingPage() {
  return (
    <main className=" w-full flex flex-col relative">
      <Hero />
      <ProductShowcase />
      <OrderFlow />
      <AppDownloadSection />
      <Brands />
      <PlatformStatsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <GlobeCoverage />
      <StakesSection />
      <TestimoniesSection />
      <PartnerBridgeSection />
      <BookingSection />
      <Faqs />
    </main>
  );
}
