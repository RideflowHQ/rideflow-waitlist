import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";

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
    <section className="py-20 min-h-[90vh] bg-white border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6 flex gap-16">
        <div className="w-[40%] flex flex-col gap-4 items-start">
          <Badge text="Why choose us" color="bg-body-gray" />
          <h2 className="font-medium text-[2.6rem] leading-tight">
            What you can do
            <br /> with Rideflow
          </h2>
        </div>
        <div className="w-[60%] grid grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-body-gray rounded-2xl p-8 flex flex-col justify-between h-[15.2rem]"
            >
              <Image
                src={reason.icon}
                alt={reason.alt}
                width={44}
                height={44}
              />
              <p className="font-medium text-[1.35rem]">{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
