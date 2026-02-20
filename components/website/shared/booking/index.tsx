import Badge from "@/components/custom/badge";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import React from "react";

const BookingSection = () => {
  return (
    <section
      className="py-18 min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url("./home/overall-woman.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 flex text-center flex-col items-center justify-center gap-4 h-full">
        <Badge text="Start your journey" color="bg-white" />
        <h1 className="text-[2.5rem] font-medium text-white leading-tight mb-5">
          Book a customized walkthrough <br /> with our solutions team
        </h1>
        <PulsatingButton
          pulseColor={"#2c4bfd"}
          className="bg-rideflow-blue rounded-2xl px-6 py-2 text-white font-semibold"
          onClick={() => {
            window.open("https://calendly.com/rideflow", "_blank");
          }}
        >
          Book a Demo
        </PulsatingButton>
      </div>
    </section>
  );
};

export default BookingSection;
