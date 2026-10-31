"use client";

import Badge from "@/components/custom/badge";
import { Compare } from "@/components/ui/compare";

export function JobCompare({ id = "same-job" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-28 bg-body-gray py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Badge text="One job, two phones" color="bg-white" />
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl">
              You pay on Move. A rider sees it on Ride.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-rideflow-text-light sm:text-base">
              Drag the handle. Same ₦3,000 delivery — checkout on the customer
              phone, the request hitting the rider.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <span className="pointer-events-none absolute left-5 top-5 z-50 rounded-full bg-rideflow-ink-hard/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              Move
            </span>
            <span className="pointer-events-none absolute right-5 top-5 z-50 rounded-full bg-rideflow-ink-hard/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              Ride
            </span>
            <Compare
              firstImage="/home/product/pay.svg"
              secondImage="/home/product/rider-request.svg"
              firstImageClassName="object-cover object-top"
              secondImageClassname="object-cover object-top"
              className="h-[min(34rem,70svh)] w-full max-w-none rounded-[1.6rem] border-[6px] border-rideflow-ink-hard shadow-[0_28px_60px_rgba(14,14,14,0.28)]"
              slideMode="drag"
              autoplay
              autoplayDuration={4200}
              initialSliderPercentage={55}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
