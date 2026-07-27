import { headers } from "next/headers";

import { isRideflowOwnedHost } from "@/lib/tracking/host";

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
  console.log("hostname", hostname);
  const isCustomDomainHost = !isRideflowOwnedHost(hostname);

  if (isCustomDomainHost) {
    return {
      apiBase: "",
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
