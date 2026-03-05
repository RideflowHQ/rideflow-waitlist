import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ContactEmailProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  message?: string;
}

const ContactEmail = ({
  fullName,
  email,
  phoneNumber,
  message,
}: ContactEmailProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Tailwind>
        <Head>
          <title>New Contact Form Submission</title>
          <Preview>New message from {fullName}</Preview>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
          </style>
        </Head>
        <Body style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          <Container className="rounded-[8px] p-[32px] mx-auto max-w-[600px]">
            <Section className="mt-[16px]">
              <Text className="text-[28px] font-bold text-black m-0">
                New Contact Form Submission
              </Text>

              <Hr className="border-solid border-[#27272A] my-[16px]" />
            </Section>

            <Section>
              <Text className="text-[16px] leading-[24px] text-black mt-[24px]">
                You have received a new message from your website contact form:
              </Text>

              <div
                style={{
                  background: "#F1F1F2",
                  borderRadius: "8px",
                  padding: "20px",
                  marginTop: "16px",
                }}
              >
                <Text className="text-[14px] font-bold text-black mb-[8px] mt-0">
                  Full Name:
                </Text>
                <Text className="text-[16px] text-black mt-0 mb-[16px]">
                  {fullName}
                </Text>

                <Text className="text-[14px] font-bold text-black mb-[8px] mt-0">
                  Email Address:
                </Text>
                <Text className="text-[16px] text-black mt-0 mb-[16px]">
                  <Link
                    href={`mailto:${email}`}
                    className="text-[#2844e8] underline"
                  >
                    {email}
                  </Link>
                </Text>

                <Text className="text-[14px] font-bold text-black mb-[8px] mt-0">
                  Phone Number:
                </Text>
                <Text className="text-[16px] text-black mt-0 mb-[16px]">
                  <Link
                    href={`tel:${phoneNumber}`}
                    className="text-[#2844e8] underline"
                  >
                    {phoneNumber}
                  </Link>
                </Text>

                {message && (
                  <>
                    <Text className="text-[14px] font-bold text-black mb-[8px] mt-0">
                      Message:
                    </Text>
                    <Text className="text-[16px] text-black mt-0 mb-0 whitespace-pre-wrap">
                      {message}
                    </Text>
                  </>
                )}
              </div>

              <Text className="text-[14px] leading-[20px] text-[#A1A1AA] mt-[24px]">
                This email was sent automatically from the Rideflow website
                contact form.
              </Text>
            </Section>

            <Hr className="border-solid border-[#27272A] my-[24px]" />

            <Section>
              <Text className="text-[12px] text-black text-center m-0">
                © {currentYear} Rideflow. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
