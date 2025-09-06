import WaitlistForm from "./Form";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import DashboardLive from "./DashboardLive";
import { TextAnimate } from "./ui/text-animate";
const Hero = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center pb-0 pt-20 gap-6">
      <div className="flex flex-col items-center justify-center gap-2 max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <TextAnimate
            delay={0.5}
            animation="blurInUp"
            as={"text"}
            by="character"
            className="text-6xl md:text-7xl font-bold text-foreground max-w-xl text-center"
            startOnView
            once
          >
            Streamline
          </TextAnimate>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2.5,
              delay: 1,
              ease: "easeOut",
              times: [0, 0.3, 0.5, 0.7, 1],
            }}
          >
            <Image
              className="size-20 hidden md:block "
              src={"/hero-arrow.svg"}
              width={30}
              height={30}
              alt="hero-arrow"
            />
          </motion.div>
          <TextAnimate
            delay={0.7}
            animation="blurInUp"
            as={"text"}
            by="character"
            className="text-6xl md:text-7xl font-bold text-foreground max-w-xl text-center"
            startOnView
            once
          >
            Your
          </TextAnimate>
        </div>
        <TextAnimate
          delay={0.9}
          animation="blurInUp"
          as={"text"}
          by="character"
          className="text-6xl md:text-7xl font-bold text-foreground max-w-xl text-center"
          startOnView
          once
        >
          Logistics
        </TextAnimate>
        <TextAnimate
          delay={1.2}
          className="text-lg md:text-xl text-rideflow-text text-center max-w-3xl mt-4"
          animation="blurInUp"
          by="word"
          startOnView
          once
        >
          Take control of your entire transportation business from a single
          dashboard. Easily manage your fleet, staff, and deliveries to
          streamline your operations.
        </TextAnimate>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full px-3 max-w-sm md:max-w-2xl mt-8">
        <WaitlistForm onSuccessChange={setIsSuccess} />
      </div>
      <div className="h-[35rem] w-[90%] overflow-hidden md:w-[50rem] lg:w-[75rem]">
        <DashboardLive />
      </div>
    </section>
  );
};
export default Hero;
