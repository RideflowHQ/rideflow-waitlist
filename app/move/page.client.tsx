"use client";

import { Button } from "@/components/ui/button";
import { MoveWaitlistForm } from "@/components/website/move/waitlist-form";
import Link from "next/link";

const quotes = [
  { name: "SwiftEx", eta: "Today, 2–4 hrs", price: "₦2,400", best: true },
  { name: "Kargo", eta: "Today, 3–5 hrs", price: "₦3,100", best: false },
  { name: "MoveDash", eta: "Tomorrow, AM", price: "₦3,850", best: false },
  { name: "Naija Haul", eta: "Tomorrow, PM", price: "₦4,200", best: false },
];

const steps = [
  {
    number: "01",
    title: "Download the App",
    text: "Get started in seconds and set up your account.",
  },
  {
    number: "02",
    title: "Find Nearby Delivery Partners",
    text: "Locate the closest logistics companies or independent riders in real time.",
  },
  {
    number: "03",
    title: "Compare & Choose Your Rate",
    text: "Select the best price option that fits your budget.",
  },
  {
    number: "04",
    title: "Book Instantly",
    text: "Confirm your order for immediate, hassle-free pickup.",
  },
];

function SavingSticker() {
  return (
    <div className="-rotate-[4.5deg] rounded-md border-2 border-rideflow-ink-hard bg-rideflow-signal px-4 py-3 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-body-gray">
        You save
      </p>
      <p className="text-xl font-black tracking-[-0.03em] text-body-gray">
        ₦1,800
      </p>
    </div>
  );
}

export function MovePage() {
  return (
    <main className="w-full flex flex-col relative bg-white">
      <section className="pt-32 pb-14 md:pt-38 md:pb-[88px]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="inline-flex items-center gap-[9px] rounded-full border border-rideflow-hairline bg-white py-[7px] pl-[11px] pr-[14px]">
            <span className="size-[7px] shrink-0 rounded-full bg-rideflow-blue" />
            <span className="text-[13px] font-semibold text-rideflow-text2">
              Launching soon in Lagos
            </span>
          </div>

          <div className="mt-[30px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14">
            <div className="flex-1">
              <h1 className="text-[clamp(3.25rem,7.2vw,6.5rem)] leading-[0.86] text-rideflow-ink-hard">
                <span className="block font-light tracking-[-0.045em]">Stop</span>
                <span className="block font-black tracking-[-0.05em]">
                  overpaying
                </span>
                <span className="block font-light tracking-[-0.045em]">
                  to move goods.
                </span>
              </h1>

              <p className="mt-8 max-w-[560px] text-lg leading-[1.45] text-rideflow-text2">
                Compare every logistics provider, decide your price, and book the
                cheapest in minutes.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3">
                <Button
                  asChild
                  className="rounded-xl bg-rideflow-blue px-8 py-[26px] text-[17px] font-semibold text-white hover:bg-blue-700"
                >
                  <Link href="#claim">Claim Your Slot</Link>
                </Button>
                <p className="text-base font-medium text-rideflow-text-extralight">
                  Join the waitlist and get ₦1,000 off your first delivery.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[520px] shrink-0">
              {/* On mobile the sticker sits above the board — overlaying it covered
                  the "4 QUOTES" label and the winning price. */}
              <div className="mb-3 flex justify-end lg:hidden">
                <SavingSticker />
              </div>

              <div className="rounded-lg border-2 border-rideflow-hairline">
              <div className="flex items-center justify-between rounded-t-[6px] bg-rideflow-ink-hard px-[18px] py-[14px]">
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                  Ikeja → Lekki · 4kg
                </p>
                <p className="text-[13px] font-bold tracking-wide text-white">
                  4 QUOTES
                </p>
              </div>

              {quotes.map((quote, index) => (
                <div
                  key={quote.name}
                  className={`relative flex items-baseline gap-4 p-[18px] ${
                    index < quotes.length - 1
                      ? "border-b border-rideflow-hairline"
                      : ""
                  }`}
                >
                  <p
                    className={`shrink-0 text-[17px] tracking-[-0.01em] ${
                      quote.best
                        ? "font-bold text-rideflow-ink-hard"
                        : "font-semibold text-[#8A8A8A]"
                    }`}
                  >
                    {quote.name}
                  </p>
                  <p className="grow text-sm text-[#5A5A5A]">{quote.eta}</p>
                  <p
                    className={`w-[110px] shrink-0 text-right tracking-[-0.03em] ${
                      quote.best
                        ? "text-[26px] font-black text-rideflow-ink-hard"
                        : "text-[22px] font-bold text-[#8A8A8A]"
                    }`}
                  >
                    {quote.price}
                  </p>

                  {quote.best && (
                    <div className="absolute -top-7 left-[252px] hidden lg:block">
                      <SavingSticker />
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-28 border-t border-rideflow-hairline bg-white py-14 md:py-[88px]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="max-w-[640px] text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-rideflow-text">
            How will this work for you?
          </h2>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[18px] bg-body-gray px-[26px] pt-[26px] pb-[30px]"
              >
                <p className="text-[32px] font-bold leading-none tracking-[-0.03em] text-rideflow-blue">
                  {step.number}
                </p>
                <h3 className="mt-[18px] text-[21px] font-semibold tracking-[-0.01em] text-rideflow-text">
                  {step.title}
                </h3>
                <p className="mt-2 leading-[1.6] text-rideflow-text-light">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-rideflow"
        className="scroll-mt-28 bg-rideflow-ink-hard py-14 md:py-[88px]"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="inline-flex items-center rounded-full border border-[#3A3A3A] px-4 py-1">
            <span className="text-sm font-medium text-white">Why Rideflow</span>
          </div>

          <div className="mt-[26px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
            <p className="shrink-0 text-[clamp(6rem,14vw,12.5rem)] font-black leading-[0.82] tracking-[-0.02em] text-rideflow-bluetext">
              150+
            </p>
            <div className="w-full lg:w-[600px] shrink-0 lg:pt-3.5">
              <h2 className="text-3xl md:text-[34px] font-semibold leading-[1.2] tracking-tight text-white">
                vendors have already registered.
              </h2>
              <p className="mt-5 text-lg leading-[1.65] text-[#B8BBC4]">
                They want to see every price before they book, so they always pay
                the best rate — and they negotiate without switching apps or
                making a single phone call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="claim" className="scroll-mt-28 pt-16 pb-20 md:pt-24 md:pb-26">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-[88px]">
            <div className="w-full lg:w-[520px] shrink-0">
              <h2 className="text-4xl md:text-[56px] font-bold leading-[1.02] tracking-[-0.035em] text-rideflow-text">
                Claim your slot.
              </h2>
              <p className="mt-6 text-[19px] leading-[1.6] text-rideflow-text-light">
                Join the waitlist and get ₦1,000 off your first delivery.
              </p>
            </div>
            <div className="w-full lg:w-[600px] shrink-0">
              <MoveWaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
