import Badge from "@/components/custom/badge";
import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";
import { homeFeaturePreview } from "@/lib/content/site";

export const WhyChooseUsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 min-h-[90vh] bg-white border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6 md:px-6 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="w-full lg:w-[40%] flex flex-col gap-3 md:gap-4 items-start">
          <Badge text="The Platform" color="bg-body-gray" />
          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="font-medium text-4xl sm:text-4xl md:text-4xl lg:text-[2.6rem] leading-tight"
          >
            Everything Your Logistics Business Needs. Nothing It Doesn&apos;t.
          </TextAnimate>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {homeFeaturePreview.map((feature) => (
            <div
              key={feature.id}
              className="bg-body-gray rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-48 sm:min-h-56 md:min-h-[15.2rem]"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={36}
                height={36}
                className="w-9 h-9 md:w-11 md:h-11"
              />
              <div>
                <p className="font-medium text-lg sm:text-xl md:text-[1.35rem]">
                  {feature.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-rideflow-text-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8">
        <Button
          asChild
          className="bg-rideflow-blue px-6 py-2 text-white font-semibold hover:bg-blue-700"
        >
          <Link href="/platform">Explore the Full Platform →</Link>
        </Button>
      </div>
    </section>
  );
};
