import React from 'react';
import firstImage from '../../assets/images/firstImage.png';
import secondImage from '../../assets/images/secondImage.png';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { ArrowRight } from 'lucide-react';

import CountUp from 'react-countup';
import realImage from '../../assets/images/Realiamge.jpg';
import realimag2 from '../../assets/images/realImage2.jpg';
import final from '../../assets/images/Tanish Enterprises.jpg';

function AboutSection() {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20" id='test3'>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left section */}
        <div className="w-full md:w-1/2 space-y-2 ">
          <div className="text-[#EF8D2A] flex items-center justify-center md:justify-start text-lg font-medium">
            <MdOutlineHorizontalRule className="text-4xl" />
            About Us
          </div>
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-center md:text-start font-bold leading-tight">
          Leaders in Construction Equipment Rental – Bathinda, Punjab

          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Box Section */}
            <div className="w-full md:w-1/2 text-center">
              <div className="px-5 py-4 border-b-2 border-r-2 border-gray-300">
              <CountUp end={15} duration={2.5} suffix="+" className='text-2xl lg:text-5xl font-extrabold text-[#EF8D2A]' />
                {/* <h2 className="text-2xl lg:text-5xl font-extrabold text-[#EF8D2A]">15+</h2> */}
                <p>Years of </p>
                <span>Excellence</span>
              </div>
              <div className="px-5 py-4 border-r-2 border-gray-300">
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Our Vision</h2>
                <p className="text-sm text-gray-600">
                To become the most preferred equipment rental partner in Punjab and beyond.
                </p>
               
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-2 mt-6">Our Mission</h2>
                <p className="text-sm text-gray-600">
                To power construction projects with dependable machinery and unmatched service quality.
                </p>

              
              </div>
            </div>

            {/* Description */}
            <div className="text-sm xl:text-[17px]  text-gray-700 text-center  md:text-start space-y-4 mt-6 md:mt-0 w-full md:w-1/2">
  <p>
  Tanish Enterprise is a trusted name in the field of heavy machinery and construction equipment rental. Based in Bathinda, Punjab, we specialize in providing high-performance machines like JCBs, Excavators, Hydra Cranes, Dozers, and Rollers to contractors, builders, and government projects.

  </p>
  <p>
  With a strong focus on reliability, affordability, and customer satisfaction, we have built a reputation for delivering well-maintained equipment on time, every time. Whether it's road construction, land development, or industrial work – we ensure you get the right equipment for the job.

  </p>
</div>

          </div>

          <div className='flex justify-center md:justify-start mt-5'>
          {/* <button className="bg-black cursor-pointer text-white py-2 px-6 md:px-15 xl:px-27 inline-flex items-center gap-2 hover:bg-gray-800 transition">
            Learn More <ArrowRight size={18} />
          </button> */}
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 m md:mt-0 relative flex justify-center">
          <img src={realImage} alt="First" className="w-full rounded-lg   border-8 border-white shadow-md max-w-[500px]" />
          <img
            src={final}
            alt="Second"
            className="absolute bottom-[1rem] sm:bottom-[2rem] h-40 lg:h-60 xl:h-80  border-6 border-white object-cover -right-2 sm:right-10 md:-right-15 lg:-right-20 w-2/4 sm:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
