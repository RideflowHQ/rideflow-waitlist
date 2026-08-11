import { Metadata } from "next";
import Badge from "@/components/custom/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Riders - Run Your Own Delivery Business",
  description:
    "Find steady delivery work on the Rideflow Hub. Access verified delivery requests from customers near you and manage everything from your phone.",
};

const benefits = [
  {
    title: "Work that finds you",
    text: "Delivery opportunities from customers in your area, without relying on personal contacts or informal networks.",
  },
  {
    title: "Everything in one place",
    text: "Track orders, activity, and earnings from the rider app instead of scattered messages and phone calls.",
  },
  {
    title: "A reputation that travels",
    text: "A structured, verified platform means the work you complete builds a record customers can trust.",
  },
];

export default function Page() {
  return (
    <main className="w-full flex flex-col relative">
      <section className="bg-body-gray pt-32 pb-14 md:pt-38 md:pb-18">
        <div className="container mx-auto px-6 max-w-4xl">
          <Badge
            text="For Riders"
            color="border border-white bg-white shadow-sm"
          />
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Run Your Own Delivery Business.
          </h1>
          <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
            Register on the Rideflow Hub and access delivery opportunities
            directly from customers in your area. No middlemen, no informal
            networks, just a steady stream of verified delivery requests you can
            manage from your phone.
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="bg-rideflow-blue text-white hover:bg-blue-700"
            >
              <Link href="/hub#join">Register as a Rider →</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-white border-y border-dashed border-[#808080]">
        <div className="container mx-auto px-6">
          <Badge text="Why Riders Join" color="bg-body-gray" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight max-w-3xl">
            Steady Work, Without the Guesswork.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[24px] bg-body-gray p-6 md:p-8"
              >
                <h3 className="text-lg font-medium text-rideflow-text">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-rideflow-text-light">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-body-gray">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-rideflow-text-light leading-7">
            Riders who register now are prioritised for early access and
            onboarding support as the Hub opens up city by city.
          </p>
          <Button
            asChild
            className="mt-8 bg-rideflow-blue text-white hover:bg-blue-700"
          >
            <Link href="/hub#join">Register as a Rider →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
