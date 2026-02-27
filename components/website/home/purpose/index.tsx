import Badge from "@/components/custom/badge";
import React from "react";
import Image from "next/image";

export const PurposeSection = () => {
  return (
    <section className="py-18 min-h-[80vh]">
      <div className="container mx-auto px-4 flex text-center flex-col items-center justify-center gap-8 h-full">
        <Badge text="Driven by purpose" color="bg-white" />
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[2.6rem] font-medium w-[78%] mb-10">
            We're not just about deliveries and dashboards. We're building
            smarter systems that help logistics teams stay in control, reduce
            waste, and move goods more efficiently—every single day.
          </h2>
          <div className="flex gap-4 min-h-152 w-full">
            <div className="w-[65%] h-full">
              <div className="w-full h-[50%] rounded-[25px] bg-[#2844E6] mb-4 relative p-8 text-white flex items-end gap-8">
                <div className="flex flex-col justify-between items-start w-[65%] h-full">
                  <p className="font-medium text-sm">On-Time Delivery Rates</p>
                  <div className="text-left">
                    <p>
                      <span className="text-[2.6rem] font-medium">95%</span>
                    </p>
                    <p className="w-[70%]">
                      Identify delays early and keep deliveries running on
                      schedule.
                    </p>
                  </div>
                </div>
                <div className="w-[35%] relative h-[70%]">
                  100
                  <Image src={"/home/bus.webp"} alt="Delivery Bus" fill />
                </div>
              </div>
              <div className="flex gap-4 h-[50%]">
                <div className="w-1/2 rounded-[25px] bg-emerald-300 relative overflow-hidden">
                  <Image
                    src={"/home/receive.webp"}
                    alt="Receive"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-1/2 rounded-[25px] bg-white p-8 flex flex-col justify-between items-start">
                  <p className="font-medium text-sm">Order Assignment</p>
                  <div className="text-left">
                    <p>
                      <span className="text-[2.6rem] font-medium">200%</span>{" "}
                      <span className="text-xm">faster</span>
                    </p>
                    <p>
                      Automatically match orders to available drivers in
                      seconds, not minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-full flex flex-col gap-4">
              <div className="w-full h-[60%] rounded-[25px] relative overflow-hidden">
                <Image
                  src={"/home/overall-woman.webp"}
                  alt="Overall Woman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full h-[40%] rounded-[25px] bg-[#04081A] p-8 flex flex-col justify-between items-start text-white">
                <p className="font-medium text-sm">Operating Costs</p>
                <div className="text-left">
                  <p>
                    <span className="text-[2.6rem] font-medium">40%</span>{" "}
                    <span className="text-xm">reduction</span>
                  </p>
                  <p>
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
