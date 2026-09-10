import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface MoveWaitlistEmailProps {
  firstName: string;
}

const MoveWaitlistEmail = ({ firstName }: MoveWaitlistEmailProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="en">
      <Tailwind>
        <Head>
          <title>You're on the The Rideflow Hubs Waitlist!</title>
          <Preview>
            Thanks for joining the The Rideflow Hubs waitlist. Get ₦1,000 off your first delivery!
          </Preview>
          <style>
            {`@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");`}
          </style>
        </Head>
        <Body
          className="m-0 bg-[#f2f4f8]"
          style={{ fontFamily: '"DM Sans", Arial, Helvetica, sans-serif' }}
        >
          <Container className="max-w-[600px] mx-auto bg-white">
            {/* Logo + body */}
            <Section className="px-8 pt-8 pb-4">
              <Img
                src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020995/Ride_Horizontal_1_yqann0.svg"
                alt="Rideflow logo"
                width={92}
                className="block mb-[18px]"
              />

              {/* Banner */}
              <Section className="bg-[#2C4BFD] rounded-md mb-8 overflow-hidden">
                <Row>
                  <Column className="w-[80px] align-middle">
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020993/Rectangle_p6sze0.svg"
                      alt=""
                      width={80}
                      className="block opacity-90"
                    />
                  </Column>
                  <Column className="align-middle text-center px-2">
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020991/agreement_1_vsjhq1.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="inline-block mb-2"
                    />
                    <Text className="m-0 text-white text-[20px] md:text-[25px] font-semibold leading-tight text-center">
                      WELCOME TO THE RIDEFLOW HUBS
                    </Text>
                  </Column>
                  <Column className="w-[80px] align-middle">
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020994/RectangleRight_o3fz07.svg"
                      alt=""
                      width={80}
                      className="block opacity-90 ml-auto"
                    />
                  </Column>
                </Row>
              </Section>

              {/* Body copy */}
              <Section>
                <Text className="text-[20px] font-semibold leading-[28px] text-[#111827] mt-0 mb-4">
                  You're on the list, {firstName}!
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] mt-0 mb-4">
                  Hi {firstName},
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  Thanks for joining the waitlist for <strong>The Rideflow Hubs</strong> the smartest way to compare every logistics provider, decide your price, and book the cheapest delivery in minutes.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  We're launching soon in Lagos, and you're now on the priority list. Here's what you can expect:
                </Text>

                {/* Benefits list */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    <span style={{ marginRight: "8px", color: "#2C4BFD" }}>✓</span>
                    <Text className="text-[15px] leading-[22px] text-[#344054] m-0">
                      <strong>Compare prices</strong> from multiple logistics providers in real time
                    </Text>
                  </div>
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    <span style={{ marginRight: "8px", color: "#2C4BFD" }}>✓</span>
                    <Text className="text-[15px] leading-[22px] text-[#344054] m-0">
                      <strong>Book multiple orders</strong> at once no more one-by-one hassle
                    </Text>
                  </div>
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    <span style={{ marginRight: "8px", color: "#2C4BFD" }}>✓</span>
                    <Text className="text-[15px] leading-[22px] text-[#344054] m-0">
                      <strong>Save money instantly</strong> by always getting the best rate
                    </Text>
                  </div>
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    <span style={{ marginRight: "8px", color: "#2C4BFD" }}>✓</span>
                    <Text className="text-[15px] leading-[22px] text-[#344054] m-0">
                      <strong>Early access</strong> before the public launch
                    </Text>
                  </div>
                </div>

                {/* Discount highlight */}
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Text className="text-[12px] font-bold uppercase tracking-wider text-[#6B7280] mt-0 mb-2">
                    Reserved for you
                  </Text>
                  <Text className="text-[30px] font-bold tracking-tight text-[#111827] mt-0 mb-2">
                    ₦1,000 off
                  </Text>
                  <Text className="text-[14px] text-[#6B7280] m-0">
                    Applied to your first delivery, automatically.
                  </Text>
                </div>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  We'll reach out to you soon with your download link and early access instructions. In the meantime, if you have any questions, feel free to reach us at{" "}
                  <Link
                    href="mailto:info@rideflow.org"
                    target="_blank"
                    className="text-[#2C4BFD] underline"
                  >
                    info@rideflow.org
                  </Link>
                  .
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-2">
                  Warm regards,
                </Text>

                <Text className="text-[16px] font-semibold text-[#344054] m-0">
                  The Rideflow Team
                </Text>
              </Section>

              <Text className="text-[12px] text-[#6b7280] m-0 mt-8">
                © {currentYear} Rideflow HQ
              </Text>
            </Section>

            {/* Footer */}
            <Section className="px-8 pb-8 pt-2">
              <Row>
                <Column>
                  <Img
                    src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020995/Ride_Horizontal_1_yqann0.svg"
                    alt="Rideflow icon"
                    width={70}
                    height={70}
                    className="block"
                  />
                </Column>
                <Column className="text-right">
                  <Link
                    href="https://x.com/RideflowHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rideflow on X"
                    className="inline-flex items-center justify-center no-underline ml-[10px]"
                  >
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020996/ri_twitter-x-fill_oufypf.svg"
                      alt="X"
                      width={20}
                      height={20}
                      className="inline-block opacity-80"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/rideflowlimited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rideflow on LinkedIn"
                    className="inline-flex items-center justify-center no-underline ml-[10px]"
                  >
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020993/Social_icon_uefwao.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="inline-block opacity-80"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/rideflowhq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rideflow on Instagram"
                    className="inline-flex items-center justify-center no-underline ml-[10px]"
                  >
                    <Img
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772020991/Ig_s6hiq3.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="inline-block opacity-80"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MoveWaitlistEmail;
