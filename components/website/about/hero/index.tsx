import Badge from "@/components/custom/badge";
import React from "react";
import MediaCarousels from "./media-carousels";
import Image from "next/image";

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
      <div className="container mx-auto px-6 pt-28 md:pt-40 flex flex-col items-start gap-6">
        <Badge text="About Rideflow" color="bg-white" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground md:w-[70%]">
          Where structure meets real-world logistics
        </h1>
      </div>
      <MediaCarousels />
    </section>
  );
};
