import { headers } from "next/headers";

function isRideflowOwnedHost(hostname: string): boolean {
  const host = hostname.split(":")[0]?.toLowerCase() ?? "";
  return (
    host === "localhost" ||
    host === "rideflow.org" ||
    host.endsWith(".rideflow.org")
  );
}

function envApiBase(): string {
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");
  if (!raw) return "";
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

/** Resolve API + socket bases from the request Host. */
export async function resolvePublicApiBase(): Promise<{
  apiBase: string;
  socketUrl: string;
  hostname: string;
  isCustomDomainHost: boolean;
}> {
  const h = await headers();
  const hostname =
    h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
    console.log('this is the host name' , hostname)
  const isCustomDomainHost = !isRideflowOwnedHost(hostname);

  if (isCustomDomainHost) {
    const proto = h.get("x-forwarded-proto") ?? "https";
    const origin = `${proto}://${hostname}`;
    return {
      apiBase: `${origin}/api`,
      socketUrl: "/public",
      hostname,
      isCustomDomainHost: true,
    };
  }

  const apiBase = envApiBase();
  return {
    apiBase,
    socketUrl: apiBase ? `${apiBase.replace(/\/api$/, "")}/public` : "",
    hostname,
    isCustomDomainHost: false,
  };
}
