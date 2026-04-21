import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dy7brekso/image/upload/v1773750022/rideflow/general/utttl3yevpdw2xl8dzo0.png",
    alt: "Flash Delivery",
  },
  { id: 2, src: "/home/t4cLogistics.png", alt: "T4C Logistics" },
  { id: 3, src: "/home/majestyLogistics.png", alt: "Majesty Logistics" },
  { id: 4, src: "/home/DesLogistics.png", alt: "Des Logistics" },
  { id: 5, src: "/about/kobe.svg", alt: "Kobe" },
  { id: 6, src: "/about/imprintify.svg", alt: "Imprintify" },
  { id: 7, src: "/about/berlin.svg", alt: "Berlin" },
  { id: 8, src: "/about/oslo.svg", alt: "Oslo" },
  { id: 9, src: "/about/then.svg", alt: "Then" },
  { id: 10, src: "/about/swiss.svg", alt: "Swiss" },
  { id: 11, src: "/about/kobe.svg", alt: "Kobe" },
];

export const Brands = () => {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
        <div className="container mx-auto px-4 lg:w-[20%]">
          <p className="font-medium text-lg sm:text-xl md:text-[22px] text-left lg:text-left">
            10+ happy clients already on board
          </p>
        </div>

        <div className="w-full lg:w-[80%] overflow-hidden">
          <Marquee speed={50} gradient={true} pauseOnHover>
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={100}
                  height={50}
                  className="object-contain w-20 sm:w-25 md:w-30 h-auto grayscale"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
