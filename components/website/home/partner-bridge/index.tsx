import Badge from "@/components/custom/badge";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";

export const PartnerBridgeSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6 max-w-4xl">
        <Badge text="Logistics Hub" color="bg-body-gray" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="mt-4 font-medium text-3xl sm:text-4xl md:text-[2.6rem] leading-tight"
        >
          Looking for Logistics Services? Or Ready to Reach More Customers?
        </TextAnimate>
        <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
          The Rideflow Logistics Hub is coming. A discovery platform connecting
          customers who need logistics services with verified businesses and
          independent riders ready to serve them.
        </p>
        <p className="mt-4 text-base md:text-lg text-rideflow-text-light leading-7">
          Whether you&apos;re a customer looking for a reliable delivery option, a
          logistics business wanting more visibility, or an independent rider
          looking for steady work, the Hub is being built for you.
        </p>
        <Button
          asChild
          className="mt-8 bg-rideflow-blue px-6 py-2 text-white font-semibold hover:bg-blue-700"
        >
          <Link href="/logistics-hub">Learn About the Logistics Hub →</Link>
        </Button>
      </div>
    </section>
  );
};
