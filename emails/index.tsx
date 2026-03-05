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

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="en">
      <Tailwind>
        <Head>
          <title>Welcome to Rideflow</title>
          <Preview>
            Thanks for joining our waitlist! We&apos;ll keep you in the loop.
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
                    <Text className="m-0 text-white text-[16px] font-semibold leading-tight text-center">
                      WELCOME TO THE RIDEFLOW WAITLIST
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
                <Text className="text-[16px] leading-[24px] text-[#344054] mt-0 mb-3">
                  Hi {userFirstname},
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-3">
                  Thanks for joining the waitlist for <strong>Rideflow</strong>{" "}
                  — your all-in-one logistics and transportation management
                  platform. Whether you&apos;re managing a fleet, staff, or
                  deliveries, we&apos;re building the tools to help you take
                  full control of your operations from a single dashboard.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-3">
                  We&apos;ll keep you updated as we roll out new features
                  designed for both companies and riders. In the meantime, if
                  you have ideas or questions about how Rideflow can best
                  support your logistics needs, just shoot us a mail — we&apos;d
                  love to hear from you at{" "}
                  <Link
                    href="mailto:info@rideflow.org"
                    target="_blank"
                    className="text-rideflow-blue underline"
                  >
                    info@rideflow.org
                  </Link>
                  .
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-3">
                  Want to see what we&apos;re up to? Follow us at{" "}
                  <Link
                    href="https://www.instagram.com/rideflowmanagement/"
                    target="_blank"
                    className="text-rideflow-blue underline"
                  >
                    @RideflowManagement
                  </Link>{" "}
                  for behind-the-scenes updates and early previews.
                </Text>

                <Text className="text-[16px] leading-[24px] text-[#344054] m-0 mb-1">
                  Cheers,
                </Text>

                <Text className="text-[16px] font-bold text-[#344054] m-0">
                  The Rideflow Team
                </Text>
              </Section>

              <Text className="text-[12px] text-[#6b7280] m-0 mt-6">
                &copy; {currentYear} Rideflow Ltd
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

export default WaitlistEmail;
