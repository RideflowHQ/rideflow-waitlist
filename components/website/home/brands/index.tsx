import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { id: 1, src: "/about/imprintify.svg", alt: "Imprintify" },
  { id: 2, src: "/about/berlin.svg", alt: "Berlin" },
  { id: 3, src: "/about/oslo.svg", alt: "Oslo" },
  { id: 4, src: "/about/then.svg", alt: "Then" },
  { id: 5, src: "/about/swiss.svg", alt: "Swiss" },
  { id: 6, src: "/about/kobe.svg", alt: "Kobe" },
  { id: 7, src: "/about/imprintify.svg", alt: "Imprintify" },
  { id: 8, src: "/about/berlin.svg", alt: "Berlin" },
  { id: 9, src: "/about/oslo.svg", alt: "Oslo" },
  { id: 10, src: "/about/then.svg", alt: "Then" },
  { id: 11, src: "/about/swiss.svg", alt: "Swiss" },
  { id: 12, src: "/about/kobe.svg", alt: "Kobe" },
];

export const Brands = () => {
  return (
    <section className="py-10 bg-white">
      <div className="relative h-full">
        <div className="absolute top-0 bottom-0 left-[20%] right-0 z-0 pt-3 pl-10">
          <Marquee speed={50} gradient={true} pauseOnHover>
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="mx-8 flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="h-full flex items-center">
            <div className="w-[20%]">
              <p className="font-medium text-[22px]">
                10+ happy clients already on board
              </p>
            </div>

            <div className="w-[80%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
