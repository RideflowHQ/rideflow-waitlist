import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";

const values = [
  {
    id: 1,
    icon: "/about/unified.svg",
    alt: "Unified Operation",
    title: "Unified Operation",
  },
  {
    id: 2,
    icon: "/about/speed.svg",
    alt: "Built for Speed",
    title: "Built for Speed",
  },
  {
    id: 3,
    icon: "/about/data.svg",
    alt: "Clarity Through Data",
    title: "Clarity Though Data",
  },
  {
    id: 4,
    icon: "/about/world.svg",
    alt: "For Real-World Logistics",
    title: "For Real-World Logistics",
  },
];

export const ValueSection = () => {
  return (
    <section className="py-20 min-h-[70vh] bg-white">
      <div className="container mx-auto px-4 flex gap-16">
        <div className="w-[40%] flex flex-col gap-4 items-start">
          <Badge text="Values Pillars" color="bg-body-gray" />
          <h2 className="font-medium text-[2.6rem] leading-tight">
            What Makes
            <br /> Rideflow Different
          </h2>
        </div>
        <div className="w-[60%] grid grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-body-gray rounded-3xl p-8 flex flex-col gap-10"
            >
              <Image src={value.icon} alt={value.alt} width={44} height={44} />
              <p className="font-medium text-[1.35rem]">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
