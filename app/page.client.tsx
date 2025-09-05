"use client";

import { useRef } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export function LandingPage() {
  return (
    <main className=" w-full h-full flex-1 flex flex-col relative">
      <Header />
      <Hero />
      <Features />
      <Faqs />
      <Footer />
    </main>
  );
}
// mx-auto max-w-screen-2xl
