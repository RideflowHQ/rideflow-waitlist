import React from "react";
import ServicesCards from "./cards";
import Image from "next/image";

export const ServiceHero = () => {
  return (
    <section className="py-12 md:py-18 min-h-screen relative">
      <Image
        src="/service/services-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-0 right-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground pt-28">
          Our Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-rideflow-text mt-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
          Everything we offer is designed to remove friction from your delivery
          operations — from smarter order management to better driver
          coordination and cost control.
        </p>
        <ServicesCards />
      </div>
    </section>
  );
};
