import { type NextRequest, NextResponse } from "next/server";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.hostname;

  const isOwned = isRideflowOwnedHost(hostname);
  const isTrackingPath = request.nextUrl.pathname.startsWith("/tracking");

  // Debug: add headers to see what's happening
  const response = isOwned || isTrackingPath
    ? NextResponse.next()
    : (() => {
        const url = request.nextUrl.clone();
        url.pathname = "/tracking";
        url.search = "";
        return NextResponse.redirect(url);
      })();

  // Debug headers
  response.headers.set("x-debug-hostname", hostname);
  response.headers.set("x-debug-is-owned", String(isOwned));
  response.headers.set("x-debug-pathname", request.nextUrl.pathname);
  response.headers.set("x-debug-host-header", request.headers.get("host") || "missing");
  response.headers.set("x-debug-forwarded-host", request.headers.get("x-forwarded-host") || "missing");
  response.headers.set("x-debug-nexturl-hostname", request.nextUrl.hostname);

  return response;
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/blog/:path*",
    "/contact",
    "/logistics-hub",
    "/platform",
    "/pricing",
    "/privacy-policy",
    "/services/:path*",
    "/terms-of-service",
  ],
};
