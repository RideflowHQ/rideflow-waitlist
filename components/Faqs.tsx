import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faqs() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start  md:px-10 gap-6 py-20  w-full max-w-screen-xl  mx-auto px-4">
      <div className="flex flex-col items-start justify-center gap-2 max-w-2xl">
        <h2 className="text-7xl font-bold text-foreground">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#18191A] to-[#FFFFFF ]">
            FAQ
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-rideflow-text-light max-w-sm">
          Here are answers to the likeliest questions you may have
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              What is RideFlow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              ENIQO offers affordable property inspections starting from ₦5,000.
              The exact cost depends on the property size and location. We
              ensure transparent pricing with no hidden fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How can Rideflow help my company?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              A typical property inspection takes 30-45 minutes. Our agents
              conduct thorough inspections covering structural integrity,
              plumbing, electrical systems, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How can I use Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              All agents on ENIQO are verified and vetted by our team. They
              undergo background checks and maintain high ratings from previous
              inspections. We also provide detailed profiles and reviews.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              Do I need a large fleet to use Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              ENIQO covers all major areas in Abuja including Wuse, Gwarinpa,
              Asokoro, Maitama, Jabi, and surrounding areas. We're expanding our
              coverage to serve more neighborhoods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              Can my team be trained to use Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Our comprehensive reports include detailed photos, videos,
              structural assessments, utility checks, and recommendations.
              You'll receive the report within 24 hours of the inspection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How do I get started with Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
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
