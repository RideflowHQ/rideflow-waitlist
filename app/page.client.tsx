"use client";

import { useRef } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export function LandingPage() {
  return (
    <main className="pt-4 md:pt-8 w-full h-full flex-1 flex flex-col relative">
      <section className="mx-auto max-w-screen-2xl ">
        <Header />
        <Hero />
        <Features />
        <Faqs />
      </section>
      <Footer />
    </main>
  );
}


