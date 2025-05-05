import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card4.png';
import card4 from '../../assets/images/card3.png';

const cards = [
  {
    image: card1,
    title: 'Wheel Loader',
    text: 'Powerful for loading, lifting, and transporting materials on construction sites. Ideal for earthmoving and site prep.',
  },
  {
    image: card2,
    title: 'Drum Roller',
    text: 'Perfect for roadwork and compaction tasks. Our vibratory rollers ensure solid, smooth surfaces for all groundwork.',
  },
  {
    image: card3,
    title: 'Excavator',
    text: 'Versatile machine for digging, trenching, and demolition. Ideal for both residential and commercial construction projects.',
  },
  {
    image: card4,
    title: 'Backhoe Loader',
    text: 'Versatile and compact, perfect for lifting, and material handling in tight spaces. Ideal for small to medium-scale projects like landscaping and construction.',
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Card = ({ image, title, text }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ scale: 1.05 }}
    className='w-full max-w-sm bg-[#F7F7F7] text-black px-6 py-8 md:px-4 shadow-2xl cursor-pointer'
  >
    <img src={image} alt={title} className='w-full h-32 object-contain mb-4' />
    <h2 className='text-sm lg:text-xl font-bold mb-2'>{title}</h2>
    <p className='mb-3 md:mb-1 text-[10px] lg:text-sm'>{text}</p>
  </motion.div>
);

function FirstSection() {
  return (
    <motion.div
      className='py-10 px-4'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center'>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </motion.div>
  );
}

export default FirstSection;
