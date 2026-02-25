import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";

export const ValueSection = () => {
  return (
    <section className="py-20 min-h-[70vh] bg-white">
      <div className="container mx-auto px-4 flex gap-16">
        <div className="w-[40%] flex flex-col gap-4 items-start">
          <Badge text="Values Pillars" color="bg-body-gray" />
          <h2 className="font-medium text-[2.6rem] leading-tight">
            What Makes
            <br /> Rideflow Different
          </h2>
        </div>
        <div className="w-[60%] grid grid-cols-2 gap-6">
          <div className="bg-body-gray rounded-3xl p-8 flex flex-col gap-10">
            <Image
              src="/about/unified.svg"
              alt="Value Image"
              width={44}
              height={44}
            />
            <p className="font-medium text-[1.35rem]">Unified Operation</p>
          </div>
          <div className="bg-body-gray rounded-3xl p-8 flex flex-col gap-10">
            <Image
              src="/about/speed.svg"
              alt="Value Image"
              width={44}
              height={44}
            />
            <p className="font-medium text-[1.35rem]">Built for Speed</p>
          </div>
          <div className="bg-body-gray rounded-3xl p-8 flex flex-col gap-10">
            <Image
              src="/about/data.svg"
              alt="Value Image"
              width={44}
              height={44}
            />
            <p className="font-medium text-[1.35rem]">Clarity Though Data</p>
          </div>
          <div className="bg-body-gray rounded-3xl p-8 flex flex-col gap-10">
            <Image
              src="/about/world.svg"
              alt="Value Image"
              width={44}
              height={44}
            />
            <p className="font-medium text-[1.35rem]">
              For Real-World Logistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
