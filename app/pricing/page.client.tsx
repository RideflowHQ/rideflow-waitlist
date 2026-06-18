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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { addOns, CALENDLY_URL, pricingFaqs, REGISTER_URL } from "@/lib/content/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  {
    loading: () => <div className="py-20" />,
  },
);

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    audience: "Small logistics teams getting structured for the first time.",
    price: "\u20A620,000",
    cadence: "/ Month",
    description:
      "Get the essentials you need to manage deliveries, riders, and daily operations without the chaos of manual follow-up.",
    features: [
      "Order management",
      "Real-time order tracking",
      "Route visualization",
      "Rider or driver management",
      "Vendor and sender management",
      "Basic dashboard analytics",
      "Team management",
    ],
    cta: "Get Started →",
    ctaHref: REGISTER_URL,
    ctaNewTab: true,
    highlighted: false,
  },
  {
    name: "Growth",
    audience: "Expanding operators who need deeper visibility and multi-branch control.",
    price: "\u20A650,000",
    cadence: "/ Month",
    description:
      "Unlock deeper visibility into your operation with fleet tracking, expense control, and reporting tools built for scale.",
    features: [
      "Everything in Starter, plus:",
      "Fleet management",
      "Inventory management",
      "Expense management",
      "Advanced analytics",
      "Visit reports",
      "Document management and expiry alerts",
      "Up to 3 branches",
      "Role and branch-based access",
    ],
    cta: "Start Growing →",
    ctaHref: REGISTER_URL,
    ctaNewTab: true,
    highlighted: true,
    popularLabel: "Most Popular",
  },
  {
    name: "Enterprise",
    audience:
      "Established logistics businesses that need compliance, verification, and unlimited scale.",
    price: "\u20A6100,000",
    cadence: "/ Month",
    description:
      "For established logistics businesses that need advanced verification, unlimited branch visibility, and stronger operational oversight.",
    features: [
      "Everything in Growth, plus:",
      "KYC verification via NIN or BVN",
      "CAC business verification",
      "Unlimited branches",
      "Advanced compliance monitoring",
      "Deep reporting across teams and branches",
      "Priority onboarding and support",
      "Custom implementation support",
    ],
    cta: "Talk to Sales →",
    ctaHref: CALENDLY_URL,
    ctaNewTab: true,
    highlighted: false,
  },
];

const valueProps = [
  {
    title: "Centralized operations",
    description:
      "Riders, vehicles, dispatch, teams, and workflows in one connected system.",
    icon: Workflow,
  },
  {
    title: "Actionable insights",
    description:
      "Track performance, costs, and efficiency with dashboards built for logistics decisions.",
    icon: BarChart3,
  },
  {
    title: "Built-in accountability",
    description:
      "Approval flows, role-based access, and compliance tooling that reduce operational risk.",
    icon: ShieldCheck,
  },
  {
    title: "Support that grows with you",
    description:
      "From your first onboarding to multi-branch scale, our team is with you at every stage.",
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
              <Badge
                text="Early Access Pricing"
                color="border border-white bg-white shadow-sm"
              />
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-medium tracking-tight"
              >
                Simple Pricing for Every Stage of Your Logistics Business.
              </TextAnimate>
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg text-rideflow-text-light"
              >
                Start with what you need today. Scale when you&apos;re ready. No
                hidden fees, no complicated contracts. Rates locked in for
                current subscribers as the platform grows.
              </TextAnimate>
              <p className="mt-4 max-w-3xl text-sm text-rideflow-text-light">
                Whether you&apos;re managing a small delivery team or running
                multi-branch operations, there&apos;s a plan built for where you
                are right now.
              </p>
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

      <section className="bg-white py-14 md:py-18 border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Need More? Extend Your Plan.
          </TextAnimate>
          <p className="mt-3 text-rideflow-text-light">
            Available across all tiers. Add only what your operation needs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="rounded-[22px] bg-body-gray p-6"
              >
                <h3 className="text-lg font-medium text-rideflow-text">
                  {addon.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8 border-rideflow-blue text-rideflow-blue">
            <Link href="/contact">Talk to us about add-ons →</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="max-w-lg">
              <Badge text="Why Rideflow" color="bg-body-gray" />
              <TextAnimate
                animation="blurIn"
                by="word"
                startOnView
                once
                className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
              >
                Built for Operational Clarity at Every Stage.
              </TextAnimate>
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

      <section className="bg-body-gray py-14 md:py-18">
        <div className="container mx-auto px-6 max-w-4xl">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Questions About Pricing?
          </TextAnimate>
          <Accordion type="single" collapsible className="mt-8 flex flex-col gap-3">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-[20px] bg-white px-5 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-rideflow-text-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Not Sure Which Plan Is Right for You?
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            Let&apos;s figure it out together. Book a demo and we&apos;ll
            recommend the right plan based on your team size, branch setup, and
            operational needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-rideflow-blue text-white hover:bg-blue-700"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Book a Demo →
            </Button>
            <Button asChild variant="outline" className="border-rideflow-blue text-rideflow-blue">
              <Link href="/platform">View the Full Platform →</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
