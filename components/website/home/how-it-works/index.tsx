import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const HowItWorksSection = () => {
  return (
    <section className="min-h-[90vh] overflow-hidden relative bg-[#04081A]">
      {/* Image layer - positioned from center of container to right edge */}
      <div className="absolute top-0 bottom-0 right-[57%] left-0 h-full z-0">
        <Image
          src="/home/woman-overall.webp"
          alt="Overall Woman"
          fill
          className="object-cover"
        />
      </div>

      {/* Content layer */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="h-full flex items-center">
          <div className="w-[43%]" />
          <div className="w-[57%] pl-16 py-15">
            <div className="space-y-4">
              <Badge text="How It Works" color="bg-white" />
              <h2 className="text-[2.6rem] font-medium text-white leading-tight">
                Three simple steps to get started
              </h2>
            </div>
            <div className="flex flex-col gap-10 text-white mt-12 mb-12">
              <div>
                <p className="font-medium text-2xl">1)Connect your business</p>
                <p className="font-light">
                  Upload drivers, vehicles, and compliance documents in minutes.
                </p>
              </div>
              <div>
                <p className="font-medium text-2xl">2)Track & Manage</p>
                <p className="font-light">
                  Real-time order status, driver performance, fleet health.
                </p>
              </div>
              <div>
                <p className="font-medium text-2xl">3)Optimize & Grow</p>
                <p className="font-light">
                  Insights that improve efficiency, reduce costs and increase
                  profit.
                </p>
              </div>
            </div>
            <Button
              className="bg-rideflow-blue w-max hover:bg-blue-700 px-8 py-2"
              onClick={() => {
                window.open(
                  "https://dashboard.rideflow.org/auth/login",
                  "_blank",
                );
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
