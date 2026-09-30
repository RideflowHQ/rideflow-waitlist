import { NextResponse } from "next/server";

export function GET() {
  const association = {
    applinks: {
      apps: [] as string[],
      details: [
        {
          appID: process.env.IOS_APP_ID ?? "",
          paths: ["/company/*"],
        },
      ],
    },
  };

  return new NextResponse(JSON.stringify(association), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
