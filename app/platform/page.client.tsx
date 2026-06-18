"use client";

import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  addOns,
  CALENDLY_URL,
} from "@/lib/content/site";
import {
  getFeaturesByCategory,
  platformCategories,
  stakeholderViews,
  technicalCredibility,
} from "@/lib/platform-data";
import Link from "next/link";
import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/website/shared/booking"),
  { loading: () => <div className="py-20" /> },
);

export function PlatformPage() {
  const defaultOpenFeatureSlug = getFeaturesByCategory(
    platformCategories[0].id,
  )[0]?.slug;

  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-body-gray pt-32 pb-14 md:pt-38 md:pb-18">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="Platform" color="border border-white bg-white shadow-sm" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          >
            Every Moving Part of Your Logistics Business. One Platform.
          </TextAnimate>
          <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
            From your first hire to your hundredth delivery, Rideflow connects
            your team, fleet, dispatch, compliance, and finances in one
            real-time workspace.
          </p>
          <Button
            className="mt-8 bg-rideflow-blue px-6 py-2 text-white font-semibold hover:bg-blue-700"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Book a Demo →
          </Button>
        </div>
      </section>

      <section id="how-it-works" className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <Badge text="Built for Every Role" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-3xl"
          >
            One Backend. The Right View for Everyone.
          </TextAnimate>
          <p className="mt-4 max-w-3xl text-rideflow-text-light leading-7">
            Most platforms give everyone the same dashboard. Rideflow gives each
            stakeholder exactly what they need, connected in real time through
            one shared backend.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stakeholderViews.map((view) => (
              <div
                key={view.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <h3 className="text-xl font-medium text-rideflow-text">
                  {view.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {view.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6">
          <Badge text="The Full Platform" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-3xl"
          >
            Everything You Need to Run a Logistics Business.
          </TextAnimate>

          <div className="mt-10 flex flex-col gap-10">
            {platformCategories.map((category) => (
              <div key={category.id}>
                <h3 className="text-xl font-semibold text-rideflow-text mb-4">
                  {category.label}
                </h3>
                <Accordion
                  type="multiple"
                  defaultValue={
                    defaultOpenFeatureSlug &&
                    category.id === platformCategories[0].id
                      ? [defaultOpenFeatureSlug]
                      : undefined
                  }
                  className="flex flex-col gap-3"
                >
                  {getFeaturesByCategory(category.id).map((feature) => (
                    <AccordionItem
                      key={feature.slug}
                      value={feature.slug}
                      className="rounded-[20px] border border-[#E5E9F5] bg-white px-5"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <div>
                          <p className="text-lg font-medium text-rideflow-text">
                            {feature.title}
                          </p>
                          <p className="mt-1 text-sm text-rideflow-text-light">
                            {feature.outcome}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <p className="text-sm leading-6 text-rideflow-text-light">
                          {feature.description}
                        </p>
                        <ul className="mt-4 flex flex-col gap-2">
                          {feature.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="text-sm text-rideflow-text-light"
                            >
                              • {capability}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <Badge text="How It's Built" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Built for the Nigerian Reality.
          </TextAnimate>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {technicalCredibility.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <h3 className="text-lg font-medium text-rideflow-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6">
          <Badge text="Extend the Platform" color="bg-white" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Add What You Need. Pay for What You Use.
          </TextAnimate>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="rounded-[24px] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
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

      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight"
          >
            Ready to See the Right Plan for Your Business?
          </TextAnimate>
          <p className="mt-4 text-rideflow-text-light leading-7">
            Whether you&apos;re structuring operations for the first time or
            managing multiple branches at scale, there&apos;s a Rideflow plan
            built for where you are right now.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-rideflow-blue text-white hover:bg-blue-700">
              <Link href="/pricing">View Pricing →</Link>
            </Button>
            <Button
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Book a Demo →
            </Button>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
