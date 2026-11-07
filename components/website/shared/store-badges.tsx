import Link from "next/link";
import type { ReactNode } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/content/site";

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
      <path
        fill="#EA4335"
        d="M20.5 11.1 16.4 8.6 13 12l3.4 3.4 4.1-2.4c.7-.4.7-1.5 0-1.9Z"
      />
    </svg>
  );
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function StoreBadge({
  href,
  icon,
  kicker,
  name,
  tone,
  size = "md",
  fullWidth = false,
}: {
  href: string;
  icon: ReactNode;
  kicker: string;
  name: string;
  tone: "light" | "dark";
  size?: "sm" | "md";
  fullWidth?: boolean;
}) {
  const classes = `inline-flex items-center transition hover:opacity-90 ${
    size === "sm" ? "h-9 gap-2 rounded-full px-3" : "h-11 gap-2.5 rounded-xl px-3.5"
  } ${
    tone === "light"
      ? "bg-white text-rideflow-ink-hard shadow-[0_2px_8px_rgba(14,14,14,0.12)]"
      : "bg-rideflow-ink-hard text-white"
  } ${fullWidth ? "w-full justify-center" : ""}`;

  const content = (
    <>
      {icon}
      <span className="flex flex-col leading-none">
        <span
          className={`font-medium opacity-80 ${
            size === "sm" ? "text-[8px]" : "text-[9px]"
          }`}
        >
          {kicker}
        </span>
        <span
          className={`mt-0.5 font-semibold tracking-tight ${
            size === "sm" ? "text-[13px]" : "text-sm"
          }`}
        >
          {name}
        </span>
      </span>
    </>
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function StoreBadges({
  tone = "dark",
  size = "md",
  className = "",
  fullWidth = false,
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      <StoreBadge
        href={APP_STORE_URL}
        tone={tone}
        size={size}
        fullWidth={fullWidth}
        icon={<AppleMark />}
        kicker="Download on the"
        name="App Store"
      />
      <StoreBadge
        href={PLAY_STORE_URL}
        tone={tone}
        size={size}
        fullWidth={fullWidth}
        icon={<PlayMark />}
        kicker="Get it on"
        name="Play Store"
      />
    </div>
  );
}
