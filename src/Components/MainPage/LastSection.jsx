import React, { useState } from 'react';
import image from '../../assets/images/Rectangle 254.png';
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { FaPlus, FaMinus } from "react-icons/fa6"; // Also import FaMinus for open state

function LastSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I determine which equipment is right for my project?",
      answer: "Contact our team for a free consultation Share your project type, scale, and site conditions We’ll recommend suitable equipment based on efficiency and safety Site visits can be arranged if needed."
    },
    {
      question: "What is the rental process for your equipment?",
      answer: "Choose the equipment you need Get a customized quote Sign the rental agreement Schedule delivery or pickup Enjoy 24/7 support during the rental period."
    },
    {
      question: "Do you provide operators with the equipment?",
      answer: "Yes, trained and certified operators are available upon request Operator charges are included in the quote if required All operators follow strict safety protocols Ideal for clients without in-house machine operators."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5 md:flex items-center justify-evenly gap-10 sm:mt-20 md:mt-30 lg:mt-70">

      {/* Left Section */}
      <div className="relative">
        <img src={image} alt="Machine at Work" className="w-full h-auto" />

        <div className="absolute left-[50%] transform -translate-x-[50%] bg-white cursor-pointer -bottom-7 max-w-[400px] w-full px-4 py-3 flex items-center  gap-2">
   <div className='bg-[#EF8D2A] w-full p-4 flex items-center justify-center gap-6'>
      <FaRegPlayCircle className="text-3xl text-white" />
      <p className="text-white text-sm font-semibold">See Our Machines at Work</p>
   </div>
</div>



      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 max-w-xl">
        <div className="flex items-center md:justify-start justify-center gap-1 mb-4">
          <MdOutlineHorizontalRule className="text-xl xl:text-2xl text-[#EF8D2A]" />
          <h3 className="text-sm xl:text-2xl uppercase font-semibold text-[#EF8D2A]">
            Frequently Asked Questions
          </h3>
        </div>

        <h1 className="text-3xl font-bold mb-4 xl:text-6xl xl:leading-20 text-center md:text-start">Quick Answers, Quick Solutions.</h1>

        <p className="text-gray-600 mb-6 text-center md:text-start">
        We know your time is valuable. That’s why we’ve gathered the most frequently asked questions to guide you through our rental process—quickly and confidently.
        </p>

        <div className="bg-black text-white flex items-center justify-between px-4 py-3 mb-4">
          <p className="text-sm">What types of heavy equipment do you offer for rent?</p>
          <MdOutlineHorizontalRule className="text-xl" />
        </div>

        <p className="text-gray-600 mb-6">
        We offer a wide range of heavy equipment, including excavators, bulldozers, cranes, loaders, and more — perfect for construction, industrial, or infrastructure projects.
        </p>

        {/* FAQ Accordion */}
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-[#EF8D2A] mb-4 rounded-lg overflow-hidden transition-all duration-300">
            <div 
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#ef8d2a20] transition"
            >
              <p className="text-sm font-medium">{faq.question}</p>
              {openIndex === index ? (
                <FaMinus className="text-[#EF8D2A]" />
              ) : (
                <FaPlus className="text-[#EF8D2A]" />
              )}
            </div>
            <div
              className={`px-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LastSection;
