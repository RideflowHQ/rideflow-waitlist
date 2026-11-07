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
          Available now
        </span>
      </div>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          featured ? "text-white/75" : "text-rideflow-text-light"
        }`}
      >
        {text}
      </p>
      <StoreBadges
        className="mt-5"
        tone={featured ? "light" : "dark"}
      />
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
            title="Hubs"
            text="Compare companies and riders, name your price, and book the delivery."
          />
          <AppCard
            title="Riders"
            text="See nearby jobs, accept the offered fare, or send a counter."
          />
        </div>
      </div>
    </section>
  );
}
