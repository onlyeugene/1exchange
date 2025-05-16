import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import { icons, images } from "@/lib/constant";

const HeroDetails = () => {
  const cards = [
    {
      title: "Speed",
      icon: icons.rocket,
      description: (
        <span>
          Instant, on-demand swift <br /> transactions
        </span>
      ),
    },
    {
      title: "Security",
      icon: icons.lock,
      description: (
        <span>
          100% Guarantee <br /> on all exchange
        </span>
      ),
    },
    {
      title: "Reliability",
      icon: icons.reliable,
      description: (
        <span>
          Reliable and secure <br /> transactions
        </span>
      ),
    },
    {
      title: "Support",
      icon: icons.support,
      description: (
        <span>
          24/7 customer <br /> support
        </span>
      ),
    },
    {
      title: "Cost",
      icon: icons.cost,
      description: (
        <span>
          Best rates <br /> available
        </span>
      ),
    },
  ];
  return (
    <div className="bg-gray-100 py-20">
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
                <span className=" font-semibold text-gray-700"> Welcome</span>
              </span>
            </div>
            <h1 className="text-gray-700 capitalize mt-4 font-poppins text-xl lg:text-2xl font-semibold">
              We are a Digital currency exchange platform you can trust
            </h1>
            <h3 className="mt-2 text-gray-500 lg:text-xl text-base">
              NO amount is too big or small for exchange
            </h3>
            <p className="mt-2 text-gray-400 font-poppins text-sm">
              We at One Exchange are a team of experienced professionals who are
              dedicated to providing the best possible service to our clients. We are here to make your trade
              easy and stress free, regardless of the amount, we got you
              covered.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 min-[1395px]:grid-cols-5 gap-5 justify-center mt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
          data-aos-once="false"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="border rounded-md text-center border-gray-200 bg-white py-4 px-10"
            >
              <div className="flex items-center gap-2 flex-col">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={50}
                  height={50}
                />
                <h1 className="text-gray-700 text-lg font-semibold">
                  {card.title}
                </h1>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeroDetails;
