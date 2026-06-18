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

const Faqs = dynamic(() => import("@/components/Faqs"), {
  loading: () => <div className="py-20" />,
});

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
