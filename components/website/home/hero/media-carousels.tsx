import Image from "next/image";
import Marquee from "react-fast-marquee";

const leftColumnCards = [
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
];

const rightColumnCards = [
  { id: 1, type: "image", src: "/home/man-carry.webp", alt: "Man carrying" },
  {
    id: 2,
    type: "image",
    src: "/home/man-laptop.webp",
    alt: "Man with laptop",
  },
  { id: 3, type: "image", src: "/home/office-man.webp", alt: "Office man" },
  { id: 4, type: "video", src: "/about/hero-vid.mp4" },
];

const MediaCarousels = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Desktop: Vertical Layout */}
      <div className="hidden lg:flex gap-3 h-screen">
        {/* Left Column - Scrolling Up */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col gap-3 animate-scroll-up">
            {[...leftColumnCards, ...leftColumnCards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="w-full rounded-2xl overflow-hidden aspect-4/5 shrink-0 relative"
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
          </div>
        </div>

        {/* Right Column - Scrolling Down */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col gap-3 animate-scroll-down">
            {[...rightColumnCards, ...rightColumnCards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="w-full rounded-2xl overflow-hidden aspect-4/5 shrink-0 relative"
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
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal Marquee Layout */}
      <div className="flex flex-col gap-3 h-full lg:hidden">
        {/* First Row - Scrolling Left */}
        <div className="h-[calc(50%-6px)]">
          <Marquee speed={40} gradient={false} className="h-full">
            {leftColumnCards.map((card, index) => (
              <div
                key={`left-${card.id}-${index}`}
                className="h-47.5 sm:h-60 w-37.5 sm:w-45 rounded-2xl overflow-hidden mr-3 relative"
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

        {/* Second Row - Scrolling Right */}
        <div className="h-[calc(50%-6px)]">
          <Marquee
            speed={40}
            gradient={false}
            direction="right"
            className="h-full"
          >
            {rightColumnCards.map((card, index) => (
              <div
                key={`right-${card.id}-${index}`}
                className="h-47.5 sm:h-60 w-37.5 sm:w-45 rounded-2xl overflow-hidden mr-3 relative"
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
      </div>
    </div>
  );
};

export default MediaCarousels;
