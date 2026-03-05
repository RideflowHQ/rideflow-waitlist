import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

const targetAudiences = [
  {
    id: 1,
    icon: "/home/asset.svg",
    alt: "Asset",
    title: "Asset-Backed Investors",
    description: "Finance motorcycle purchase and let your money work for you.",
  },
  {
    id: 2,
    icon: "/home/logistics.svg",
    alt: "Logistics",
    title: "Logistics Managers",
    description: "Get 360° visibility over orders and drivers.",
  },
  {
    id: 3,
    icon: "/home/dispatch.svg",
    alt: "Dispatch",
    title: "Dispatch Teams",
    description: "Assign and monitor deliveries in real time.",
  },
  {
    id: 4,
    icon: "/home/fleet.svg",
    alt: "Fleet",
    title: "Fleet Owners",
    description: "Reduce downtime and unexpected costs.",
  },
  {
    id: 5,
    icon: "/home/operations.svg",
    alt: "Operations",
    title: "Operations Leaders",
    description: "Get actionable insights instantly.",
  },
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-12 md:py-15 lg:min-h-[95vh] overflow-hidden lg:relative">
      <Image
        src="/home/blog-curve-left.svg"
        alt="curve"
        height={300}
        width={300}
        className="absolute top-0 left-0 -z-5 hidden md:block"
      />
      {/* Image Section - Absolute positioned on desktop only */}
      <div className="hidden lg:block lg:absolute lg:top-0 lg:bottom-0 lg:left-[45%] lg:-right-8 lg:h-full lg:z-0">
        <Image
          src="/home/i-mac.webp"
          alt="iMac"
          fill
          className="object-contain object-right"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:relative lg:z-10 lg:h-full">
        <div className="lg:h-full lg:flex lg:items-center">
          <div className="lg:w-[43%] lg:pr-16">
            <div className="mb-8 md:mb-10">
              <Badge text="Target audience" color="bg-white" />
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="text-4xl sm:text-4xl md:text-4xl lg:text-[2.6rem] font-medium text-foreground leading-tight mt-3 md:mt-4"
              >
                Who Rideflow is for
              </TextAnimate>
            </div>
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 mb-8 lg:mb-0">
              {targetAudiences.map((audience) => (
                <div key={audience.id} className="flex gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center shrink-0">
                    <Image
                      src={audience.icon}
                      alt={audience.alt}
                      width={18}
                      height={18}
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5"
                    />
                  </div>
                  <div>
                    <p className="mb-1 md:mb-2 font-medium text-base sm:text-lg md:text-xl">
                      {audience.title}
                    </p>
                    <p className="text-xs sm:text-sm">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[55%]" />
        </div>
      </div>

      {/* Image Section - Below text on mobile only */}
      <div className="relative h-75 sm:h-100 md:h-125 lg:hidden ml-4 sm:ml-6 -mr-4 sm:-mr-6">
        <Image
          src="/home/i-mac.webp"
          alt="iMac"
          fill
          className="object-contain object-right"
        />
      </div>
    </section>
  );
};
