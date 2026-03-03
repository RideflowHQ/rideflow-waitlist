"use client";
import Image from "next/image";

export const DetailHero = () => {
  return (
    <section className="py-12 md:py-18 md:min-h-screen relative">
      <Image
        src="/service/services-curve.svg"
        alt="curve"
        height={210}
        width={210}
        className="absolute top-0 right-0 -z-5 hidden md:block"
      />
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground pt-28">
          Asset Investment [Hire Purchase]
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-rideflow-text mt-4 w-full sm:w-[85%] md:w-[75%] lg:w-[70%] mx-auto">
          A unique opportunity for individuals and organizations to invest in
          mobility assets and earn sustainable, reliable returns.
        </p>
        <div className="px-0 sm:px-8 md:px-12 lg:px-20 mt-10 md:mt-15">
          <div className="aspect-video relative">
            <Image
              src="/service/service-handshake.webp"
              alt="Service Handshake"
              fill
              className="mx-auto rounded-[25px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
