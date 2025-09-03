import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faqs() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
        <h2 className="sm:text-4xl text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="sm:text-lg text-base text-muted-foreground text-center">
          Everything you need to know about ENIQO. Find answers to common
          questions about our property inspection platform.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-left">
              How much does a property inspection cost?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              ENIQO offers affordable property inspections starting from ₦5,000.
              The exact cost depends on the property size and location. We
              ensure transparent pricing with no hidden fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-left">
              How long does a property inspection take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A typical property inspection takes 30-45 minutes. Our agents
              conduct thorough inspections covering structural integrity,
              plumbing, electrical systems, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-left">
              How do I know the agents are trustworthy?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              All agents on ENIQO are verified and vetted by our team. They
              undergo background checks and maintain high ratings from previous
              inspections. We also provide detailed profiles and reviews.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-left">
              What areas in Abuja do you cover?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              ENIQO covers all major areas in Abuja including Wuse, Gwarinpa,
              Asokoro, Maitama, Jabi, and surrounding areas. We're expanding our
              coverage to serve more neighborhoods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-left">
              What's included in the inspection report?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our comprehensive reports include detailed photos, videos,
              structural assessments, utility checks, and recommendations.
              You'll receive the report within 24 hours of the inspection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline text-left">
              When will ENIQO launch in Abuja?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              ENIQO is launching in Abuja in Q2 2025. Join our waitlist to be
              among the first to experience the future of property discovery and
              inspection in Nigeria.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
