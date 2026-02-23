"use client";
import React from "react";
import Image from "next/image";
import Cards from "./cards";

export const ContactHero = () => {
  return (
    <section className="min-h-screen overflow-hidden relative">
      {/* Image layer - positioned from center of container to right edge */}
      <div className="absolute top-0 bottom-0 left-1/2 right-0 h-full z-0">
        <Image
          src="/contact/contact-man.webp"
          alt="Contact Man"
          fill
          className="object-cover"
        />
      </div>

      {/* Content layer */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="h-full flex items-center">
          {/* Left content - respects container width */}
          <div className="w-1/2 pt-30 pb-15 pr-8">
            <h1 className="text-[2.6rem] font-medium mb-3">
              Get in touch with us
            </h1>
            <p className="text-lg text-rideflow-text mb-8 w-[83%]">
              Our friendly team is here to help. Reach out by phone, email, or
              through our contact form, we’ll get back to you promptly and
              ensure all your needs are met.
            </p>
            <Cards />
          </div>

          {/* Right side spacer */}
          <div className="w-1/2" />
        </div>
      </div>
    </section>
  );
};
