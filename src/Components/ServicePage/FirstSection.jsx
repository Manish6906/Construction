import React from 'react';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';

const cards = [
  {
    image: card1,
    title: 'Wheel Loader',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.',
  },
  {
    image: card2,
    title: 'Drum Roller',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.',
  },
  {
    image: card3,
    title: 'Excavator',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.',
  },
];

const Card = ({ image, title, text, customClass = '' }) => (
  <div className={`max-w-sm bg-[#F7F7F7] text-black px-4 py-4 shadow-xl rounded-xl transition-transform hover:scale-105 ${customClass}`}>
    <img src={image} alt={title} className=' w-40 h-28' /> {/* Reduced margin-bottom */}
    <h2 className='text-xl font-bold mb-2'>{title}</h2>
    <p className='mb-3 text-sm'>{text}</p> {/* Reduced margin-bottom */}
    <a href='#' className='text-[#EF8D2A] font-medium hover:underline'>
      Learn More
    </a>
  </div>
);

function FirstSection() {
  return (
    <div className='py-8 px-4 md:px-10'> {/* Reduced vertical padding */}
      <div className='flex flex-col gap-6'> {/* Reduced gap between cards */}
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            customClass={index === 1 ? ' md:ml-24' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default FirstSection;
