import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

const benefits = [
  {
    id: 1,
    title: "Manage Drivers Effortlessly",
    description: "Onboard, track, and support drivers from a single pane.",
    image: "/home/drivers.webp",
    bgColor: "bg-[#EAEDFF]",
    borderColor: "border-[#9EACFE]",
    hoverBgColor: "hover:bg-[#9EACFE]",
  },
  {
    id: 2,
    title: "See Income vs Expenses Clearly",
    description: "Know your profit margins and operational spend at a glance.",
    image: "/home/expenses.webp",
    bgColor: "bg-[#ECFBF5]",
    borderColor: "border-[#B2EED6]",
    hoverBgColor: "hover:bg-[#B2EED6]",
  },
  {
    id: 3,
    title: "Stay Compliant without the Hassle",
    description: "Document upload and expiration alerts built-in.",
    image: "/home/documents.webp",
    bgColor: "bg-[#FFFBE5]",
    borderColor: "border-[#FFEF99]",
    hoverBgColor: "hover:bg-[#FFEF99]",
  },
  {
    id: 4,
    title: "Optimize Delivery Routes",
    description: "Reduce mileage and fuel cost with intelligent routing.",
    image: "/home/transit.webp",
    bgColor: "bg-[#FFEAED]",
    borderColor: "border-[#FE9EAC]",
    hoverBgColor: "hover:bg-[#FE9EAC]",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-10 lg:gap-16 mb-8 md:mb-10 lg:mb-12">
        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
          <Badge text="Core benefits" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="font-medium text-4xl sm:text-4xl md:text-4xl lg:text-[2.6rem] leading-tight"
          >
            Built for Real Logistics Operations
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-sm sm:text-base text-rideflow-text-light w-full lg:w-[80%]"
          >
            Rideflow goes beyond surface-level features. Every tool is designed
            to solve the everyday operational challenges logistics teams
            face—helping you work faster, stay organized, and make better
            decisions as you scale.
          </TextAnimate>
        </div>
        <div className="w-full lg:w-auto">
          <Button
            className="bg-rideflow-blue px-8 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
            onClick={() => {
              window.open(
                "https://dashboard.rideflow.org/auth/register",
                "_blank",
              );
            }}
          >
            Start free
          </Button>
        </div>
      </div>

      <div className="relative min-h-100 overflow-hidden">
        <div className="carousel-left-aligned">
          <div
            className="flex gap-3 md:gap-4 overflow-x-auto pb-4 benefits-carousel"
            style={{ scrollbarGutter: "stable" }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`rounded-2xl ${benefit.bgColor} ${benefit.hoverBgColor} h-96 sm:h-100 md:h-[26.9rem] min-w-70 sm:min-w-[320px] md:min-w-150 shrink-0 overflow-hidden relative flex flex-col transition-colors duration-600`}
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <h2 className="font-medium text-lg sm:text-xl md:text-[22px] mb-1 md:mb-2">
                    {benefit.title}
                  </h2>
                  <p className="text-sm sm:text-base text-rideflow-text-light">
                    {benefit.description}
                  </p>
                </div>
                <div className="relative left-6 sm:left-8 md:left-10 flex-1">
                  <div
                    className={`border-l-2 border-t-2 rounded-tl-[12px] ${benefit.borderColor} pl-6 sm:pl-8 md:pl-10 h-full relative overflow-hidden`}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
