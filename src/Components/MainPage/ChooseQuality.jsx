import React from 'react';
import image11 from '../../assets/images/image11.png';
import background from '../../assets/images/background.png';

function ChooseQuality() {
  return (
    <>
      {/* Main background div */}
      <div className="relative min-h-[550px] bg-cover bg-center bg-no-repeat bg-black opacity-90 flex flex-col justify-between items-center">
        
        {/* Black Overlay */}
        <div className="absolute inset-0" style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        {/* Content on top of background */}
        <div className="relative w-11/12 max-w-6xl flex flex-col md:flex-row items-center md:items-start mt-16 z-10 px-4">
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose Quality, </h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose Us!</h1>
            <p className="text-white mb-2 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#EF8D2C] text-white px-6 py-2 flex items-center gap-2 mt-4">
              Contact Us Now
              <span className="text-xl">➔</span>
            </button>
          </div>
        </div>

        {/* Bottom Center Image */}
        <div className="absolute left-1/2 xl:left-2/3 top-8/9 transform -translate-x-1/2 xl:-translate-x-2/3 -translate-y-1/2 w-full flex justify-center">
  <img src={image11} alt="image11" className="h-auto w-3/4 sm:w-2/3 md:w-7/8 lg:w-auto" />
</div>

      </div>
    </>
  );
}

export default ChooseQuality;
