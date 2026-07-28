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

  // Rewrite keeps the browser URL — redirect stray marketing paths to /.
  // Reuse request.nextUrl's own scheme/host/port (don't force the resolved
  // customer hostname here) so the redirect can't bounce across whatever
  // proxy hop got this request to us in the first place.
  if (pathname !== "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/tracking";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
