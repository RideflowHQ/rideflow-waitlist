"use client"
import Image from "next/image";

export const DetailHero = () => {
  return (
    <section className="py-18 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-semibold text-foreground pt-28">
          Asset Investment [Hire Purchase]
        </h1>
        <p className="text-lg md:text-xl text-rideflow-text mt-4 w-[70%] mx-auto">
          A unique opportunity for individuals and organizations to invest in
          mobility assets and earn sustainable, reliable returns.
        </p>
        <div className="px-20 mt-15">
          <div className="aspect-[16/9] relative">
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
