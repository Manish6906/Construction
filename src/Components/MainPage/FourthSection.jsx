import React from 'react';
import CountUp from 'react-countup';
import bgImage from '../../assets/images/image10.png';
import { MdOutlineHorizontalRule } from 'react-icons/md';

function FourthSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: Counters */}
          <div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold">
                <CountUp end={98} duration={2} suffix="%" />
              </h1>
              <p className="text-gray-300 mt-2">Satisfied Clients</p>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold">
                <CountUp end={100} duration={2.5} suffix="%" />
              </h1>
              <p className="text-gray-300 mt-2">Project Completion</p>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold">
                <CountUp end={100} duration={3} suffix="%" />
              </h1>
              <p className="text-gray-300 mt-2">Client Retention</p>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col max-w-3xl text-center md:text-left">
            <div className='flex items-center justify-center md:justify-start'>
            <MdOutlineHorizontalRule className="text-4xl mb-2 " />
            <h3 className="text-lg uppercase text-[#EF8D2A] mb-2 xl:text-2xl font-semibold">Who We Are</h3>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4 xl:text-6xl">
              Experts in Heavy Equipment Solutions.
            </h1>
            <p className="text-gray-300 text-base xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis gravida ante,
              quis porta mauris. Integer fermentum ligula in nunc hendrerit, at iaculis lorem
              tincidunt.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FourthSection;
