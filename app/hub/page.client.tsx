"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import dynamic from "next/dynamic";
import { HubInterestForm } from "@/components/website/hub/hub-form";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  { loading: () => <div className="py-20" /> },
);

const benefits = [
  {
    title: "Show up when customers search",
    text: "Appear upfront when senders in Lagos and across Nigeria look to send a package or book a dispatch rider.",
  },
  {
    title: "Orders straight into your workflow",
    text: "Courier companies receive requests in the Rideflow dashboard; independent riders accept jobs in the Riders app.",
  },
  {
    title: "Turn delivery quality into repeat demand",
    text: "Verified badges, transparent pricing, and completed-trip ratings help customers choose you with confidence.",
  },
];

const audienceLanes = [
  {
    badge: "For Courier & Logistics Companies",
    title: "Fill Fleet Capacity Without Spending More on Ads",
    points: [
      "Branch-level listings filtered by Lagos zones, interstate routes, and service type",
      "Incoming quotes and delivery requests routed straight into your dispatch desk",
      "CAC-verified badge that separates your company from unverified operators",
      "Marketplace analytics showing profile views, quote requests, and won deliveries",
    ],
  },
  {
    badge: "For Independent Dispatch Riders",
    title: "Get Steady Delivery Jobs Beyond Word-of-Mouth",
    points: [
      "Direct visibility to nearby individuals and vendors ready to send a package",
      "Accept, navigate, and complete trips from your phone with the Rideflow Riders app",
      "Build a verified rating history that wins higher-value repeat customers",
      "Clear earnings and trip records in one place — no chasing middlemen on WhatsApp",
    ],
  },
];

const listingOptions = [
  "Independent riders and SME courier operators: subscription-based listing from ₦20,000/month",
  "National carriers and multi-branch networks: performance-based partnership — pay per completed order, not a flat fee",
];

const trust = [
  {
    title: "Verified Onboarding",
    text: "Every courier business and independent dispatch rider on Rideflow Hubs completes identity and document checks so customers book with confidence.",
  },
  {
    title: "Live Order Visibility",
    text: "From quote comparison to proof of delivery, senders and operators see real-time status updates without endless phone calls.",
  },
  {
    title: "Connected Operations",
    text: "Rideflow Hubs runs on the same infrastructure trusted by Nigerian logistics teams to manage riders, fleets, compliance, and payouts.",
  },
];

export function HubPage() {
  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-white pt-32 pb-14 md:pt-38 md:pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Rideflow Hubs · Partner Network" color="bg-body-gray" />
          <TextAnimate
            as="h1"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight leading-[1.15]"
          >
            Get More Delivery Customers on Rideflow Hubs.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            Rideflow Hubs is live on iOS and Android. List your courier company
            or register as an independent dispatch rider so customers looking to
            send a package in Lagos and across Nigeria find you first, compare
            your rates, and book you directly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-rideflow-blue px-6 text-white font-semibold hover:bg-blue-700"
            >
              <Link href="#join">Get Listed on Rideflow Hubs →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
            >
              <Link href="/move">See the Customer Experience →</Link>
            </Button>
          </div>
          {/* Waitlist paused — Rideflow Hubs is live:
          <Button asChild className="mt-10 bg-rideflow-blue px-6 text-white font-semibold hover:bg-blue-700">
            <Link href="#join">Join the Hub Waitlist →</Link>
          </Button>
          */}

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg bg-body-gray p-6">
                <h2 className="text-[17px] font-semibold text-rideflow-text">
                  {benefit.title}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.6] text-rideflow-text-light">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="The Visibility Advantage" color="bg-white" />
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            You Have the Bikes and Capacity. Put Them Where Senders Are Booking.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            Every day, e-commerce vendors, offices, and individuals search for a
            reliable dispatch rider or courier service in Lagos and interstate
            corridors. Relying on referrals and WhatsApp reposts leaves bikes
            idle between runs.
          </p>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            Rideflow Hubs puts your coverage areas, turnaround times, and pricing
            directly in front of high-intent customers at the exact moment they
            are ready to send a package.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="How You Grow" color="bg-body-gray" />
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Built for Courier Companies and Independent Riders Alike.
          </TextAnimate>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {audienceLanes.map((lane) => (
              <div
                key={lane.badge}
                className="rounded-[20px] border border-rideflow-hairline bg-body-gray p-6 md:p-7"
              >
                <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-rideflow-blue">
                  {lane.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em] text-rideflow-text">
                  {lane.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {lane.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[15px] leading-6 text-rideflow-text-light"
                    >
                      <span className="text-rideflow-blue">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[20px] bg-body-gray p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.015em] text-rideflow-text">
              Partnership &amp; listing options
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {listingOptions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7 text-rideflow-text-light"
                >
                  <span className="text-rideflow-blue">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="trust"
        className="py-14 md:py-18 bg-body-gray border-y border-dashed border-[#808080] scroll-mt-28"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Why Customers Choose Rideflow Hubs Partners.
          </TextAnimate>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trust.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6">
                <h3 className="text-[17px] font-semibold text-rideflow-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-rideflow-text-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-14 md:py-18 bg-white scroll-mt-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Get Listed" color="bg-body-gray" />
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Start Receiving Orders From Rideflow Hubs.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            Tell us about your courier business or dispatch bike. Our onboarding
            team verifies your details, sets up your coverage areas, and gets
            your profile live in front of customers.
          </p>
          <HubInterestForm />
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Ready to Grow Your Delivery Volume?
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            Want to walk through how Rideflow Hubs connects marketplace demand
            to your operations dashboard? Talk to our team in Lagos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-rideflow-blue text-white hover:bg-blue-700"
            >
              <Link href="/contact">Book a Conversation →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
            >
              <Link href="/platform">See How Rideflow Works →</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
