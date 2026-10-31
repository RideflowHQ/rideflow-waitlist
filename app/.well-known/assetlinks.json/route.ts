import { NextResponse } from "next/server";

function fingerprints() {
  return (process.env.ANDROID_APP_SIGNING_SHA256 ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function GET() {
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "org.rideflow.hubs",
        sha256_cert_fingerprints: fingerprints(),
      },
    },
  ];

  return new NextResponse(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
