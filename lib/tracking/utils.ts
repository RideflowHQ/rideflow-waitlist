import type { TrackingBrandFont } from "@/lib/tracking/types";

const FONT_CSS: Record<TrackingBrandFont, string> = {
  INTER: "Inter",
  POPPINS: "Poppins",
  ROBOTO: "Roboto",
  DM_SANS: "DM Sans",
  OPEN_SANS: "Open Sans",
};

export function fontCssFamily(font: TrackingBrandFont | string | undefined): string {
  if (!font) return "DM Sans";
  const key = font.toUpperCase().replace(/\s+/g, "_") as TrackingBrandFont;
  return FONT_CSS[key] ?? font;
}

export function normalizeTrackingReference(input: string): string {
  return input.trim().replace(/^#/, "").toUpperCase();
}

export function formatTrackingStatus(status: string | undefined | null): string {
  if (!status?.trim()) return "";
  return status
    .trim()
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
