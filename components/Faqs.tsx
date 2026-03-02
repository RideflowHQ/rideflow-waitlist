import Badge from "./custom/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TextAnimate } from "./ui/text-animate";

export default function Faqs({ background = false }: { background?: boolean }) {
  return (
    <section
      id="faq"
      className={`py-12 md:py-18 ${background ? "bg-white" : "bg-body-gray"}`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:flex-1 flex flex-col items-start gap-4 md:gap-6">
          <Badge text="FAQs" color={background ? "bg-body-gray" : "bg-white"} />

          <TextAnimate
            animation="blurIn"
            by="word"
            startOnView
            once
            className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground font-medium"
          >
            Here are answers to the likeliest questions you may have
          </TextAnimate>
        </div>
        <div className="w-full lg:flex-1">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                What is RideFlow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Rideflow is a logistics and transport management platform that
                helps businesses and individuals manage their transportation
                needs. We offer live vehicle tracking, rider management, HR
                tools for logistics companies, and a seamless dashboard for
                daily operations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                How do I sign up on Rideflow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Individuals can download the Rideflow app or visit our website
                to create an account. Businesses can register directly on the
                platform and onboard staff, riders, and vehicles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                What services does Rideflow provide?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                We provide rider and vehicle registration, live GPS tracking, HR
                tools, metrics and performance reports, delivery and transport
                operations management, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                How do I track my delivery or vehicle?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Once you log into your dashboard or mobile app, you can see
                real-time updates and live tracking of your delivery or fleet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Is Rideflow available nationwide?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                We are starting operations in Lagos and will gradually expand to
                other states and regions across Nigeria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                What are the benefits for logistics companies using Rideflow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Streamlined HR and payroll management, fleet and rider tracking
                in real time, data-driven insights and performance reports,
                reduced inefficiencies, and improved customer satisfaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                What are the benefits for logistics companies using Rideflow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Streamlined HR and payroll management, fleet and rider tracking
                in real time, data-driven insights and performance reports,
                reduced inefficiencies, and improved customer satisfaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                How much does it cost to use Rideflow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Pricing depends on whether you are an individual customer or a
                registered business. Businesses are billed based on fleet size
                and features required. Individuals pay per ride or delivery
                request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger
                className={`hover:no-underline text-left text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Can I nominate riders or staff to join Rideflow?
              </AccordionTrigger>
              <AccordionContent
                className={`text-muted-foreground text-sm sm:text-base p-4 sm:p-6 ${background ? "bg-body-gray" : ""}`}
              >
                Yes, logistics companies can onboard their existing riders and
                staff. Independent riders can also register and work with
                businesses on the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
