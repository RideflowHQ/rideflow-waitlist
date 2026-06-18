import React from "react";
import Badge from "@/components/custom/badge";
import { TextAnimate } from "@/components/ui/text-animate";

export const WhoWeAreSection = () => {
  return (
    <section className="py-12 md:py-18 min-h-[65vh] bg-white">
      <div className="container mx-auto px-6 flex text-center flex-col items-center justify-center gap-6 md:gap-8 h-full max-w-4xl">
        <Badge text="Why We Exist" color="bg-body-gray" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-2xl sm:text-3xl md:text-[2.6rem] font-medium"
        >
          Logistics Runs Nigeria. It Deserves Better Infrastructure.
        </TextAnimate>
        <div className="flex flex-col gap-4 md:gap-6 items-center text-left">
          <p className="text-base md:text-lg text-rideflow-text leading-7">
            Nigeria&apos;s logistics sector moves goods, connects businesses, and
            keeps the economy running. It accounts for billions in annual
            activity and employs hundreds of thousands of people across the
            country.
          </p>
          <p className="text-base md:text-lg text-rideflow-text leading-7">
            Yet most of the businesses powering this sector still manage their
            people on spreadsheets, coordinate dispatch over WhatsApp, track
            their fleets on separate GPS apps, and handle compliance on paper.
          </p>
          <p className="text-base md:text-lg text-rideflow-text leading-7">
            Rideflow exists to close that gap with a platform built specifically
            for the Nigerian logistics reality. Not adapted from a Western SaaS
            tool or a generic fleet tracker. Built here, for here.
          </p>
        </div>
      </div>
    </section>
  );
};
