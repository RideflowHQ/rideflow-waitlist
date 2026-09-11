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
          <title>Welcome to Rideflow&apos;s prime access list!</title>
          <Preview>I have been waiting for you</Preview>
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
                      WELCOME TO THE PRIME ACCESS LIST
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
                <Text className="text-[16px] leading-[24px] text-[#344054] mt-0 mb-4">
                  Hello {firstName},
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  👋🏾 Michael here.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  I&apos;m the CEO at Rideflow, and I&apos;ve been building this
                  for you over the last two years.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  We&apos;ve done the hard work of bringing together trusted
                  logistics providers in one place, so you can compare prices,
                  negotiate the best rate, and book multiple deliveries at once.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  This is just the beginning, and I&apos;m excited to have you
                  on the journey.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  Aside from the ₦1,000 on your first delivery, what else would
                  you love to see from Rideflow when we go live?
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-4">
                  Just hit reply. I&apos;ll be reading every response.
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
                    width={92}
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
