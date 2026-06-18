import Badge from "@/components/custom/badge";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { aboutValues } from "@/lib/content/about";

export const ValueSection = () => {
  return (
    <section className="py-12 md:py-20 min-h-[70vh] bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-16">
        <div className="w-full lg:w-[40%] flex flex-col gap-4 items-start">
          <Badge text="What We Stand For" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="font-medium text-2xl sm:text-3xl md:text-[2.6rem] leading-tight"
          >
            Four Principles That Guide Everything We Build.
          </TextAnimate>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {aboutValues.map((value) => (
            <div
              key={value.title}
              className="bg-body-gray rounded-3xl p-8 flex flex-col gap-4"
            >
              <p className="font-medium text-[1.35rem]">{value.title}</p>
              <p className="text-sm leading-6 text-rideflow-text-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
