import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card4.png';
import card4 from '../../assets/images/card3.png';

const cards = [
  {
    image: card1,
    title: 'Wheel Loader',
    text: 'Powerful  for loading, lifting, and transporting materials on construction sites. Ideal for earthmoving and site prep.',
  },
  {
    image: card2,
    title: 'Drum Roller',
    text: 'Perfect for roadwork and compaction tasks. Our vibratory rollers ensure solid, smooth surfaces for all groundwork.',
  },
  {
    image: card3,
    title: 'Excavator',
    text: 'Versatile machine for digging, trenching, and demolition. Ideal for both residential and commercial construction projects.',
  },
  {
    image: card4,
    title: 'Backhoe Loader',
    text: 'Versatile and compact, perfect for  lifting, and material handling in tight spaces. Ideal for small to medium-scale projects like landscaping and construction.',
  },
];

const Card = ({ image, title, text, }) => (
  <div className={`w-full max-w-sm bg-[#F7F7F7] text-black px-6 py-8 md:px-4 shadow-2xl transition hover:scale-105 hover:duration-200 cursor-pointer`}>
    <img src={image} alt={title} className='w-full h-32 object-contain mb-4' />
    <h2 className='text-sm lg:text-xl font-bold mb-2'>{title}</h2>
    <p className='mb-3  md:mb-1 text-[10px] lg:text-sm'>{text}</p>
    {/* <a href='#' className='text-[#EF8D2A] flex items-center gap-1 lg:gap-2 text-sm lg:text-xl font-medium hover:underline'>
      Learn More <FaArrowRight className='text-[10px] lg:text-sm' />
    </a> */}
  </div>
);

function FirstSection() {
  return (
    <div className='py-10 px-4 '>
      <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  justify-items-center '>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default FirstSection;
