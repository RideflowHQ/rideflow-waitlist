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
    <Html lang="en">
      <Tailwind>
        <Head>
          <title>New Contact Form Submission</title>
          <Preview>New message from {fullName}</Preview>
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
                      src="https://res.cloudinary.com/dy7brekso/image/upload/v1772537920/expired_1_zpnjim.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="inline-block mb-2"
                    />
                    <Text className="m-0 text-[#FFFFFF] text-[16px] font-semibold leading-tight text-center">
                      NEW CONTACT FORM SUBMISSION
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
                  You have received a new message from your website contact
                  form:
                </Text>

                <div
                  style={{
                    background: "#F1F1F2",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <Text className="text-[14px] font-bold text-[#111827] mb-2 mt-0">
                    Full Name:
                  </Text>
                  <Text className="text-[16px] text-[#344054] mt-0 mb-4">
                    {fullName}
                  </Text>

                  <Text className="text-[14px] font-bold text-[#111827] mb-2 mt-0">
                    Email Address:
                  </Text>
                  <Text className="text-[16px] text-[#344054] mt-0 mb-4">
                    <Link
                      href={`mailto:${email}`}
                      className="text-rideflow-blue underline"
                    >
                      {email}
                    </Link>
                  </Text>

                  <Text className="text-[14px] font-bold text-[#111827] mb-2 mt-0">
                    Phone Number:
                  </Text>
                  <Text className="text-[16px] text-[#344054] mt-0 mb-4">
                    <Link
                      href={`tel:${phoneNumber}`}
                      className="text-rideflow-blue underline"
                    >
                      {phoneNumber}
                    </Link>
                  </Text>

                  {message && (
                    <>
                      <Text className="text-[14px] font-bold text-[#111827] mb-2 mt-0">
                        Message:
                      </Text>
                      <Text className="text-[16px] text-[#344054] mt-0 mb-0 whitespace-pre-wrap">
                        {message}
                      </Text>
                    </>
                  )}
                </div>

                <Text className="text-[14px] leading-[20px] text-[#6b7280] mt-4 mb-0">
                  This email was sent automatically from the Rideflow website
                  contact form.
                </Text>
              </Section>

              <Text className="text-[12px] text-[#6b7280] m-0 mt-4">
                © {currentYear} Rideflow. All rights reserved.
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

export default ContactEmail;
