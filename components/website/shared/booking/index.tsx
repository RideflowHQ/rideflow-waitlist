"use client";
import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BookingSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className="py-10 md:py-18 min-h-[50vh] md:min-h-[75vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url("./home/overall-woman.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex text-center flex-col items-center justify-center gap-3 md:gap-4 h-full">
        <Badge text="Start your journey" color="bg-white" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-white leading-tight mb-3 md:mb-5 w-[80%] md:w-[75%] lg:w-[55%]">
          Book a customized walkthrough with our solutions team
        </h1>
        <Button
          className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
          onClick={() => {
            window.open("https://calendly.com/rideflow", "_blank");
            setOpen(false);
          }}
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default BookingSection;
