import React from "react";
import Image from "next/image";
import Badge from "@/components/custom/badge";
import { TextAnimate } from "@/components/ui/text-animate";

export const FoundersNoteSection = () => {
  return (
    <section className="bg-[#04081A] py-12 md:py-20 min-h-[80vh]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
        <div className="w-full lg:w-1/2 aspect-square relative">
          <Image
            src="/about/new-founder.jpeg"
            alt="Founder"
            fill
            className="object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-6 text-white">
          <Badge text="Where We Started" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-2xl sm:text-3xl md:text-4xl font-medium"
          >
            Built From Frustration. Refined by Operators.
          </TextAnimate>
          <div className="space-y-4 text-lg font-light leading-7">
            <p>
              Rideflow was founded by Michael Idris after seeing firsthand how
              fragmented and manual logistics operations were across Nigeria —
              businesses with real scale and real ambition, held back by tools
              that couldn&apos;t keep up.
            </p>
            <p>
              The first version of Rideflow was built to solve one problem: give
              logistics operators a single place to manage everything. Since
              then, it has grown into a full operations platform, covering HR,
              fleet, dispatch, compliance, payroll, and analytics, shaped at
              every stage by the operators actually using it.
            </p>
            <p>
              Today, Rideflow is trusted by logistics businesses across Nigeria,
              with 2,418 orders processed, 1,879 deliveries completed, 2,174
              customers served, and ₦11,068,850 in delivery fees tracked across
              the platform.
            </p>
            <p>We&apos;re just getting started.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
