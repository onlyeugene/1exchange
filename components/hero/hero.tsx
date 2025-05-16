import React from "react";
import Container from "../ui/container";
// import Image from "next/image";
// import { images } from "@/lib/constant";

const Hero = () => {
  return (
    <main className="bg-[#0d7fa3] md:pt-30 md:pb-20 pt-20 pb-10 text-white h-[70vh] md:h-auto flex items-center justify-center ">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="">
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              className="md:text-[1rem] text-sm"
            >
              Sell Gift Cards, Get Cash Instantly 💰
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="md:text-[62px] text-3xl font-bold py-4 leading-tight"
            >
              Secured and <br /> Trusted Exchange <br />
              Platform
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="md:text-[1.5rem] text-lg font-medium"
            >
              Trade your digital currency and redeem your cards with us for{" "}
              <br className="md:block hidden" /> fast payments, in minutes.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="flex gap-4 my-2 w-full"
            >
              <input
                className="bg-white border-gray-300 border md:px-5 px-2 md:pr-20 pr-0 md:py-3 py-2 rounded-md text-gray-500 outline-none md:text-lg text-sm"
                placeholder="Trading amount"
              />
              <button className="bg-[#0f98c1] text-white md:px-4 px-2 md:py-2 py-1 rounded-md md:text-lg text-sm ">
                Exchange
              </button>
            </div>
          </div>

          {/* <div className="relative -right-[300px]">
            <Image src={images.bgHero} alt="hero" className="w-[700px]" />
          </div> */}
        </div>
      </Container>
    </main>
  );
};

export default Hero;
