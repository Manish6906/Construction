import React from 'react';
import image1 from '../../assets/images/image1.png';
import image3 from '../../assets/images/image3.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

function SecondSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full py-12"
      style={{ backgroundImage: `url(${image1})` }} id='test1'
    >
      <div className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

        {/* Left Text Section */}
        <div className="text-white max-w-2xl  mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-6 md:w-7 h-1 bg-black "></span>
            <h3 className="text-sm  lg:text-2xl font-semibold">
              Welcome to <span className='bg-black text-white px-2 py-1 rounded inline-block animate-bounce'>Tanish Enterprise</span>
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl text-center md:text-left lg:text-6xl mt-5  font-bold text-black lg:leading-16 mb-4">
            We Provide <br /> Industry 
          </h1>
          <h2 className="text-md  lg:text-2xl mb-6 text-center md:text-left md:w-4/5 xl:w-5/6">
          Focused Heavy Equipment Services
          Specialized Equipment Solutions for Public & Private Projects.


          </h2>

          <Link to="test3" smooth={true} duration={500} >
         <div className='flex justify-center sm:justify-start'>
         <button className="bg-black text-white py-2 cursor-pointer px-8 rounded inline-flex items-center gap-2 hover:bg-gray-800 transition">
            Learn More <ArrowRight size={18} />
          </button>
         </div>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:translate-x-2 md:translate-y-18 transition-all">
          <img
            src={image3}
            alt="image3"
            className="w-full max-w-sm  md:max-w-5xl"
          />
        </div>

      </div>
    </div>
  );
}

export default SecondSection;