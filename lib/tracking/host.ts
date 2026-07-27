export function isRideflowOwnedHost(hostname: string): boolean {
  const host = hostname.split(":")[0]?.toLowerCase() ?? "";
  return (
    host === "localhost" ||
    host === "rideflow.org" ||
    host.endsWith(".rideflow.org")
  );
}
