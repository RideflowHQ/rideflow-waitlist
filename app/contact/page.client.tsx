"use client";

import { ContactHero, ContactForm } from "@/components/website/contact";
import Badge from "@/components/custom/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

export function ContactPage() {
  return (
    <main className=" w-full  flex flex-col relative">
      <ContactHero />
      <ContactForm />
      <section className="py-12 md:py-18 bg-body-gray border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Badge text="Partner Enquiries" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-2xl sm:text-3xl md:text-[2.6rem] font-medium leading-tight"
          >
            Interested in Partnering With Rideflow?
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            If you&apos;re a logistics company or independent rider looking to join
            the Rideflow Logistics Hub, we&apos;d love to hear from you.
          </p>
          <Button asChild className="mt-8 bg-rideflow-blue text-white hover:bg-blue-700">
            <Link href="/logistics-hub">Learn About the Logistics Hub →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
