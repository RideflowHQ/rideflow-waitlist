import WaitlistForm from "@/components/Form";
import { useState } from "react";
import Badge from "@/components/custom/badge";
import MediaCarousels from "./media-carousels";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/content/site";

export const Hero = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="min-h-screen relative">
      <Image
        src="/home/home-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-0 left-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 h-full pb-20 pt-30 lg:py-0">
        <div className="w-full lg:w-[47%] flex flex-col items-start gap-4 md:gap-6 h-full justify-center">
          <Badge text="Built for Nigerian Logistics" color="bg-white" />
          <div>
            <h1 className="text-[clamp(3.25rem,7.2vw,6.5rem)] leading-[0.86] text-rideflow-ink-hard">
              <span className="block font-black tracking-[-0.05em]">
                Streamline
              </span>
              <span className="block font-light tracking-[-0.045em]">
                Your Logistics Operations.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-rideflow-text mt-3 md:mt-4">
              Rideflow is the all-in-one operations platform built for Nigerian
              logistics businesses. Manage your team, fleet, dispatch,
              compliance, and finances from one dashboard, in real time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-2 md:mt-4">
            <Button
              className="bg-rideflow-blue px-6 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Book a Demo
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2 font-semibold border-rideflow-blue text-rideflow-blue hover:bg-body-gray cursor-pointer"
              onClick={() => {
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works ↓
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[53%] h-100 sm:h-125 lg:h-auto">
          <MediaCarousels />
        </div>
      </div>
    </section>
  );
};
