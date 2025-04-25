import React from 'react';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import { ArrowRight } from 'lucide-react';

function FirstSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full flex items-center py-12 sm:py-1"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:pl-20">

        {/* Left Text Section */}
        <div className="text-white max-w-xl w-full px-4 sm:px-0 text-center md:text-left mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-10 h-1 bg-white font-bold"></span>
            <h3 className="text-xl md:text-2xl font-medium">
              Welcome to Tanish Enterprise
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
            We Provide <br /> Industry Focused
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-8">
            Service For Public & Private Clients
          </h2>

          <div className="flex justify-center mb-5 md:justify-start">
           <button className="bg-black text-white py-2 px-8 lg:py-3 lg:px-12 text-base lg:text-lg rounded inline-flex items-center gap-4">
            Learn More <ArrowRight size={25} />
           </button>
           </div>

        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-auto md:ml-8 transform md:translate-x-6 md:translate-y-6 transition">
          <img
            src={image2}
            alt="image2"
            className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default FirstSection;
