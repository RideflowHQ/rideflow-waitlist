import Image from "next/image";

const leftColumnCards = [
  { id: 1, type: "image", src: "/home/man-bike.webp", alt: "Man on bike" },
  { id: 2, type: "image", src: "/home/office-woman.webp", alt: "Office woman" },
  {
    id: 3,
    type: "image",
    src: "/home/woman-book.webp",
    alt: "Woman with book",
  },
  { id: 4, type: "image", src: "/home/overall-woman.webp", alt: "Overall woman" },
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
  { id: 4, type: "image", src: "/home/woman-call.webp", alt: "Woman on call" },
];

const MediaCarousels = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex gap-3">
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
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousels;
