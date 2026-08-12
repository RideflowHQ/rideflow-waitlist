export function isRideflowOwnedHost(hostname: string): boolean {
  const host = hostname.split(":")[0]?.toLowerCase() ?? "";
  return (
    host === "localhost" ||
    host === "rideflow.org" ||
    host.endsWith(".rideflow.org")
  );
}

/** Same host resolution order as middleware / public API proxy. */
export function resolveRequestHostname(headersList: Headers): string {
  return (
    headersList.get("x-original-host") ??
    headersList.get("x-forwarded-host") ??
    headersList.get("host") ??
    ""
  );
}

export function isCustomDomainRequest(headersList: Headers): boolean {
  return !isRideflowOwnedHost(resolveRequestHostname(headersList));
}

export function isCustomDomainBrowser(): boolean {
  return (
    typeof window !== "undefined" &&
    !isRideflowOwnedHost(window.location.hostname)
  );
}
