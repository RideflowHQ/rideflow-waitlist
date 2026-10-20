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
      className={`inline-flex h-11 items-center gap-2.5 rounded-xl px-3.5 ${
        tone === "light"
          ? "bg-white text-rideflow-ink-hard"
          : "bg-rideflow-ink-hard text-white"
      }`}
    >
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-medium opacity-80">{kicker}</span>
        <span className="mt-0.5 text-sm font-semibold tracking-tight">
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
      className={`rounded-2xl p-5 sm:p-6 ${
        featured
          ? "bg-rideflow-blue text-white"
          : "border border-rideflow-hairline bg-white text-rideflow-ink-hard"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-semibold">{title}</p>
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
        className={`mt-2 text-sm leading-relaxed ${
          featured ? "text-white/75" : "text-rideflow-text-light"
        }`}
      >
        {text}
      </p>
      <div className="mt-5 flex flex-wrap gap-2.5">
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
      className="scroll-mt-28 border-t border-rideflow-hairline bg-body-gray py-16 md:py-24"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="max-w-[18ch] text-3xl font-medium leading-tight tracking-tight text-rideflow-ink-hard sm:text-4xl">
          The apps, at your fingertips.
        </h2>
        <p className="mt-3 text-sm text-rideflow-text-light">
          One app to book. One app to take the job. Android and iOS.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <AppCard
            featured
            title="Move"
            text="Compare companies and riders, name your price, and book the delivery."
          />
          <AppCard
            title="Ride"
            text="See nearby jobs, accept the offered fare, or send a counter."
          />
        </div>
      </div>
    </section>
  );
}
