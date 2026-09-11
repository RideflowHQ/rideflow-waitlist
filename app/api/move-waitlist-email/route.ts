import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MoveWaitlistEmail from "@/emails/move-waitlist-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Email and first name are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Michael from Rideflow <info@rideflow.org>",
      to: [email],
      subject: "Welcome to Rideflow’s prime access list!",
      react: MoveWaitlistEmail({ firstName }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Move waitlist email error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending email" },
      { status: 500 }
    );
  }
}
