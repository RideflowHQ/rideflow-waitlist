import React from "react";
import Badge from "@/components/custom/badge";
import Image from "next/image";

export const WhoWeAreSection = () => {
  return (
    <section className="py-12 md:py-18 min-h-[65vh] bg-white">
      <div className="container mx-auto px-6 flex text-center flex-col items-center justify-center gap-6 md:gap-8 h-full">
        <Badge text="Who we are" color="bg-body-gray" />
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-medium w-full md:w-[90%] lg:w-[78%]">
            We're more than a logistics platform — we're your partner in
            bringing clarity, control, and efficiency to everyday operations.
          </h2>
          <p className="text-base md:text-lg text-rideflow-text w-full md:w-[80%] lg:w-[60%]">
            We go beyond basic logistics tools by helping teams manage orders,
            drivers, fleet, and finances in one connected system — making
            operations simpler, more transparent, and easier to scale from start
            to finish.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/clarity.svg"
                alt="Clarity"
                width={40}
                height={40}
              />
              <p className="text-xl">
                Operational
                <br /> clarity
              </p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/reliable.svg"
                alt="Reliable"
                width={40}
                height={40}
              />
              <p className="text-xl">
                Reliable
                <br /> executions
              </p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/control.svg"
                alt="Control"
                width={40}
                height={40}
              />
              <p className="text-xl">
                End-to-end
                <br /> control
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
