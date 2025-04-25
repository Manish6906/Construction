import React from 'react';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import { ArrowRight } from 'lucide-react';

function FirstSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full h-80 flex items-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Text Section */}
        <div className="text-white max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex-1 h-px bg-white opacity-20"></span>
            <h3 className="text-lg md:text-xl whitespace-nowrap">Welcome to Tanish Enterprise</h3>
          </div>

          <h1 className="text-3xl text-black md:text-5xl font-bold mb-2">
            We Provide <br /> Industry Focused
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">Service For Public & Private Clients</h2>

          <button className="bg-black text-white py-2 px-9 rounded inline-flex items-center gap-2">
            Learn More <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 md:mt-0 md:ml-8 transform md:translate-x-6 md:translate-y-6 transition">
          <img src={image2} alt="image2" className="w-full max-w-sm md:max-w-md" />
        </div>

      </div>
    </div>
  );
}

export default FirstSection;
