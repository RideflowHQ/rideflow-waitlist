import Badge from "@/components/custom/badge";
import React from "react";
import Image from "next/image";

export const PurposeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-18 min-h-[80vh]">
      <div className="container mx-auto px-6 flex text-center flex-col items-center justify-center gap-6 md:gap-8 h-full">
        <Badge text="Driven by purpose" color="bg-white" />
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.6rem] font-medium w-full md:w-[90%] lg:w-[78%] mb-6 md:mb-8 lg:mb-10">
            We're not just about deliveries and dashboards. We're building
            smarter systems that help logistics teams stay in control, reduce
            waste, and move goods more efficiently—every single day.
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 min-h-200 sm:min-h-225 lg:min-h-152 w-full">
            <div className="w-full lg:w-[65%] h-auto lg:h-full flex flex-col">
              <div className="w-full h-87.5 sm:h-100 lg:h-[50%] rounded-[20px] md:rounded-[25px] bg-[#2844E6] mb-4 relative p-4 sm:p-6 md:p-8 text-white flex flex-col sm:flex-row items-end gap-4 sm:gap-6 md:gap-8">
                <div className="flex flex-col justify-start sm:justify-between items-start w-full sm:w-[65%] h-full gap-5 sm:gap-0">
                  <p className="font-medium text-xs sm:text-sm">
                    On-Time Delivery Rates
                  </p>
                  <div className="text-left">
                    <p>
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-medium">
                        95%
                      </span>
                    </p>
                    <p className="w-full sm:w-[70%] text-sm sm:text-base">
                      Identify delays early and keep deliveries running on
                      schedule.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-[35%] relative h-100 sm:h-30 md:h-[70%] self-end">
                  <Image
                    src="/home/bus.webp"
                    alt="Delivery Bus"
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-87.5 lg:h-[50%]">
                <div className="w-full sm:w-1/2 h-75 sm:h-full rounded-[20px] md:rounded-[25px] bg-emerald-300 relative overflow-hidden">
                  <Image
                    src="/home/receive.webp"
                    alt="Receive"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full sm:w-1/2 h-45 sm:h-full rounded-[20px] md:rounded-[25px] bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-between items-start">
                  <p className="font-medium text-xs sm:text-sm">
                    Order Assignment
                  </p>
                  <div className="text-left">
                    <p>
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-medium">
                        200%
                      </span>{" "}
                      <span className="text-sm sm:text-base">faster</span>
                    </p>
                    <p className="text-sm sm:text-base">
                      Automatically match orders to available drivers in
                      seconds, not minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] h-auto lg:h-full flex flex-col gap-4">
              <div className="w-full h-75 sm:h-87.5 lg:h-[60%] rounded-[20px] md:rounded-[25px] relative overflow-hidden">
                <Image
                  src={"/home/overall-woman.webp"}
                  alt="Overall Woman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-45 sm:h-70 lg:h-[40%] rounded-[20px] md:rounded-[25px] bg-[#04081A] p-4 sm:p-6 md:p-8 flex flex-col justify-between items-start text-white">
                <p className="font-medium text-xs sm:text-sm">
                  Operating Costs
                </p>
                <div className="text-left">
                  <p>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] font-medium">
                      40%
                    </span>{" "}
                    <span className="text-sm sm:text-base">reduction</span>
                  </p>
                  <p className="text-sm sm:text-base">
                    Track expenses, spot inefficiencies, and cut unnecessary
                    spend across operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
