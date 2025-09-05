import WaitlistForm from "./Form";
import Image from "next/image";
import { useState } from "react";
import DashboardLive from "./DashboardLive";
const Hero = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center justify-center gap-2 max-w-4xl">
        <div className="flex">
          <h2 className="text-7xl font-bold text-foreground max-w-xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#18191A] to-[#717273]">
              Streamline
            </span>
          </h2>
          <Image
            className="size-20"
            src={"/hero-arrow.svg"}
            width={30}
            height={30}
            alt="hero-arrow"
          />
          <h2 className="text-7xl font-bold text-rideflow-text max-w-xl text-center">
            Your.
          </h2>
        </div>
        <h2 className="text-7xl font-bold text-rideflow-text max-w-xl text-center">
          Logistics.
        </h2>
        <p className="text-xl text-rideflow-text text-center max-w-3xl mt-4">
          Take control of your entire transportation business from a single
          dashboard. Easily manage your fleet, staff, and deliveries to
          streamline your operations.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-2xl mt-8">
        <WaitlistForm onSuccessChange={setIsSuccess} />
      </div>
      <DashboardLive />
    </section>
  );
};
export default Hero;
