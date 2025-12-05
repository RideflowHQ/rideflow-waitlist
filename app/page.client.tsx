"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="py-20 bg-white" />,
});

const Faqs = dynamic(() => import("@/components/Faqs"), {
  loading: () => <div className="py-20" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-12" />,
});

export function LandingPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <Header />
      <Hero  />
      <Features />
      <Faqs />
      <Footer />
    </main>
  );
}
// mx-auto max-w-screen-2xl
