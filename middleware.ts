import { type NextRequest, NextResponse } from "next/server";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

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

  // Rewrite keeps the browser URL — redirect stray marketing paths to /
  if (pathname !== "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    const [publicHost, publicPort] = hostname.split(":");
    if (publicHost) url.hostname = publicHost;
    if (publicPort) url.port = publicPort;
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tracking";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
