"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";

import { Loader2, Search } from "lucide-react";
import { io, type Socket } from "socket.io-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchTracking, fetchTrackingSite } from "@/lib/tracking/public-client";
import { fontCssFamily, normalizeTrackingReference } from "@/lib/tracking/utils";
import type {
  PublicTrackingBranding,
  PublicTrackingData,
  PublicTrackingStatusEvent,
} from "@/lib/tracking/types";

type TrackingPageClientProps = {
  companyName: string;
  branding: PublicTrackingBranding;
};

function formatOccurredAt(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function sortedHistory(history: PublicTrackingStatusEvent[] | undefined) {
  if (!history?.length) return [];
  return [...history].sort((a, b) => a.sequence - b.sequence);
}

/**
 * Always loads GET /api/public/site on the current page host (rideflow.org or
 * customer hostname). Backend resolves the company from Host; response.isCustomDomain
 * tells the UI whether this is a custom tracking domain.
 */
export function TrackingPageClient({ companyName, branding }: TrackingPageClientProps) {
  const [site, setSite] = useState({
    companyName,
    branding,
    isCustomDomain: false,
    unavailable: false,
    error: "",
  });
  const [isSiteLoading, setIsSiteLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeReference, setActiveReference] = useState<string | null>(null);
  const [result, setResult] = useState<PublicTrackingData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryAfterSeconds, setRetryAfterSeconds] = useState<number | undefined>();
  const [isPending, startTransition] = useTransition();
  const socketRef = useRef<Socket | null>(null);

  const primaryColor = site.branding.primaryColor || "#2563EB";
  const fontFamily = fontCssFamily(site.branding.font);
  const supportPhone = result?.company?.companyPhone || site.branding.companyPhone;

  const history = useMemo(() => sortedHistory(result?.statusHistory), [result?.statusHistory]);

  useEffect(() => {
    let cancelled = false;

    void fetchTrackingSite().then((response) => {
      if (cancelled) return;
      setIsSiteLoading(false);
      if (!response.ok) {
        setSite((current) => ({ ...current, unavailable: true, error: response.error }));
        return;
      }
      setSite({
        companyName: response.data.company.companyName,
        branding: response.data.branding,
        isCustomDomain: response.data.isCustomDomain,
        unavailable: false,
        error: "",
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@400;500;600;700&display=swap`;
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }, [fontFamily]);

  const runLookup = useCallback((raw: string) => {
    const normalized = normalizeTrackingReference(raw);
    if (!normalized) {
      setError("Enter a tracking ID");
      setResult(null);
      setActiveReference(null);
      return;
    }

    startTransition(async () => {
      setError(null);
      setRetryAfterSeconds(undefined);
      const response = await fetchTracking(normalized);
      if (!response.ok) {
        setResult(null);
        setActiveReference(null);
        setError(response.error);
        setRetryAfterSeconds(response.retryAfterSeconds);
        return;
      }
      setResult(response.data);
      setActiveReference(normalizeTrackingReference(response.data.referenceId || normalized));
    });
  }, []);

  useEffect(() => {
    if (!activeReference) return;

    // Same-origin Socket.IO; namespace /public (engine path /socket.io/*).
    // Polling first: the /socket.io rewrite can't carry a websocket upgrade.
    const socket = io("/public", {
      transports: ["polling", "websocket"],
      autoConnect: true,
      reconnection: true,
    });
    socketRef.current = socket;

    const join = () => {
      socket.emit("JOIN_TRACKING", activeReference);
    };

    const onUpdated = (payload: { referenceId?: string }) => {
      const incoming = payload?.referenceId
        ? normalizeTrackingReference(payload.referenceId)
        : "";
      if (incoming && incoming !== activeReference) return;
      void runLookup(activeReference);
    };

    socket.on("connect", join);
    socket.on("TRACKING_UPDATED", onUpdated);
    socket.on("ERROR", () => {
      // Non-sensitive; keep current UI.
    });

    if (socket.connected) join();

    return () => {
      socket.emit("LEAVE_TRACKING", activeReference);
      socket.off("connect", join);
      socket.off("TRACKING_UPDATED", onUpdated);
      socket.off("ERROR");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [activeReference, runLookup]);

  if (isSiteLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F3F4F6]">
        <Loader2 className="size-5 animate-spin text-slate-500" aria-label="Loading tracking site" />
      </main>
    );
  }

  if (site.unavailable) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F3F4F6] px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Tracking unavailable</h1>
        <p className="mt-2 max-w-md text-sm text-slate-600">
          {site.error || "This tracking site could not be found."}
        </p>
      </main>
    );
  }

  const displayId =
    result?.trackingId ||
    result?.shipmentNumber ||
    result?.orderId ||
    result?.referenceId ||
    "";

  return (
    <main
      className="min-h-screen bg-[#F3F4F6] px-4 py-10 sm:px-6 sm:py-14"
      style={{ fontFamily: `"${fontFamily}", sans-serif` }}
      data-custom-domain={site.isCustomDomain ? "true" : "false"}
    >
      <div className="mx-auto w-full max-w-2xl space-y-4">
        <div className="flex flex-col items-center gap-2 text-center">
          {site.branding.logoUrl ? (
            <Image
              src={site.branding.logoUrl}
              alt={`${site.companyName} logo`}
              width={160}
              height={48}
              className="h-12 w-auto max-w-45 object-contain"
              unoptimized
            />
          ) : (
            <p className="text-lg font-semibold text-slate-900">{site.companyName}</p>
          )}
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Track Your Order</h1>
          <p className="text-sm text-slate-600">
            Enter your order details to check the current status.
          </p>
        </div>

        <form
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            runLookup(query);
          }}
        >
          <p className="mb-2 text-sm font-semibold text-slate-900">Find Your Order</p>
          <Label htmlFor="tracking-id" className="mb-1 text-xs text-slate-500">
            Tracking ID
          </Label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              id="tracking-id"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="RF-2048 or RF-INTL-2026-001420"
              className="bg-white"
              autoComplete="off"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="text-white sm:shrink-0"
              style={{ backgroundColor: primaryColor }}
            >
              {isPending ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
              Track Order
            </Button>
          </div>
          {error ? (
            <p className="mt-3 text-sm text-amber-800" role="alert">
              {error}
              {retryAfterSeconds ? ` Try again in about ${retryAfterSeconds}s.` : null}
            </p>
          ) : null}
        </form>

        {result ? (
          <>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold text-slate-900">
                  {result.trackingType === "ORDER" ? "Order" : "Shipment"} {displayId}
                </h2>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${primaryColor}22`, color: primaryColor }}
                >
                  {result.currentStatus}
                </span>
              </div>
              {result.lastUpdatedAt ? (
                <p className="mt-1 text-xs text-slate-500">
                  Last updated {formatOccurredAt(result.lastUpdatedAt)}
                </p>
              ) : null}
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-slate-900">Order Timeline</h3>
              {history.length ? (
                <ol>
                  {history.map((step, index) => {
                    const isLast = index === history.length - 1;
                    const isCurrent = isLast;
                    return (
                      <li key={`${step.sequence}-${step.status}`} className="relative flex gap-3 pb-5 last:pb-0">
                        {!isLast ? (
                          <span
                            className="absolute top-3 left-1.75 h-[calc(100%-4px)] w-px"
                            style={{ backgroundColor: primaryColor }}
                          />
                        ) : null}
                        <span
                          className="relative z-10 mt-1 size-3.5 shrink-0 rounded-full border-2"
                          style={{
                            borderColor: primaryColor,
                            backgroundColor: primaryColor,
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-semibold text-slate-900">{step.status}</p>
                            {isCurrent ? (
                              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800">
                                Current
                              </span>
                            ) : null}
                          </div>
                          {step.note ? <p className="text-xs text-slate-600">{step.note}</p> : null}
                          {step.occurredAt ? (
                            <p className="mt-0.5 text-[11px] text-slate-500">
                              {formatOccurredAt(step.occurredAt)}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <p className="text-sm text-slate-600">No timeline events yet.</p>
              )}
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Order Information</h3>
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                {result.preferredCarrier ? (
                  <div>
                    <p className="font-semibold text-slate-900">Preferred Carrier</p>
                    <p className="text-slate-600">{result.preferredCarrier}</p>
                  </div>
                ) : null}
                {result.recipientName ? (
                  <div>
                    <p className="font-semibold text-slate-900">Recipient Name</p>
                    <p className="text-slate-600">{result.recipientName}</p>
                  </div>
                ) : null}
                {result.destinationCountry ? (
                  <div>
                    <p className="font-semibold text-slate-900">Destination Country</p>
                    <p className="text-slate-600">{result.destinationCountry}</p>
                  </div>
                ) : null}
                {result.lastLocation ? (
                  <div>
                    <p className="font-semibold text-slate-900">Last Location</p>
                    <p className="text-slate-600">{result.lastLocation}</p>
                  </div>
                ) : null}
                {result.estimatedDeliveryAt ? (
                  <div>
                    <p className="font-semibold text-slate-900">Estimated Delivery</p>
                    <p className="text-slate-600">{formatOccurredAt(result.estimatedDeliveryAt)}</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Need Help with Your Order?</p>
              <p className="mt-1 text-xs text-slate-600">
                Contact {site.companyName}
                {result.company?.companyEmail ? ` at ${result.company.companyEmail}` : ""}
                {supportPhone ? ` or ${supportPhone}` : ""}.
              </p>
              {result.company?.companyEmail ? (
                <a
                  href={`mailto:${result.company.companyEmail}`}
                  className="mt-3 inline-flex rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-slate-800"
                >
                  Contact Support
                </a>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}
