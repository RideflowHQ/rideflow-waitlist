import { Metadata } from "next";
import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rider Sourcing - Rideflow",
  description:
    "Vetted riders placed directly into your operation. Rideflow recruits, verifies, and onboards riders so you can scale delivery capacity without building a hiring pipeline.",
};

const steps = [
  {
    title: "Tell us what you need",
    text: "Headcount, locations, vehicle type, and when you need them starting.",
  },
  {
    title: "We source and vet",
    text: "Background checks, document verification, and licence validation before anyone reaches you.",
  },
  {
    title: "Riders join your ops",
    text: "Placed riders appear in your Rideflow dashboard and can be dispatched from day one.",
  },
];

const included = [
  "Identity and document verification",
  "Licence and vehicle checks",
  "Onboarding into your Rideflow account",
  "Replacement cover if a placement does not work out",
];

export default function Page() {
  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-body-gray pt-32 pb-14 md:pt-38 md:pb-18">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge
            text="Rider Sourcing"
            color="border border-white bg-white shadow-sm"
          />
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Vetted Riders, Placed Directly Into Your Operation.
          </h1>
          <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
            Hiring riders is slow, informal, and hard to verify. Rideflow
            recruits, vets, and onboards riders on your behalf, so you can add
            delivery capacity without building a hiring pipeline from scratch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="bg-rideflow-blue text-white hover:bg-blue-700"
            >
              <Link href="/contact">Request Riders →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rideflow-blue text-rideflow-blue"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <Badge text="How It Works" color="bg-body-gray" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-3xl">
            Capacity Without the Hiring Overhead.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <p className="text-sm font-semibold text-rideflow-blue">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-medium text-rideflow-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge text="What's Included" color="bg-white" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight">
            Every Rider Is Checked Before They Reach You.
          </h2>
          <ul className="mt-8 flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="text-rideflow-text-light leading-7">
                • {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-rideflow-text-light leading-7">
            Rider sourcing is available as an add-on to any Rideflow plan. Talk
            to us about volume and we will scope it to your operation.
          </p>
          <Button
            asChild
            className="mt-8 bg-rideflow-blue text-white hover:bg-blue-700"
          >
            <Link href="/contact">Talk to Us About Riders →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
