"use client";

import Badge from "@/components/custom/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  PricingCard,
  type PricingPlan,
} from "@/components/website/pricing/pricing-card";
import dynamic from "next/dynamic";
import { BarChart3, Headset, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "motion/react";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    audience: "For small logistics teams",
    price: "\u20A620,000",
    cadence: "/ Month",
    description:
      "Get the essentials you need to manage deliveries, riders, and daily operations without the chaos of manual follow-up",
    features: [
      "Order management",
      "Real-time order tracking",
      "Route Visualization",
      "Rider or driver management",
      "Vendor or sender management",
      "Basic dashboard analytics",
      "Team management",
    ],
    cta: "Start free",
    ctaHref: "https://dashboard.rideflow.org/auth/register",
    ctaNewTab: true,
    highlighted: false,
  },
  {
    name: "Growth",
    audience: "For growing logistics operators",
    price: "\u20A650,000",
    cadence: "/ Month",
    description:
      "Unlock deeper visibility into your operation with fleet tracking, expense control, and reporting tools built for scale.",
    features: [
      "Everything in Starter",
      "Fleet management",
      "Inventory management",
      "Expense management",
      "Advanced analytics",
      "Visit reports",
      "Document management",
      "Document expiry alerts",
      "Up to 3 branches",
      "Role and branch-based access",
    ],
    cta: "Start Growing",
    ctaHref: "https://dashboard.rideflow.org/auth/register",
    ctaNewTab: true,
    highlighted: true,
    popularLabel: "Most Popular",
  },
  {
    name: "Enterprise",
    audience: "For large operators",
    price: "\u20A6100,000",
    cadence: "/ Month",
    description:
      "For established logistics business that need advanced verification, unlimited branch visibility, and stronger operational oversight.",
    features: [
      "Everything in Growth",
      "KYC verification via NIN or BVN",
      "CAC business verification",
      "Unlimited branches",
      "Advanced compliance monitoring",
      "Deep reporting across teams and branches",
      "Priority onboarding and support",
      "Custom implementation support",
    ],
    cta: "Talk to Sales",
    ctaHref: "https://calendly.com/rideflow",
    ctaNewTab: true,
    highlighted: false,
  },
];

const valueProps = [
  {
    title: "Centralized operations",
    description:
      "Run riders, vehicles, dispatch, teams, and workflows from one connected system.",
    icon: Workflow,
  },
  {
    title: "Actionable insights",
    description:
      "Track performance, costs, and operational efficiency with clear business dashboards.",
    icon: BarChart3,
  },
  {
    title: "Built-in accountability",
    description:
      "Use approval flows, role-based access, and compliance tooling to reduce operational risk.",
    icon: ShieldCheck,
  },
  {
    title: "Support that grows with you",
    description:
      "Move from startup operations to multi-branch scale with onboarding and support that fits your stage.",
    icon: Headset,
  },
];

const pricingGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
} as const;

export function PricingPage() {
  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-body-gray pt-32 pb-14 md:pt-38 md:pb-18">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <Badge text="Pricing" color="border border-white bg-white shadow-sm" />
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-medium tracking-tight"
              >
                Rideflow Pricing Plans
              </TextAnimate>
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-rideflow-text-light"
              >
                Simple pricing for every stage of your logistics business. From
                daily dispatch operations to branch-wide coordination and
                reporting, Rideflow helps logistics teams run with clarity,
                speed, and control.
              </TextAnimate>
            </div>

            <motion.div
              variants={pricingGridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid items-start gap-6 lg:grid-cols-[0.94fr_1.08fr_0.94fr] lg:gap-4"
            >
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="max-w-lg">
              <Badge text="Why businesses choose Rideflow" color="bg-body-gray" />
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
              >
                Built for operational clarity at every growth stage
              </TextAnimate>
              <p className="mt-4 text-base leading-7 text-rideflow-text-light">
                Whether you are just structuring your delivery workflow or
                scaling across multiple branches, Rideflow gives your team the
                visibility and control needed to move faster with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valueProps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[22px] bg-body-gray p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rideflow-blue shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-7 text-xl font-medium text-rideflow-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
