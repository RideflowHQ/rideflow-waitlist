import Badge from "@/components/custom/badge";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Visible where customers look",
    text: "Branch-level listings, filtered by service type and coverage area.",
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

export const PartnerBridgeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6 max-w-4xl">
        <Badge text="Rideflow Hub" color="bg-body-gray" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="mt-4 font-medium text-3xl sm:text-4xl md:text-[2.6rem] leading-tight"
        >
          Get Discovered on the Rideflow Hub.
        </TextAnimate>
        <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
          Customers are searching for logistics services in your service area
          right now. List your branches, showcase your services, and receive
          delivery requests directly through the platform.
        </p>
        <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
          If you already run your operations on Rideflow, the Hub complements
          your existing workflows rather than replacing them.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl bg-body-gray p-6">
              <h3 className="text-base font-semibold text-rideflow-text">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-rideflow-text-light">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="mt-10 bg-rideflow-blue px-6 py-2 text-white font-semibold hover:bg-blue-700"
        >
          <Link href="/hub#join">Join the Hub Waitlist →</Link>
        </Button>
      </div>
    </section>
  );
};
