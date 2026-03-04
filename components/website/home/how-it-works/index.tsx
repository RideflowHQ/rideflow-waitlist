import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const HowItWorksSection = () => {
  return (
    <section className="bg-[#04081A]">
      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden">
        {/* Image Section - Mobile (Full width, no padding) */}
        <div className="relative w-full h-87.5 sm:h-112.5">
          <Image
            src="/home/woman-overall.webp"
            alt="Overall Woman"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section - Mobile */}
        <div className="px-6 py-12 md:py-15">
          <div className="space-y-3 md:space-y-4">
            <Badge text="How It Works" color="bg-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight">
              Three simple steps to get started
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 text-white mt-8 md:mt-10 mb-8 md:mb-10">
            <div>
              <p className="font-medium text-lg sm:text-xl md:text-2xl">
                1) Connect your business
              </p>
              <p className="font-light text-sm sm:text-base">
                Upload drivers, vehicles, and compliance documents in minutes.
              </p>
            </div>
            <div>
              <p className="font-medium text-lg sm:text-xl md:text-2xl">
                2) Track & Manage
              </p>
              <p className="font-light text-sm sm:text-base">
                Real-time order status, driver performance, fleet health.
              </p>
            </div>
            <div>
              <p className="font-medium text-lg sm:text-xl md:text-2xl">
                3) Optimize & Grow
              </p>
              <p className="font-light text-sm sm:text-base">
                Insights that improve efficiency, reduce costs and increase
                profit.
              </p>
            </div>
          </div>
          <Button
            className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
            onClick={() => {
              window.open(
                "https://dashboard.rideflow.org/auth/login",
                "_blank",
              );
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Desktop Layout - Side by side with absolute positioned image */}
      <div className="hidden lg:block min-h-[90vh] overflow-hidden relative">
        {/* Image layer - Desktop only */}
        <div className="absolute top-0 bottom-0 right-[57%] left-0 h-full z-0">
          <Image
            src="/home/woman-overall.webp"
            alt="Overall Woman"
            fill
            className="object-cover"
          />
        </div>

        {/* Content layer - Desktop */}
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex items-center">
            <div className="w-[43%]" />
            <div className="w-[57%] pl-16 py-15">
              <div className="space-y-3 md:space-y-4">
                <Badge text="How It Works" color="bg-white" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-white leading-tight">
                  Three simple steps to get started
                </h2>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
                <div>
                  <p className="font-medium text-lg sm:text-xl md:text-2xl">
                    1) Connect your business
                  </p>
                  <p className="font-light text-sm sm:text-base">
                    Upload drivers, vehicles, and compliance documents in
                    minutes.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-lg sm:text-xl md:text-2xl">
                    2) Track & Manage
                  </p>
                  <p className="font-light text-sm sm:text-base">
                    Real-time order status, driver performance, fleet health.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-lg sm:text-xl md:text-2xl">
                    3) Optimize & Grow
                  </p>
                  <p className="font-light text-sm sm:text-base">
                    Insights that improve efficiency, reduce costs and increase
                    profit.
                  </p>
                </div>
              </div>
              <Button
                className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
                onClick={() => {
                  window.open(
                    "https://dashboard.rideflow.org/auth/register",
                    "_blank",
                  );
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
