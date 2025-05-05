import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from 'framer-motion';

import image5 from '../../assets/images/image5.png';
import image7 from '../../assets/images/image7.png';
import image9 from '../../assets/images/image9.png';
import image4 from '../../assets/images/image4.png';
import image8 from '../../assets/images/image8.png';
import image6 from '../../assets/images/image6.png';

const equipmentList = [
  {
    title: 'DX-T830 Wheel Loaders',
    description: 'Built for performance in rough terrains and heavy lifting.',
    image: image5,
  },
  {
    title: 'Excavator ZX-200',
    description: 'Precision excavation for any scale project—robust and reliable.',
    image: image9,
  },
  {
    title: 'Mini Skid Steer',
    description: 'Compact, powerful, and easy to maneuver—perfect for tight sites.',
    image: image8,
  },
  {
    title: 'Backhoe Loader BX-50',
    description: 'Versatile and efficient for digging, lifting, and material handling in tight spaces. Ideal for small to medium-scale projects.',
    image: image7,
  },
  {
    title: 'Bulldozer D3 Series',
    description: 'Powerful and durable, built to handle tough grading and earth-moving tasks with ease. Perfect for construction and mining projects.',
    image: image6,
  },
  {
    title: 'Forklift FX-1200',
    description: 'Heavy-duty and reliable for transporting materials across construction sites or warehouses. Excellent for high-capacity operations.',
    image: image4,
  },
];

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center gap-1 mb-2 text-[#EF8D2A] cursor-pointer">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          onClick={() => setRating(i + 1)}
          className={`w-5 h-5 ${i < rating ? 'fill-[#EF8D2A]' : 'stroke-[#EF8D2A]'}`}
        />
      ))}
    </div>
  );
}

function RentAndBuy() {
  return (
    <div className="px-4 md:py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <div className='flex items-center justify-center'>
          <MdOutlineHorizontalRule className='text-4xl' />
          <h2 className="text-xl text-[#EF8D2A] font-semibold">Rent or Buy</h2>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Flexible Rental or Purchase Options for Every Need
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get the best-in-class construction equipment—rent or buy as per your project needs. Power, durability, and efficiency—every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain rounded-md mb-4"
            />

            <hr className="border-t-2 border-[#EF8D2A] my-4" />

            <StarRating />

            <h2 className="text-xl font-semibold text-black">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>

            <div className="md:flex justify-between items-center mt-4">
              <button className="bg-black text-white px-8 py-1 mt-2 md:mt-0 cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200">
                <a href="tel:+916283381082" className="flex gap-2 items-center">Rental Now</a>
              </button>

              <button className="bg-black text-white px-8 py-1 mt-2 md:mt-0 cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200">
  <a
    href="https://wa.me/916283381082"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-2 items-center"
  >
    Rental Now
  </a>
</button>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RentAndBuy;
