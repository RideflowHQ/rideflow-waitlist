import Image from "next/image";
import type { ReactNode } from "react";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M16.37 12.64c.03-2.54 2.07-3.77 2.16-3.83-1.18-1.73-3.01-1.97-3.66-2-1.56-.16-3.04 1.04-3.83 1.04-.79 0-2.01-1.02-3.3-.99-1.7.03-3.27.99-4.14 2.52-1.77 3.07-.45 7.61 1.27 10.1.84 1.22 1.84 2.59 3.15 2.54 1.26-.05 1.74-.82 3.26-.82s1.95.82 3.29.79c1.36-.02 2.22-1.24 3.05-2.47.96-1.4 1.35-2.76 1.38-2.83-.03-.01-2.63-1.01-2.63-4.05ZM14.15 4.27c.69-.84 1.16-2 1.03-3.16-1 .04-2.21.67-2.93 1.5-.64.74-1.2 1.93-1.05 3.07 1.11.09 2.25-.57 2.95-1.41Z"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden>
      <path fill="#34A853" d="M3.2 20.8 13 12 3.2 3.2v17.6Z" />
      <path fill="#FBBC04" d="M16.4 8.6 13 12 3.2 3.2z" />
      <path fill="#4285F4" d="M16.4 15.4 13 12 3.2 20.8z" />
      <path fill="#EA4335" d="M20.5 11.1 16.4 8.6 13 12l3.4 3.4 4.1-2.4c.7-.4.7-1.5 0-1.9Z" />
    </svg>
  );
}

function StoreBadge({
  icon,
  kicker,
  name,
  tone,
}: {
  icon: ReactNode;
  kicker: string;
  name: string;
  tone: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex h-9 cursor-default items-center gap-2 rounded-full px-3 ${
        tone === "light"
          ? "bg-white text-rideflow-ink-hard shadow-[0_2px_8px_rgba(14,14,14,0.12)]"
          : "bg-rideflow-ink-hard text-white"
      }`}
    >
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[8px] font-medium">{kicker}</span>
        <span className="mt-px text-[13px] font-semibold tracking-tight">
          {name}
        </span>
      </span>
    </span>
  );
}

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
          Coming soon
        </span>
      </div>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          featured ? "text-white/70" : "text-rideflow-text-light"
        }`}
      >
        {text}
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <StoreBadge
          tone={featured ? "light" : "dark"}
          icon={<AppleMark />}
          kicker="Download on the"
          name="App Store"
        />
        <StoreBadge
          tone={featured ? "light" : "dark"}
          icon={<PlayMark />}
          kicker="Get it on"
          name="Play Store"
        />
      </div>
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
