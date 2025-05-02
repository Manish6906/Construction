import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Ellipse95 from '../../assets/images/Ellipse 95.png';
import Ellipse96 from '../../assets/images/Ellipse 96.png';
import Ellipse97 from '../../assets/images/Ellipse 97.png';
import Vector from '../../assets/images/Vector.png';
import { Star } from 'lucide-react';
import { MdOutlineHorizontalRule } from "react-icons/md";


// Testimonials data
const testimonialsData = [
  {
    text: 'Outstanding service and top-notch machinery! Tanish Enterprises made our project run smoother than ever. The equipment was reliable, and their team was extremely helpful.',
    name: 'Anjali K',
    role: 'Site Supervisor',
    image: Ellipse95,
  },
  {
    text: 'I’ve rented from other companies before, but Tanish Enterprises stands out for their punctuality, machine quality, and customer support. Highly recommended!',
    name: 'Ravi M.',
    role: 'Construction Manager',
    image: Ellipse96,
  },
  {
    text: 'From the first call to final delivery, everything was seamless. The excavator we rented worked perfectly throughout the project. Great experience overall.',
    name: 'Dinesh R.',
    role: ' Project Engineer',
    image: Ellipse97,
  },
  {
    text: 'Tanish Enterprises has become our go-to for all heavy equipment needs. Their commitment to quality and service is unmatched Great service and easy process!.',
    name: 'Sneha P.',
    role: 'Real Estate Developer',
    image: Ellipse95,
  },
  {
    text: 'Exceptional quality machines, competitive prices, and professional staff. Couldn’t ask for a better equipment partner Their equipment helped us meet our deadlines without any hassle.!',
    name: 'Rahul T.',
    role: ' Infrastructure Contractor',
    image: Ellipse96,
  },
  {
    text: 'Tanish Enterprises is a company you can trust. Their dedication to quality and customer satisfaction truly shows Everything from booking to return was smooth. Highly professional team!.',
    name: 'Rajeev S.',
    role: 'Operations Manager',
    image: Ellipse97,
  },
];

// Star rating component
function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-2 text-[#EF8D2A]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#EF8D2A] stroke-[#EF8D2A]" />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
   <div className='bg-gray-300' id='test4'>
     <div className="max-w-7xl mx-auto px-4 py-6 ">
      {/* Heading Section (Pushed down slightly using mt-10) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 mt-10">
        <div className="md:w-1/2 text-center md:text-left">
        <div className='flex justify-center items-center md:justify-start'>
        <MdOutlineHorizontalRule className='text-3xl' />
        <h3 className="text-[#EF8D2A] text-lg font-semibold mb-1">Testimonials</h3>
        </div>
  
          {/* Added Line Below the Heading */}
          
          <h1 className="text-2xl lg:text-5xl font-bold text-black mb-2">What Our Clients Say</h1>
        </div>
        <div className="md:w-1/2 text-gray-800 text-center md:text-start mt-4 md:mt-0">
          <p>
          Discover why our clients consistently trust Tanish Enterprises for their equipment rental needs. Our dedication to quality, reliability, and customer satisfaction has made us a preferred partner for projects of all sizes.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-1 w-full bg-black mb-14 " />

      {/* Testimonials Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="p-30 "
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white px-6 py-16 md:py-16 shadow-md flex flex-col text-left transition hover:scale-105 duration-300 h-full relative">
              {/* Star Rating */}
              <div className="mb-6">
                <StarRating />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-800 italic mb-4">“{testimonial.text}”</p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-9">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-medium text-black">{testimonial.name}</h2>
                  <p className="text-gray-800 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Vector Icon - Bottom Right */}
              <img
                src={Vector}
                alt="Vector"
                className="w-8 h-8  absolute bottom-20 right-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination-custom flex  justify-center mt-8" />
    </div>
   </div>
  );
}

export default Testimonials;
