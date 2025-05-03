import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const features = [
  "Affordable Rates: Transparent pricing with no hidden charges",
  "Fast Delivery: Quick response and flexible rental plans",
  "Trusted Service: Well-maintained machines and expert support",
  "Customer Satisfaction: We ensure every client is 100% satisfied",
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

function RightSection() {
  return (
    <motion.section
      className="p-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center justify-center md:justify-start text-[#EF8D2A] mb-1 md:mb-4"
        variants={fadeUp}
        custom={0}
      >
        <MdOutlineHorizontalRule className="text-4xl" />
        <p className="text-sm md:text-4xl font-semibold">Why Choose Tanish Enterprise</p>
      </motion.div>

      <motion.h1
        className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-4 leading-7 text-center md:text-start md:leading-10 lg:leading-12"
        variants={fadeUp}
        custom={1}
      >
        Reliable Construction Equipment Rentals in Punjab
      </motion.h1>

      <motion.p
        className="text-black mb-3 lg:mb-7 max-w-2xl text-lg leading-8"
        variants={fadeUp}
        custom={2}
      >
        Tanish Enterprise offers trusted, affordable, and efficient equipment hire services across Bathinda and nearby areas.
        Here’s why clients prefer us:
      </motion.p>

      <motion.h2
        className="text-black mb-3 lg:mb-7 max-w-2xl text-lg leading-8"
        variants={fadeUp}
        custom={3}
      >
        Wide Range of Machinery: JCB, Excavator, Hydra, Dozer, Roller & more
      </motion.h2>

      <ul className="space-y-6">
        {features.map((item, index) => (
          <motion.li
            key={index}
            className="flex gap-4 items-center text-sm md:text-lg"
            variants={fadeUp}
            custom={index + 4}
          >
            <FaCheck className="text-[#EF8D2A] text-2xl" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Optional animated button */}
      {/* 
      <motion.button
        className='text-center flex items-center cursor-pointer hover:bg-[#2f2c2c] text-white mt-5 md:mt-10 gap-4 bg-[#141414] py-2 px-4 md:px-10'
        variants={fadeUp}
        custom={features.length + 4}
      >
        Learn More <FaArrowRight />
      </motion.button> 
      */}
    </motion.section>
  );
}

export default RightSection;
