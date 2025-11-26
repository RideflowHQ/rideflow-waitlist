import * as React from "react";
import {
  Body,
  Button,
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

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Tailwind>
        <Head>
          <title>Welcome to Rideflow</title>
          <Preview>
            Thanks for joining our waitlist! We'll keep you in the loop.
          </Preview>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
          </style>
        </Head>
        <Body className="" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          <Container className=" rounded-[8px] p-[32px] mx-auto max-w-[600px]">
            <Section className="mt-[16px] text-center">
              <Text className="text-[28px] font-bold text-black m-0">
                Welcome to <span className="text-[#2844e8]">Rideflow</span>
              </Text>

              <Text className="text-[18px] text-[#A1A1AA] mt-[16px] mb-[16px]">
                We're thrilled to have you join our waitlist
              </Text>

              <Hr className="border-solid border-[#27272A] my-[16px] w-[80px] mx-auto" />
            </Section>

            <Section>
              <Text className="text-[16px] leading-[24px] text-black mt-[32px]">
                Hi {userFirstname},
              </Text>

              <Text className="text-[16px] leading-[24px] text-black">
                Thanks for joining the waitlist for <strong>Rideflow</strong> —
                your all-in-one logistics and transportation management
                platform. Whether you're managing a fleet, staff, or deliveries,
                we're building the tools to help you take full control of your
                operations from a single dashboard.
              </Text>

              <Text className="text-[16px] leading-[24px] text-black">
                We’ll keep you updated as we roll out new features designed for
                both companies and riders. In the meantime, if you have ideas or
                questions about how Rideflow can best support your logistics
                needs, just shoot us a mail we’d love to hear from you.
                <Link
                  href="mailto:info@rideflow.org"
                  target="_blank"
                  className="text-[#2844e8] underline"
                >
                  info@rideflow.org
                </Link>
              </Text>

              <Text className="text-[16px] leading-[24px] text-black">
                Want to see what we're up to? Follow us at{" "}
                <Link
                  href="https://www.instagram.com/rideflowmanagement/"
                  target="_blank"
                  className="text-[#2844e8] underline"
                >
                  @RideflowManagement
                </Link>{" "}
                for behind-the-scenes updates and early previews.
              </Text>

              <Text className="text-[16px] leading-[24px] text-black mt-[24px]">
                Cheers,
              </Text>

              <Text className="text-[16px] font-bold text-black mb-[32px]">
                The Rideflow Team
              </Text>
            </Section>

            <Hr className="border-solid border-[#27272A] my-[24px]" />

            <Section>
              <Text className="text-[12px] text-black text-center m-0">
                © {currentYear} Rideflow. All rights reserved.
              </Text>
              <Text className="text-[12px] text-black text-center m-0">
                Victorial Island, Lagos
              </Text>
              <Text className="text-[12px] text-black text-center mt-[16px]">
                <Link href="#" className="text-[#2844e8]">
                  Unsubscribe
                </Link>{" "}
                •{" "}
                <Link href="#" className="text-[#2844e8]">
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
