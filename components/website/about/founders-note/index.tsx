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
          <Badge text="Founder's Note" color="bg-white" />
          <div className="space-y-3 md:space-y-4">
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="text-2xl sm:text-3xl md:text-4xl font-medium"
            >
              A Note from the Founder
            </TextAnimate>
            <p className="text-lg font-light">
              Logistics is one of those industries that quietly keeps everything
              moving, yet the people running it are often forced to work with
              fragmented tools and inefficient systems.
            </p>
            <p className="text-lg font-light">
              Rideflow was born from seeing firsthand how much time, money, and
              energy logistics teams lose trying to manage operations across
              spreadsheets, calls, and disconnected platforms. We believed there
              had to be a better way—one system that brings clarity, structure,
              and confidence to daily operations.
            </p>
            <p className="text-lg font-light">
              Our goal with Rideflow is simple: build practical tools that work
              in the real world. Software that supports the people behind every
              delivery, helps businesses grow sustainably, and removes
              unnecessary friction from logistics operations.
            </p>
            <p className="text-lg font-light">
              We’re excited to be building alongside teams who care deeply about
              doing logistics better.
            </p>
          </div>
          <p className="text-lg font-semibold">
            — Michael Idris, Founder & CEO
          </p>
        </div>
      </div>
    </section>
  );
};
