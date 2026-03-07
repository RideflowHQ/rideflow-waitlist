import { ContactPage } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Rideflow",
  description:
    "Get in touch with Rideflow. Contact us for inquiries about our logistics operations platform and services.",
};

export default async function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rideflow",
    description: "Contact Rideflow Limited for logistics operations solutions",
    url: "https://rideflow.org/contact",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactPage />
    </>
  );
}
