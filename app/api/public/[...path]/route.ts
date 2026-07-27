import { type NextRequest, NextResponse } from "next/server";

function backendOrigin() {
  const base = process.env.RIDEFLOW_API_BASE ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  return base.replace(/\/+$/, "").replace(/\/api$/, "");
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const origin = backendOrigin();
  if (!origin) {
    return NextResponse.json({ error: "Tracking API is not configured" }, { status: 503 });
  }

  const { path } = await params;
  const upstreamUrl = `${origin}/api/public/${path.map(encodeURIComponent).join("/")}${request.nextUrl.search}`;
  const trackingHost =
    request.headers.get("host") ?? request.headers.get("x-forwarded-host") ?? "";

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: {
        Accept: "application/json",
        "x-rideflow-tracking-host": trackingHost,
        "x-rideflow-edge-secret": process.env.RIDEFLOW_EDGE_SECRET ?? "",
      },
      cache: "no-store",
    });

    const headers = new Headers({
      "content-type": upstream.headers.get("content-type") ?? "application/json",
    });
    const retryAfter = upstream.headers.get("retry-after");
    if (retryAfter) headers.set("retry-after", retryAfter);

    return new NextResponse(await upstream.text(), { status: upstream.status, headers });
  } catch {
    return NextResponse.json({ error: "Tracking API is unreachable" }, { status: 503 });
  }
}
