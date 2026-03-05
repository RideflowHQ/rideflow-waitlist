import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

const reasons = [
  {
    id: 1,
    icon: "/home/order.svg",
    alt: "Order Management",
    title: "Order Management",
  },
  {
    id: 2,
    icon: "/home/dispatch.svg",
    alt: "Driver & Rider Operations",
    title: "Driver & Rider Operations",
  },
  {
    id: 3,
    icon: "/home/bus.svg",
    alt: "Fleet & Vehicle Control",
    title: "Fleet & Vehicle Control",
  },
  {
    id: 4,
    icon: "/home/insights.svg",
    alt: "Analytics & Profit Insights",
    title: "Analytics & Profit Insights",
  },
  {
    id: 5,
    icon: "/home/document.svg",
    alt: "Documents & Compliance",
    title: "Documents & Compliance",
  },
  {
    id: 6,
    icon: "/home/gear.svg",
    alt: "Role-Based Access",
    title: "Role-Based Access",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 min-h-[90vh] bg-white border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6 md:px-6 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="w-full lg:w-[40%] flex flex-col gap-3 md:gap-4 items-start">
          <Badge text="Why choose us" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="font-medium text-4xl sm:text-4xl md:text-4xl lg:text-[2.6rem] leading-tight"
          >
            What you can do with Rideflow
          </TextAnimate>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-body-gray rounded-2xl p-6 md:p-8 flex flex-col justify-between h-48 sm:h-56 md:h-[15.2rem]"
            >
              <Image
                src={reason.icon}
                alt={reason.alt}
                width={36}
                height={36}
                className="w-9 h-9 md:w-11 md:h-11"
              />
              <p className="font-medium text-lg sm:text-xl md:text-[1.35rem]">
                {reason.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
