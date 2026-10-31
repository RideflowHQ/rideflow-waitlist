import Badge from "@/components/custom/badge";
import Image from "next/image";
import { ClaimSlotHero } from "../claim-slot";
import { ProductStage } from "../product/stage";

export const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <Image
        src="/home/home-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-0 left-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 h-full pb-16 pt-30 lg:py-24">
        <div className="w-full lg:w-[47%] flex flex-col items-start gap-4 md:gap-6 h-full justify-center">
          <Badge text="Built for Nigerian Logistics" color="bg-white" />
          <div>
            <h1 className="text-[clamp(3.25rem,7.2vw,6.5rem)] leading-[0.86] text-rideflow-ink-hard">
              <span className="block font-black tracking-[-0.05em]">
                Streamline
              </span>
              <span className="block font-light tracking-[-0.045em]">
                Your Logistics Operations.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-rideflow-text mt-3 md:mt-4">
              Rideflow is the operations platform and marketplace for Nigerian
              logistics. Run your team, fleet, dispatch, and compliance from
              one dashboard, while customers compare companies and book from
              the app.
            </p>
          </div>
          <ClaimSlotHero />
        </div>
        <div className="w-full lg:w-[53%]">
          <ProductStage />
        </div>
      </div>
    </section>
  );
};
