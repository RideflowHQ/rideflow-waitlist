import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";

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
    <section className="min-h-[95vh] py-15 overflow-hidden">
      <div className="relative h-full">
        <div className="absolute top-0 bottom-0 left-[45%] -right-8 z-0">
          <Image src="/home/i-mac.webp" alt="iMac" fill />
        </div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex">
            <div className="w-[43%] pr-16">
              <div className="mb-10">
                <Badge text="Target audience" color="bg-white" />
                <h2 className="text-[2.6rem] font-medium text-foreground leading-tight mt-4">
                  Who Rideflow is for
                </h2>
              </div>
              <div className="flex flex-col gap-10">
                {targetAudiences.map((audience) => (
                  <div key={audience.id} className="flex gap-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center shrink-0">
                      <Image
                        src={audience.icon}
                        alt={audience.alt}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="mb-2 font-medium text-xl">
                        {audience.title}
                      </p>
                      <p className="text-sm">{audience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[55%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
