import React from "react";
import Badge from "@/components/custom/badge";
import Image from "next/image";

export const WhoWeAreSection = () => {
  return (
    <section className="py-18 min-h-[80vh] bg-white">
      <div className="container mx-auto px-4 flex text-center flex-col items-center justify-center gap-8 h-full">
        <Badge text="Who we are" color="bg-body-gray" />
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-[2.6rem] font-medium w-[78%]">
            We’re more than a logistics platform — we’re your partner in
            bringing clarity, control, and efficiency to everyday operations.
          </h1>
          <p className="text-lg text-rideflow-text w-[60%]">
            We go beyond basic logistics tools by helping teams manage orders,
            drivers, fleet, and finances in one connected system — making
            operations simpler, more transparent, and easier to scale from start
            to finish.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/clarity.svg"
                alt="Clarity"
                width={40}
                height={40}
              />
              <p className="text-xl">Operational<br/> clarity</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/reliable.svg"
                alt="Reliable"
                width={40}
                height={40}
              />
              <p className="text-xl">Reliable<br/> executions</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/about/control.svg"
                alt="Control"
                width={40}
                height={40}
              />
              <p className="text-xl">End-to-end<br/> control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
