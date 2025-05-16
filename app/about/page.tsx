import Container from "@/components/ui/container";
import { images } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const aboutSections = [
  {
    title: "One Exchange is Ready for Mass Transactions",
    description:
      "Don`t be afraid try something new! Cryptocurrency industry is growing and has experts to guide you.",
  },
  {
    title: "Ultra-Fast one-off/multiple Transactions",
    description:
      "It`s a new world in trading: all deals are suited to make transactions even easier for you.",
  },
  {
    title: "Decentralized & Open-Source Currency Trading",
    description:
      "The system and trading cannot be stopped. Every aspect is transparent.",
  },
  {
    title: "Completely Secured and Privacy-Focused Transactions",
    description:
      "The important part of cryptocurrency is privacy and anonymity – the main focus of a financial transaction.",
  },
  {
    title: "Active Transaction Team with Many Contributors",
    description:
      "The basic idea is that you can always count on our team for response at anytime of the day.",
  },
  {
    title: "Excellent Support from the Team",
    description:
      "Customer satisfaction is the key to business success. Service is the most important factor in platform viability.",
  },
];

const About = () => {
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
            Experience the excitement at the height of <br className="min-[1130px]:block hidden"/> digital assets
            trading.
          </h1>
          <p className="text-white text-sm container">
            We are a dedicated team of crypto enthusiasts who are passionate
            about the future of digital assets, <br className="md:block hidden"/> and we serve you with the
            best experience.
          </p>
        </div>
        {/* <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="flex gap-4 my-2 w-full container"
            >
              <input
                className="bg-white border-gray-300 border md:px-5 px-2 md:pr-20 pr-0 md:py-3 py-2 rounded-md text-gray-500 outline-none md:text-lg text-sm"
                placeholder="Trading amount"
              />
              <button className="bg-[#0f98c1] text-white md:px-4 px-2 md:py-2 py-1 rounded-md md:text-lg text-sm ">
                Exchange
              </button>
            </div> */}
      </div>
      <Container>
        <div className="flex items-center gap-4 flex-col min-[1395px]:flex-row">
          <div className="w-full min-[1395px]:w-1/2">
            <Image
              src={images.bitcoinBg}
              alt="hero-image"
              width={600}
              height={600}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="false"
            className="w-full min-[1395px]:w-1/2"
          >
            <div className="flex items-center gap-2 ">
              <div className="border w-10 h-1 bg-amber-500 border-amber-500" />
              <span className="uppercase text-gray-600 font-poppins text-sm">
                01.{" "}
                <span className=" font-semibold text-gray-700"> Overview</span>
              </span>
            </div>
            <h1 className="text-gray-700 capitalize mt-4 font-poppins text-xl lg:text-2xl font-semibold">
              We are a Digital currency exchange platform you can trust
            </h1>
            {/* <h3 className="mt-2 text-gray-500 lg:text-xl text-base">
              NO amount is too big or small for exchange
            </h3> */}
            <p className="mt-2 text-gray-400 font-poppins text-sm">
              We at One Exchange are a team of experienced professionals who are
              dedicated to providing the best possible service to our clients.We
              are here to make your trade easy and stress free, regardless of
              the amount, we got you covered.
            </p>
          </div>
        </div>

        <div className="my-30 flex flex-col min-[1395px]:flex-row md:gap-10 gap-4">
          <div className="flex flex-col  gap-2 w-full min-[1395px]:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
          >
           <div className="flex items-center gap-2">
           <div className="border w-10 h-1 bg-amber-500 border-amber-500" />
            <span className="uppercase text-gray-600 font-poppins text-sm">
              02.{" "}
              <span className=" font-semibold text-gray-700"> Our Mission</span>
            </span>
           </div>
            <h1 className="text-gray-700 capitalize mt-4 font-poppins text-xl lg:text-2xl font-semibold">
              Why trade with us?
            </h1>

            <p>
              Our mission is to provide the best possible service to our
              clients. We are here to make your trade easy and stress free,
              regardless of the amount, we got you covered.
              <Image
                src={images.aboutBg}
                alt="hero-image"
                width={600}
                height={600}
                className="object-cover bg-[#0d7fa3] mt-10"
              />
            </p>
          </div>
          <div className="w-full min-[1395px]:w-1/2 grid grid-cols-2 gap-4 mt-10"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="false"
          >
          {aboutSections.map((section) => (
            <div key={section.title} className="border py-4 px-3 bg-white">
              <h2 className="font-bold text-gray-700 min-[1395px]:text-base text-sm">{section.title}</h2>
              <p className="text-xs">{section.description}</p>
            </div>
          ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
