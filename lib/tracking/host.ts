export function isRideflowOwnedHost(hostname: string): boolean {
  const host = hostname.split(":")[0]?.toLowerCase() ?? "";
  return (
    host === "localhost" ||
    host === "rideflow.org" ||
    host.endsWith(".rideflow.org")
  );
}

export async function shouldShowSiteChrome(): Promise<boolean> {
  const { headers } = await import("next/headers");
  const h = await headers();
  const hostname =
    h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";

  return isRideflowOwnedHost(hostname);
}
