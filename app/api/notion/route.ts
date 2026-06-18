import { NextResponse } from "next/server";

import { createWaitlistEntry } from "@/lib/notion-submissions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();
    const name = body?.name?.trim();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required", success: false },
        { status: 400 },
      );
    }

    const response = await createWaitlistEntry(name, email);

    if (!response) {
      return NextResponse.json(
        { error: "Failed to add email to Notion", success: false },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email added to Notion", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Waitlist Notion error:", error);
    return NextResponse.json(
      { error: "Failed to add email to Notion", success: false },
      { status: 500 },
    );
  }
}
