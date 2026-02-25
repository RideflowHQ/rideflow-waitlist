import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const columnCards = [
  { id: 1, type: "image", src: "/home/man-bike.webp", alt: "Man on bike" },
  { id: 2, type: "image", src: "/home/office-woman.webp", alt: "Office woman" },
  {
    id: 3,
    type: "image",
    src: "/home/woman-book.webp",
    alt: "Woman with book",
  },
  {
    id: 4,
    type: "image",
    src: "/home/overall-woman.webp",
    alt: "Overall woman",
  },
  { id: 5, type: "image", src: "/home/man-carry.webp", alt: "Man carrying" },
  {
    id: 6,
    type: "image",
    src: "/home/man-laptop.webp",
    alt: "Man with laptop",
  },
  { id: 7, type: "image", src: "/home/office-man.webp", alt: "Office man" },
  { id: 8, type: "image", src: "/home/woman-call.webp", alt: "Woman on call" },
];

const MediaCarousels = () => {
  return (
    <div className="relative w-full overflow-hidden mt-16">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {columnCards.map((card) => (
          <div
            key={card.id}
            className="w-75 h-100 rounded-2xl overflow-hidden mr-3 relative"
          >
            {card.type === "image" ? (
              <Image
                src={card.src}
                alt={card.alt || ""}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={card.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MediaCarousels;
