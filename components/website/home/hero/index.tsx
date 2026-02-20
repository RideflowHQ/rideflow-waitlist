import { motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import WaitlistForm from "@/components/Form";
import { useState } from "react";
import Badge from "@/components/custom/badge";
import MediaCarousels from "./media-carousels";

export const Hero = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <section className="h-screen">
      <div className="container mx-auto px-4 flex items-center gap-12 h-full">
        <div className="w-[47%] flex flex-col items-start gap-6 h-full justify-center">
          <Badge text="Built for Modern Logistics Teams" color="bg-white" />
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold text-foreground">
              Streamline your
            </h1>
            <h1 className="text-6xl md:text-7xl font-semibold text-foreground">
              Logistics
            </h1>
            <p className="text-lg md:text-xl text-rideflow-text mt-4">
              Take control of your entire transportation business from a single
              dashboard. Easily manage your fleet, staff, and deliveries to
              streamline your operations.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full px-3 mt-4 max-w-sm md:max-w-2xl">
            <WaitlistForm onSuccessChange={setIsSuccess} />
          </div>
        </div>
        <div className="w-[53%]">
          <MediaCarousels />
        </div>
      </div>
    </section>
  );
};
