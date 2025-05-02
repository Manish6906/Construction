import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const features = [
  "Affordable Rates: Transparent pricing with no hidden charges",
  "Fast Delivery: Quick response and flexible rental plans",
  "Trusted Service: Well-maintained machines and expert support",
  "Customer Satisfaction: We ensure every client is 100% satisfied",
];

function RightSection() {
  return (
    <section className="p-6 py-10  "> {/* Increased padding */}
      <div className="flex  items-center justify-center md:justify-start text-[#EF8D2A] mb-1 md:mb-4"> {/* Increased gap and margin */}
        <MdOutlineHorizontalRule className="text-4xl" /> {/* Increased icon size */}
        <p className="text-sm md:text-4xl font-semibold">Why Choose Tanish Enterprise</p> {/* Increased text size */}
      </div>

      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-4 leading-7 text-center md:text-start md:leading-10 lg:leading-12"> {/* Increased font size */}
      Reliable Construction Equipment Rentals in Punjab

      </h1>

      <p className="text-black mb-3 lg:mb-7 max-w-2xl text-lg leading-8 px"> {/* Increased margin and text size */}
        
     Tanish Enterprise offers trusted, affordable, and efficient equipment hire services across Bathinda and nearby areas. 
     Here’s why clients prefer us:</p>
     <h2 className="text-black mb-3 lg:mb-7 max-w-2xl text-lg leading-8 px">Wide Range of Machinery: JCB, Excavator, Hydra, Dozer, Roller & more</h2>
     

      <ul className="space-y-6"> {/* Increased space between list items */}
        {features.map((item, index) => (
          <li key={index} className="flex gap-4 items-center text-sm md:text-lg"> {/* Increased gap and font size */}
            <FaCheck className="text-[#EF8D2A] text-2xl" /> {/* Increased icon size */}
            <span>{item}</span>
          </li>
        ))}
      </ul>
 {/* <button className='text-center flex items-center  cursor-pointer hover:bg-[#2f2c2c] text-white mt-5 md:mt-10 gap-4 bg-[#141414] py-2 px-4 md:px-10'>
    Learn More  <FaArrowRight />
  </button> */}

     
      
    </section>
  );
}

export default RightSection;
