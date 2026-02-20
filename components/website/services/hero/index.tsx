
import React from "react";
import ServicesCards from "./cards";




export const ServiceHero = () => {
  return (
    <section className="py-18 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-semibold text-foreground pt-28">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-rideflow-text mt-4 w-[50%] mx-auto">
          Everything we offer is designed to remove friction from your delivery
          operations — from smarter order management to better driver
          coordination and cost control.
        </p>
        <ServicesCards />
      </div>
    </section>
  );
};
