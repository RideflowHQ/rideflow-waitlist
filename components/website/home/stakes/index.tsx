import Badge from "@/components/custom/badge";
import { Check, X } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { homeStakes } from "@/lib/content/site";

export const StakesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-body-gray border-t border-dashed border-[#808080]">
      <div className="container mx-auto px-6">
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="font-medium text-3xl sm:text-4xl md:text-[2.6rem] leading-tight max-w-4xl"
        >
          The Cost of Running Fragmented Is Higher Than You Think.
        </TextAnimate>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white p-6 md:p-8">
            <Badge text="Without Rideflow" color="bg-body-gray" />
            <ul className="mt-6 flex flex-col gap-4">
              {homeStakes.without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-rideflow-text-light">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <X className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-white p-6 md:p-8">
            <Badge text="With Rideflow" color="bg-body-gray" />
            <ul className="mt-6 flex flex-col gap-4">
              {homeStakes.with.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-rideflow-text-light">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#E8ECFF] text-rideflow-blue">
                    <Check className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
