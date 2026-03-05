import { motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import WaitlistForm from "@/components/Form";
import { useState } from "react";
import Badge from "@/components/custom/badge";
import MediaCarousels from "./media-carousels";
import Image from "next/image";

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
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 h-full py-20 lg:py-0">
        <div className="w-full lg:w-[47%] flex flex-col items-start gap-4 md:gap-6 h-full justify-center">
          <Badge text="Built for Modern Logistics Teams" color="bg-white" />
          <div>
            <TextAnimate
              animation="blurIn"
              by="word"
              startOnView
              once
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground"
            >
              Streamline your Logistics
            </TextAnimate>
            <p className="text-base sm:text-lg md:text-xl text-rideflow-text mt-3 md:mt-4">
              Take control of your entire transportation business from a single
              dashboard. Easily manage your fleet, staff, and deliveries to
              streamline your operations.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full px-0 sm:px-3 mt-2 md:mt-4 max-w-sm md:max-w-2xl">
            <WaitlistForm onSuccessChange={setIsSuccess} />
          </div>
        </div>
        <div className="w-full lg:w-[53%] h-100 sm:h-125 lg:h-auto">
          <MediaCarousels />
        </div>
      </div>
    </section>
  );
};
