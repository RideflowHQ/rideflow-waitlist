"use client";
import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { CALENDLY_URL } from "@/lib/content/site";

const BookingSection = () => {
  return (
    <section
      className="relative py-10 md:py-18 min-h-[50vh] md:min-h-[75vh]"
      style={{
        backgroundImage: `url("./home/overall-woman.webp")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[#04081A]/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/30 via-black/55 to-black/75"
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-3 px-4 text-center md:gap-4 md:px-6">
        <Badge text="Get Started" color="bg-white" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-white leading-tight mb-3 md:mb-5 w-[80%] md:w-[75%] lg:w-[55%]"
        >
          Ready to Run Your Logistics Business the Right Way?
        </TextAnimate>
        <p className="mb-2 max-w-2xl text-sm text-white sm:text-base">
          Join logistics operators across Nigeria who&apos;ve moved from fragmented
          chaos to full operational clarity, with one platform built to manage
          everything.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-rideflow-blue px-4 py-2 text-white font-semibold hover:bg-blue-700 cursor-pointer w-full md:w-max"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Book a Demo →
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white hover:text-rideflow-blue cursor-pointer w-full md:w-max"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Download Platform Overview
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
