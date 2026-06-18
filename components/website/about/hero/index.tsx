import Badge from "@/components/custom/badge";
import React from "react";
import MediaCarousels from "./media-carousels";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

export const AboutHero = () => {
  return (
    <section className="min-h-[88vh] pb-10 md:pb-20 relative">
      <Image
        src="/home/about-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-[34%] right-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 pt-28 md:pt-40 flex flex-col items-start gap-6 max-w-5xl">
        <Badge text="About Rideflow" color="bg-white" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground"
        >
          We&apos;re Building the Operating System for Nigerian Logistics.
        </TextAnimate>
        <p className="text-base md:text-lg text-rideflow-text max-w-3xl leading-7">
          Rideflow started with one observation: the people running Nigeria&apos;s
          logistics industry work harder than almost anyone, and the tools
          available to them have never matched that effort. We&apos;re here to
          change that.
        </p>
      </div>
      <MediaCarousels />
    </section>
  );
};
