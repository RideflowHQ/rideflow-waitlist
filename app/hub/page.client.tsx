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
    title: "Visible where customers look",
    text: "Branch-level listings, filtered by service type and coverage.",
  },
  {
    title: "Orders straight into your ops",
    text: "Requests land in the dashboard you already run dispatch from.",
  },
  {
    title: "See how customers find you",
    text: "Marketplace analytics on searches, views, and won requests.",
  },
];

const whatYouGet = [
  "Visibility to customers searching in your service area",
  "Branch-level listing and service type filtering",
  "Delivery request management through the platform",
  "Seamless integration with Rideflow's operations dashboard if you're already a platform user",
  "Marketplace analytics to see how customers are finding you",
];

const listingOptions = [
  "Independent and SME operators: subscription-based listing from ₦20,000/month",
  "National carriers and established networks: transaction-based partnership. You pay on performance, not a flat fee",
];

const trust = [
  {
    title: "Structured Onboarding",
    text: "Every business and rider on the Hub goes through a verified onboarding process so customers know exactly who they're working with.",
  },
  {
    title: "Real-Time Visibility",
    text: "From the moment an order is created to the moment it's delivered, every party has full visibility into what's happening.",
  },
  {
    title: "Built on Proven Infrastructure",
    text: "The Rideflow Hub is powered by the same platform already trusted by logistics businesses across Nigeria to manage their operations.",
  },
];

export function HubPage() {
  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-white pt-32 pb-14 md:pt-38 md:pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Rideflow Hub" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight leading-[1.15]"
          >
            Get Discovered on the Rideflow Hub.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            Customers are searching for logistics services in your service area
            right now. List your branches, showcase your services, and receive
            delivery requests directly through the platform.
          </p>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            If you already run your operations on Rideflow, the Hub complements
            your existing workflows rather than replacing them.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg bg-body-gray p-6">
                <h3 className="text-[17px] font-semibold text-rideflow-text">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-rideflow-text-light">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="mt-10 bg-rideflow-blue px-6 text-white font-semibold hover:bg-blue-700"
          >
            <Link href="#join">Join the Hub Waitlist →</Link>
          </Button>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="The Visibility Gap" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            You Have the Capacity. Customers Don&apos;t Know You Exist.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            You have the capacity and the coverage but customers in your service
            area don&apos;t know you exist. Discovery is still word-of-mouth, and
            word-of-mouth doesn&apos;t scale.
          </p>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            The Rideflow Hub gives logistics businesses access to customers who
            are actively searching for services like yours, in your service area,
            right now.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="What You Get" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Get Discovered. Receive Orders. Grow Your Customer Base.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            List your branches, showcase your services, and receive delivery
            requests directly through the platform. For businesses already using
            operational software, the Hub is built to complement your existing
            workflows, not replace them.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {whatYouGet.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-rideflow-text-light">
                <span className="text-rideflow-blue">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[20px] bg-body-gray p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.015em] text-rideflow-text">
              Listing options
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
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            A Platform Built on Verification and Accountability.
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
          <Badge text="Join the Hub" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Be Among the First on the Platform.
          </TextAnimate>
          <p className="mt-4 text-lg leading-[1.65] text-rideflow-text-light">
            We&apos;re onboarding in batches. Businesses and riders that register
            now will be prioritised for early access, dedicated onboarding
            support, and preferred partnership terms.
          </p>
          <HubInterestForm />
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Ready to be part of what&apos;s coming?
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            Whether you want to learn more, join the Hub, or see how the platform
            works, we&apos;d love to talk.
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
