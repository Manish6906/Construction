import React from 'react';
import firstImage from '../../assets/images/firstImage.png';
import secondImage from '../../assets/images/secondImage.png';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
function AboutSection() {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20" id='test3'>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left section */}
        <div className="w-full md:w-1/2 space-y-2 ">
          <div className="text-[#EF8D2A] flex items-center text-lg font-medium">
            <MdOutlineHorizontalRule className="text-4xl" />
            About Us
          </div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Excellence in Tanish Enterprise Rentals.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="text-sm xl:text-[17px]  text-gray-700 text-center  md:text-start space-y-4 mt-6 md:mt-0 w-full md:w-1/2">
  <p>
    Suspendisse nec odio vel arcu tempor posuere. Quisque venenatis efficitur leo quis luctus. Nulla maximus,
    purus eu sodales gravida, augue purus atnic elementum ante, quis aliquet nulla urna ac dui.
  </p>
  <p>
    Donec nec sem at eros porta finibus eu et felis. Cras quis libero eu ex euismod tempor. Aliquam eu justo
    quis nisl euismod. Etiam quis mattis ante.
  </p>
</div>

          </div>

          <div className='flex justify-center md:justify-start mt-5'>
          <button className="bg-black cursor-pointer text-white py-2 px-6 md:px-15 xl:px-27 inline-flex items-center gap-2 hover:bg-gray-800 transition">
            Learn More <ArrowRight size={18} />
          </button>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 m md:mt-0 relative flex justify-center">
          <img src={firstImage} alt="First" className="w-full rounded-lg shadow-md max-w-[500px]" />
          <img
            src={secondImage}
            alt="Second"
            className="absolute bottom-[1rem] sm:bottom-[3rem] -right-2 sm:right-10 md:-right-15 lg:-right-20 w-2/4 sm:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
