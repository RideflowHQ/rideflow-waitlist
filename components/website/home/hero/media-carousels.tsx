const leftColumnCards = [
  { id: 1, color: "bg-blue-200" },
  { id: 2, color: "bg-orange-200" },
  { id: 3, color: "bg-slate-300" },
  { id: 4, color: "bg-emerald-200" },
];

const rightColumnCards = [
  { id: 1, color: "bg-violet-200" },
  { id: 2, color: "bg-amber-200" },
  { id: 3, color: "bg-rose-200" },
  { id: 4, color: "bg-cyan-200" },
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
              className={`w-full rounded-2xl ${card.color} aspect-4/5 shrink-0`}
            >
              hiiiiii
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
              className={`w-full rounded-2xl ${card.color} aspect-4/5 shrink-0`}
            >
              hellllloppppp
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousels;
