import { NextRequest, NextResponse } from "next/server";

import { createBlogNotifyEntry } from "@/lib/notion-submissions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await createBlogNotifyEntry(email);

    if (!response) {
      return NextResponse.json(
        { error: "Failed to save notification request" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Notification request saved", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Blog notify Notion error:", error);
    return NextResponse.json(
      { error: "An error occurred while saving your request" },
      { status: 500 },
    );
  }
}
