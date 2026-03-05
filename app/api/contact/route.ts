import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phoneNumber, message } = await request.json();

    // Validate required fields
    if (!fullName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email to info@rideflow.org
    const { data, error } = await resend.emails.send({
      from: "Rideflow Contact Form <info@rideflow.org>",
      to: ["info@rideflow.org"],
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      react: ContactEmail({
        fullName,
        email,
        phoneNumber,
        message,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending your message" },
      { status: 500 },
    );
  }
}
