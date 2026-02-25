import Badge from "@/components/custom/badge";
import React from "react";
import MediaCarousels from "./media-carousels";

export const AboutHero = () => {
  return (
    <section className="min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-40 flex flex-col items-start gap-6">
        <Badge text="About Rideflow" color="bg-white" />
        <h1 className="text-6xl md:text-7xl font-semibold text-foreground">
          Where structure meets <br /> real-world logistics
        </h1>
      </div>
      <MediaCarousels/>
    </section>
  );
};
