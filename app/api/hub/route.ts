import { NextRequest, NextResponse } from "next/server";

import { createHubRegistration } from "@/lib/notion-submissions";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phoneNumber,
      audienceType,
      companyName,
      branchCount,
      serviceType,
      message,
    } = body;

    if (!fullName || !email || !phoneNumber || !audienceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await createHubRegistration({
      fullName,
      email,
      phoneNumber,
      audienceType,
      companyName,
      branchCount,
      serviceType,
      message,
    });

    if (!response) {
      return NextResponse.json(
        { error: "Failed to save hub registration" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Submitted successfully", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Hub form error:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting your request" },
      { status: 500 },
    );
  }
}
