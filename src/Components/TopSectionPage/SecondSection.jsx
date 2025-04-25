import React from 'react';
import image1 from '../../assets/images/image1.png';
import image3 from '../../assets/images/image3.png';
import { ArrowRight } from 'lucide-react';

function SecondSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full py-12"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

        {/* Left Text Section */}
        <div className="text-white max-w-2xl text-center md:text-left mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="w-10 h-1 bg-black font-bold"></span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Welcome to Tanish Enterprise
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
            We Provide <br /> Industry Focused
          </h1>
          <h2 className="text-md sm:text-lg md:text-2xl mb-6">
            Serving for over 12 years, 98% of companies choose us for our tough equipment
            and top-tier service, delivering exceptional results every time.
          </h2>

          <button className="bg-black text-white py-2 px-8 rounded inline-flex items-center gap-2 hover:bg-gray-800 transition">
            Learn More <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-auto md:translate-x-2 md:translate-y-18 transition-all">
          <img
            src={image3}
            alt="image3"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl"
          />
        </div>

      </div>
    </div>
  );
}

export default SecondSection;