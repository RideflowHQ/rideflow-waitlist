"use client";

import {
  Brands,
  Hero,
  HowItWorksSection,
  PurposeSection,
  TargetAudienceSection,
  TestimoniesSection,
  WhyChooseUsSection,
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

// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <div className="py-12" />,
// });

export function LandingPage() {
  return (
    <main className=" w-full flex flex-col relative">
      <Hero />
      <Brands />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PurposeSection />
      <TargetAudienceSection />
      <TestimoniesSection />
      <BookingSection />
      <Faqs />
    </main>
  );
}
// mx-auto max-w-screen-2xl
