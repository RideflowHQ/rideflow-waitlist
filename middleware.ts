import { type NextRequest, NextResponse } from "next/server";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.hostname;

  if (
    isRideflowOwnedHost(hostname) ||
    request.nextUrl.pathname.startsWith("/tracking")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tracking";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|socket\\.io|.*\\..*).*)"],
};
