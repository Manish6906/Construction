import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const features = [
  "Rent & Manage Equipment",
  "Real-Time Project Monitoring",
  "Trusted by Industry Leaders",
  "24/7 Customer Support"
];

function RightSection() {
  return (
    <section className="p-6 py-10  "> {/* Increased padding */}
      <div className="flex  items-center justify-center md:justify-start text-[#EF8D2A] mb-4"> {/* Increased gap and margin */}
        <MdOutlineHorizontalRule className="text-4xl" /> {/* Increased icon size */}
        <p className="text-2xl md:text-4xl font-semibold">Why Choose Us</p> {/* Increased text size */}
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-4 leading-7 text-center md:text-start md:leading-10 lg:leading-12"> {/* Increased font size */}
        Unmatched Reliability 
        for Every Project.
      </h1>

      <p className="text-gray-600 mb-3 lg:mb-7 max-w-2xl text-lg leading-8 px"> {/* Increased margin and text size */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis gravida ante, 
        quis pulvinar odio commodo efficitur. Donec nec sem at eros porta finibus eu et felis. 
        Cras quis libero eu ex euismod tempor. Aliquam eu justo quis nisl euismod vestibulum non quis odio.
      </p>

      <ul className="space-y-6"> {/* Increased space between list items */}
        {features.map((item, index) => (
          <li key={index} className="flex gap-4 items-center text-sm md:text-lg"> {/* Increased gap and font size */}
            <FaCheck className="text-[#EF8D2A] text-2xl" /> {/* Increased icon size */}
            <span>{item}</span>
          </li>
        ))}
      </ul>
 <button className='text-center flex items-center  cursor-pointer hover:bg-[#2f2c2c] text-white mt-5 md:mt-10 gap-4 bg-[#141414] py-2 px-4 md:px-10'>
    Learn More  <FaArrowRight />
  </button>

     
      
    </section>
  );
}

export default RightSection;
