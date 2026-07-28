import { type NextRequest, NextResponse } from "next/server";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

const TRACKING_REWRITE_PARAM = "__rideflow_tracking_rewrite";

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

  const { pathname, search } = request.nextUrl;
  const isTrackingRewrite =
    request.nextUrl.searchParams.get(TRACKING_REWRITE_PARAM) === "1";

  if (isTrackingRewrite) {
    return NextResponse.next();
  }

  if (pathname !== "/" || search) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tracking";
  url.searchParams.set(TRACKING_REWRITE_PARAM, "1");
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
