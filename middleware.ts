import { type NextRequest, NextResponse } from "next/server";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

const TRACKING_REWRITE_HEADER = "x-rideflow-tracking-rewrite";

function resolveHostname(request: NextRequest): string {
  return (
    request.headers.get("x-original-host") ??
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.hostname
  );
}

export function middleware(request: NextRequest) {
  const hostname = resolveHostname(request);

  if (isRideflowOwnedHost(hostname)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const isTrackingRewrite = request.headers.get(TRACKING_REWRITE_HEADER) === "1";

  if (pathname !== "/" && !isTrackingRewrite) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tracking";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(TRACKING_REWRITE_HEADER, "1");

  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
