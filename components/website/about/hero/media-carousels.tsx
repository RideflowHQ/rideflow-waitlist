import React from "react";
import Marquee from "react-fast-marquee";

const columnCards = [
  { id: 1, color: "bg-violet-200" },
  { id: 2, color: "bg-amber-200" },
  { id: 3, color: "bg-rose-200" },
  { id: 4, color: "bg-cyan-200" },
  { id: 5, color: "bg-lime-200" },
];

const MediaCarousels = () => {
  return (
    <div className="relative w-full overflow-hidden mt-16">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {columnCards.map((card) => (
          <div
            key={card.id}
            className={`w-[300px] h-[400px] rounded-2xl ${card.color} flex items-center justify-center mr-3`}
          >
            hiiiiii
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MediaCarousels;
