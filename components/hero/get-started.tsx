"use client";

import React from "react";
import Container from "../ui/container";
import { icons } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";

const GetStarted = () => {
  const cards = [
    {
      title: "Bitcoin Exchange",
      subtitle: "Click to start trade",
      icon: icons.btc,
    },
    {
      title: "Gift Card Exchange",
      subtitle: "Click to start trade",
      icon: icons.giftcard,
    },
    {
      title: "Cashpp Exchange",
      subtitle: "Click to start trade",
      icon: icons.cashapp,
    },
    {
      title: "Paypal Exchange",
      subtitle: "Click to start trade",
      icon: icons.paypal,
    },
  ];

  const buySteps = [
    {
      title: "Click on the exchange button",
      subtitle: "Click on the exchange button to start trading",
      // icon: icons.user
    },
    {
      title: "Get redirected to the exchange chat box",
      subtitle:
        "Chatting with our support team to get the best exchange rate is easy and fast",
      // icon: icons.user
    },
    {
      title: "Enter the amount you want to exchange and currency",
      subtitle:
        "Enter the amount you want to exchange and click on the exchange button",
      // icon: icons.user
    },
  ];

  const StepperCard = () => {
    const [hovered, setHovered] = React.useState<number | null>(null);

    return (
      <div className="w-full  mt-15">
        {/* Stepper - only on md+ */}
        <div className="hidden md:flex items-center justify-between mb-8">
          {buySteps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div
                // data-aos="fade-left"
                // data-aos-duration="1000"
                // data-aos-delay="100"
                // data-aos-once="false"
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200
                  ${
                    hovered === idx
                      ? "bg-[#0f98c1] border-[#0f98c1] text-white scale-110 shadow-lg"
                      : "bg-white border-gray-300 text-gray-700"
                  }
                `}
              >
                <span className="font-bold text-lg">{idx + 1}</span>
              </div>
              {idx < buySteps.length - 1 && (
                <div
                  className="flex-1 h-1 bg-gray-300 mx-2"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  data-aos-once="false"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cards */}
        <div className="flex gap-6 text-center mx-auto hover:text-white flex-col md:flex-row">
          {buySteps.map((step, idx) => (
            <React.Fragment key={step.title}>
              {/* Step number above card for mobile only */}
              <div
                className={
                  `flex md:hidden items-center justify-center w-10 h-10 rounded-full border-2 mx-auto mb-2 transition-colors  duration-200 ` +
                  (hovered === idx
                    ? "bg-[#0f98c1] border-[#0f98c1] text-white scale-110 shadow-lg"
                    : "bg-white border-gray-300 text-gray-700")
                }
              >
                <span className="font-bold text-lg">{idx + 1}</span>
              </div>
              <motion.div
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: idx * 0.15 }}
                // viewport={{ once: true, amount: 0.3 }}
                className={`items-center gap-4 p-4 border border-gray-200 bg-white shadow transition-transform duration-200 cursor-pointer w-full flex flex-col md:flex-row
                  ${
                    hovered === idx
                      ? "scale-105 border-[#0f98c1] shadow-sm md:hover:bg-[#0f98c1] hover:bg-none text-white transition-all duration-200 "
                      : "hover:scale-105 hover:border-[#0f98c1] transition-all duration-200"
                  }
                `}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="w-full">
                  <h2
                    className={`font-semibold text-lg transition-colors duration-200 ${
                      hovered === idx ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {step.title}
                  </h2>
                  <p
                    className={`text-sm transition-colors duration-200 ${
                      hovered === idx ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-20 bg-gray-100/50">
      <Container>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
          className="w-full text-center"
        >
          <div className="flex items-center gap-2 text-center justify-center">
            <div className="border w-10 h-1 bg-amber-500 border-amber-500" />
            <span className="uppercase text-gray-600 font-poppins text-sm">
              02.{" "}
              <span className=" font-semibold text-gray-700"> Get Started</span>
            </span>
          </div>
          <h1 className="text-gray-700 capitalize mt-4 text-xl lg:text-2xl font-semibold">
            Get Started with One Exchange
          </h1>
          {/* <h3 className="mt-2 text-gray-500 lg:text-xl text-base">
            NO amount is too big or small for exchange
          </h3> */}
          <p className="mt-2 text-gray-400 text-sm ">
            One Exchange system is built and tailored to serve and fully satisfy
            you. Our trading is seamless and with no hassles,
            <br className="md:block hidden" />
            We got you covered.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-center justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full border border-gray-100 rounded-[1px] p-4 shadow-sm flex items-center gap-2 h-40 bg-white"
            >
              <Image src={card.icon} alt={card.title} width={50} height={50} />
              <div className="w-full">
                <h2 className="text-gray-700 font-semibold text-lg">
                  {card.title}
                </h2>
                <p className="text-gray-400 text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h1 className="text-gray-700 font-semibold text-lg text-center uppercase">
            Buy and sell in three steps
          </h1>
          <div className="border w-40 h-1 bg-amber-500 border-amber-500 items-center justify-center flex mx-auto mt-3" />

          <StepperCard />
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
