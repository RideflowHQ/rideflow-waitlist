"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { CALENDLY_URL } from "@/lib/content/site";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { HubInterestForm } from "@/components/website/logistics-hub/hub-form";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  { loading: () => <div className="py-20" /> },
);

type AudienceTab = "customers" | "businesses" | "riders";

const audienceTabs: { id: AudienceTab; label: string; hash: string }[] = [
  { id: "customers", label: "For Customers", hash: "customers" },
  { id: "businesses", label: "For Logistics Businesses", hash: "businesses" },
  { id: "riders", label: "For Independent Riders", hash: "riders" },
];

const audienceContent: Record<
  AudienceTab,
  {
    headline: string;
    body: string[];
    bullets: string[];
    cta: string;
    ctaHref: string;
    extra?: string[];
  }
> = {
  customers: {
    headline: "Find the Right Logistics Provider. Every Time.",
    body: [
      "Search for logistics companies or available riders near you, filtered by location, service type, availability, pricing, and coverage area.",
      "Once you've found the right provider, create a delivery request, receive real-time updates, and track your order from pickup to completion.",
      "Every business and rider on the platform goes through a structured verification and onboarding process, so you are finding logistics services you can trust.",
    ],
    bullets: [
      "Location-based search for logistics companies and riders",
      "Filter by service type, pricing, and coverage",
      "Delivery request creation",
      "Real-time order tracking",
      "Verified providers only",
    ],
    cta: "Download the App",
    ctaHref: "#join",
  },
  businesses: {
    headline: "Get Discovered. Receive Orders. Grow Your Customer Base.",
    body: [
      "The Rideflow Logistics Hub gives logistics businesses access to customers who are actively searching for services like yours, in your service area, right now.",
      "List your branches, showcase your services, and receive delivery requests directly through the platform. For businesses already using operational software, the Hub is built to complement your existing workflows, not replace them.",
    ],
    bullets: [
      "Visibility to customers searching in your service area",
      "Branch-level listing and service type filtering",
      "Delivery request management through the platform",
      "Seamless integration with Rideflow's operations dashboard if you're already a platform user",
      "Marketplace analytics to see how customers are finding you",
    ],
    extra: [
      "Independent and SME operators: subscription-based listing from ₦20,000/month",
      "National carriers and established networks: transaction-based partnership. You pay on performance, not a flat fee",
    ],
    cta: "Register Your Business →",
    ctaHref: "#join",
  },
  riders: {
    headline: "Find Steady Delivery Work. Manage It All in One Place.",
    body: [
      "Register on the Rideflow platform and access delivery opportunities directly from customers in your area. No middlemen, no informal networks, just a steady stream of verified delivery requests you can manage from your phone.",
    ],
    bullets: [
      "Delivery opportunities from customers near you",
      "Order and activity tracking from the rider app",
      "A structured, verified platform that protects your reputation",
      "Access to a growing customer base as the platform expands",
    ],
    cta: "Register as a Rider →",
    ctaHref: "#join",
  },
};

export function LogisticsHubPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<AudienceTab>("customers");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "customers" || tab === "businesses" || tab === "riders") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const scrollToAudience = (tab: AudienceTab) => {
    setActiveTab(tab);
    document.getElementById("audience-lanes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const content = audienceContent[activeTab];

  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-body-gray pt-32 pb-14 md:pt-38 md:pb-18">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Logistics Hub" color="border border-white bg-white shadow-sm" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          >
            Finding Reliable Logistics in Nigeria Just Got Easier.
          </TextAnimate>
          <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
            The Rideflow Logistics Hub is a growing ecosystem that connects
            customers who need logistics services with verified businesses and
            independent riders ready to deliver, all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
              onClick={() => scrollToAudience("customers")}
            >
              I Need a Delivery
            </Button>
            <Button
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
              onClick={() => scrollToAudience("businesses")}
            >
              Grow My Logistics Business
            </Button>
            <Button
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
              onClick={() => scrollToAudience("riders")}
            >
              Find Delivery Work
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <Badge text="The Visibility Gap" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-4xl"
          >
            Logistics in Nigeria Is Hard to Find, Hard to Trust, and Hard to
            Manage.
          </TextAnimate>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "For Customers",
                text: "Finding a reliable logistics provider still relies on referrals, social media searches, and personal networks. There's no easy way to compare options, verify providers, or track your delivery once it's on the way.",
              },
              {
                title: "For Logistics Businesses",
                text: "You have the capacity and the coverage but customers in your service area don't know you exist. Discovery is still word-of-mouth, and word-of-mouth doesn't scale.",
              },
              {
                title: "For Independent Riders",
                text: "Finding consistent delivery work means relying on personal contacts and informal networks. There's no structured platform connecting you to customers who need what you offer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <h3 className="text-lg font-medium text-rideflow-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="The Rideflow Logistics Hub" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            One Ecosystem. Every Side of Logistics. Connected.
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            The Rideflow Logistics Hub brings together everyone in the logistics
            chain — customers who need deliveries, businesses that manage them,
            and riders who complete them — on a single, verified platform.
          </p>
          <p className="mt-4 text-rideflow-text-light leading-7">
            This isn&apos;t just a marketplace. It&apos;s the infrastructure that
            makes logistics in Nigeria easier to find, easier to trust, and
            easier to manage for everyone involved.
          </p>
        </div>
      </section>

      <section id="audience-lanes" className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-8">
            {audienceTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={
                  activeTab === tab.id
                    ? "bg-rideflow-blue text-white hover:bg-blue-700"
                    : "border-rideflow-blue text-rideflow-blue"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="rounded-[24px] bg-body-gray p-6 md:p-10">
            <h3 className="text-2xl font-medium text-rideflow-text">
              {content.headline}
            </h3>
            {content.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-sm md:text-base leading-7 text-rideflow-text-light"
              >
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 flex flex-col gap-2">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="text-sm text-rideflow-text-light">
                  • {bullet}
                </li>
              ))}
            </ul>
            {content.extra?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-sm leading-6 text-rideflow-text-light"
              >
                {paragraph}
              </p>
            ))}
            <Button
              asChild
              className="mt-8 bg-rideflow-blue text-white hover:bg-blue-700"
            >
              <Link href={content.ctaHref}>{content.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Where We're Going" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Building the Trusted Infrastructure for Logistics Discovery Across
            Africa.
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            The Rideflow Logistics Hub isn&apos;t just solving a Nigerian
            problem. Our long-term goal is to become the platform that powers
            logistics discovery, connection, and growth across Africa, creating
            real value for customers, businesses, and riders at every level of
            the logistics chain.
          </p>
          <p className="mt-4 font-medium text-rideflow-text">
            We&apos;re starting here. We&apos;re building for everywhere.
          </p>
        </div>
      </section>

      <section id="trust" className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-3xl"
          >
            A Platform Built on Verification and Accountability.
          </TextAnimate>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
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
                text: "The Logistics Hub is powered by the same platform already trusted by logistics businesses across Nigeria to manage their operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <h3 className="text-lg font-medium text-rideflow-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 max-w-3xl">
          <Badge text="Join the Rideflow Logistics Hub" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Be Among the First on the Platform.
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            The Hub is currently in development. Businesses and riders that
            register now will be prioritised for early access, dedicated
            onboarding support, and preferred partnership terms.
          </p>
          <HubInterestForm />
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white">
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
            <Button asChild className="bg-rideflow-blue text-white hover:bg-blue-700">
              <Link href="/contact">Book a Conversation →</Link>
            </Button>
            <Button asChild variant="outline" className="border-rideflow-blue text-rideflow-blue">
              <Link href="/platform">See How Rideflow Works →</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
