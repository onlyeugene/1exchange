'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Bayo",
    title: "Crypto Investor",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    quote:
      "1xchange made my first crypto purchase so easy! The interface is beautiful and the support team is fantastic.",
  },
  {
    name: "Chisom",
    title: "Blockchain Developer",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    quote:
      "I love the transparency and speed of transactions. 1xchange is my go-to platform for trading digital assets.",
  },
  {
    name: "Aishat",
    title: "Day Trader",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    quote:
      "The real-time market data and news section keep me ahead of the curve. Highly recommended!",
  },
  {
    name: "Ola",
    title: "Crypto Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "Security and privacy are my top priorities. 1xchange delivers on both fronts with ease.",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute" as const,
  }),
};

const Testimonials = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev, ]) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return [next, newDirection];
    });
  };

  const t = testimonials[index];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#0d7fa3]">
          What Our Users Say
        </h2>
        <div className="relative flex flex-col items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white shadow-lg p-8 flex flex-col items-center text-center "
            >
              <Image
                width={100}
                height={100}
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-[#0d7fa3] mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-[#0d7fa3]">{t.name}</span>
                <div className="text-xs text-gray-400">{t.title}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-[#0d7fa3] text-white hover:bg-[#117ca6] transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-[#0d7fa3] text-white hover:bg-[#117ca6] transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-[#0d7fa3]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
