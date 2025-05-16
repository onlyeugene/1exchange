import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-[#0d7fa3] pt-40 pb-20 text-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-easing="ease-in-sine"
          data-aos-once="false"
        >
          <h1 className="text-white text-4xl font-bold container">
            Questions and Answers about our platform?
          </h1>
          <p className="text-white text-sm container">
            Do you have any questions about our platform? We are here to help
            you. see our FAQ section below.
          </p>
        </div>
      </div>
      <Container>
        <div className="border bg-white md:px-20 px-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700 md:text-lg text-base font-semibold">How can i trust you??</AccordionTrigger>
              <AccordionContent>
                We understand that business is totally based on trust, and that
                has been the structure of operation behind all transactions. Our
                team is made up of are professional traders that will guide you
                through the process via our live chat medium or WhatsApp
                messaging, depending on what suits your comfort.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-700 md:text-lg text-base font-semibold">How fast is the transaction?</AccordionTrigger>
              <AccordionContent>
              Once we receive your Bitcoin/load your gift card or your digital asset, the agreed amount will be sent to your bank account immediately. You would get an alert between 1 and 10 minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-gray-700 md:text-lg text-base font-semibold">Are you always available?</AccordionTrigger>
              <AccordionContent>
                Yes, we are always available to help you with your transactions 24/7.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-gray-700 md:text-lg text-base font-semibold">How can i get started?</AccordionTrigger>
              <AccordionContent>
                You can get started by clicking on the chatbox platform and then you can start trading.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default page;
