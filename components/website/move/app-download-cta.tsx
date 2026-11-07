import Image from "next/image";
import { StoreBadges } from "@/components/website/shared/store-badges";

function AppCard({
  title,
  text,
  featured,
}: {
  title: string;
  text: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        featured
          ? "bg-rideflow-blue text-white"
          : "border border-rideflow-hairline bg-white text-rideflow-ink-hard"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-[15px] font-semibold">{title}</p>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            featured
              ? "bg-white/15 text-white"
              : "bg-body-gray text-rideflow-text-extralight"
          }`}
        >
          Available now
        </span>
      </div>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          featured ? "text-white/70" : "text-rideflow-text-light"
        }`}
      >
        {text}
      </p>
      <StoreBadges
        className="mt-4"
        size="sm"
        tone={featured ? "light" : "dark"}
      />
    </div>
  );
}

export function AppDownloadSection() {
  return (
    <section
      id="apps"
      className="scroll-mt-28 border-t border-rideflow-hairline bg-white py-14 md:py-[88px]"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid overflow-hidden rounded-[24px] border border-rideflow-hairline lg:grid-cols-2">
          <div className="relative min-h-[280px] bg-rideflow-ink-hard lg:min-h-full">
            <Image
              src="/home/man-carry.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-white px-6 py-10 sm:px-10 md:px-12 md:py-14">
            <h2 className="max-w-[22ch] text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-rideflow-ink-hard md:text-[40px]">
              The apps, at your fingertips.
            </h2>
            <p className="mt-3 text-sm text-rideflow-text-light">
              Available on Android and iOS.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <AppCard
                featured
                title="Hubs"
                text="Compare quotes and book multiple deliveries from one place."
              />
              <AppCard
                title="Riders"
                text="Pick up verified jobs nearby and manage earnings from your phone."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
