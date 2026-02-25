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
      <Marquee speed={50} gradient={false} pauseOnHover>
        {brands.map((brand) => (
          <div key={brand.id} className="mx-8 flex items-center justify-center">
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
    </section>
  );
};
