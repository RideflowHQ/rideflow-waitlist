import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TextAnimate } from "./ui/text-animate";

export default function Faqs() {
  return (
    <div
      id="faq"
      className="flex flex-col md:flex-row justify-between items-start  md:px-10 gap-6 py-20  w-full max-w-screen-xl  mx-auto px-4"
    >
      <div className="flex flex-col items-start justify-center gap-2 max-w-2xl">
        <h2 className="text-7xl font-bold text-foreground">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#18191A] to-[#FFFFFF ]">
            FAQ
          </span>
        </h2>

        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-lg md:text-2xl text-rideflow-text-light max-w-sm"
        >
          Here are answers to the likeliest questions you may have
        </TextAnimate>
      </div>
      <div className="w-full max-w-2xl">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-left p-6 ">
              What is RideFlow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Rideflow is a logistics and transport management platform that
              helps businesses and individuals manage their transportation
              needs. We offer live vehicle tracking, rider management, HR tools
              for logistics companies, and a seamless dashboard for daily
              operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How do I sign up on Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Individuals can download the Rideflow app or visit our website to
              create an account. Businesses can register directly on the
              platform and onboard staff, riders, and vehicles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              What services does Rideflow provide?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              We provide rider and vehicle registration, live GPS tracking, HR
              tools, metrics and performance reports, delivery and transport
              operations management, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How do I track my delivery or vehicle?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Once you log into your dashboard or mobile app, you can see
              real-time updates and live tracking of your delivery or fleet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              Is Rideflow available nationwide?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              We are starting operations in Lagos and will gradually expand to
              other states and regions across Nigeria.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              What are the benefits for logistics companies using Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Streamlined HR and payroll management, fleet and rider tracking in
              real time, data-driven insights and performance reports, reduced
              inefficiencies, and improved customer satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              What are the benefits for logistics companies using Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Streamlined HR and payroll management, fleet and rider tracking in
              real time, data-driven insights and performance reports, reduced
              inefficiencies, and improved customer satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              How much does it cost to use Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Pricing depends on whether you are an individual customer or a
              registered business. Businesses are billed based on fleet size and
              features required. Individuals pay per ride or delivery request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="hover:no-underline text-left p-6">
              Can I nominate riders or staff to join Rideflow?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground p-6">
              Yes, logistics companies can onboard their existing riders and
              staff. Independent riders can also register and work with
              businesses on the platform.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
