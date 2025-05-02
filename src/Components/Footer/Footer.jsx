import React from 'react';
import footer from '../../assets/images/footerimg.png';
import { FaArrowRight, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-scroll';
import mainlogo from '../../assets/images/MainLogo.png';
import Logo1 from '../../assets/images/Logo1.png';


function Footer() {
  return (
    <footer
      className="relative mt-10 px-6 py-3 md:py-14 lg:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header CTA */}
        <div className="flex flex-col md:flex-row  items-start md:justify-between sm:items-center  mb-10 md:mb-0  md:gap-6">
  <div className=" md:justify-start ">
    <img src={Logo1} alt="Logo1" className="h-30 md:h-26 object-contain w-full" />
  </div>

  <h1 className="text-2xl lg:text-3xl font-bold  md:text-center mb-3 sm:mb-0  flex-1">
    Schedule Your Rental Today!
  </h1>

  
  <a 
    href="tel:+916283381082"
    className="flex items-center gap-2 px-6 py-2 bg-[#EF8D2A] hover:bg-[#e67e10] rounded transition-colors"
  >
    Make Appointment <FaArrowRight />
  </a>
 
</div>


        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-y-2 py-10">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold text-[#EF8D2A] mb-4">About Us</h2>
            <p className="font-medium leading-relaxed">
            At Tanish Enterprises, we specialize in delivering reliable, high-performance equipment tailored to your project needs. With a focus on quality, convenience, and outstanding customer service, we ensure your success every step of the way.
            </p>
          </div>

          {/* Links */}
          <div className=' md:flex flex-col items-center'>
            <h2 className="text-xl font-bold text-[#EF8D2A] mb-4 mr-4">Extra Links</h2>
            <ul className="space-y-2 font-medium">
              {['HOME', 'CHOOSE US', 'ABOUT US', 'TESTIMONIALS'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`test${idx + 1}`}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-[#EF8D2A]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-[#EF8D2A] mb-4">Contact Us</h2>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3" />
                ST.NO. 5, 16819, Basant Vihar, Bathinda-151005 (Punjab)
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:Sharma41321@gmail.com" className="hover:text-[#EF8D2A]">Sharma41321@gmail.com</a>
              </li>
              {['6283381082', '9780463277', '7837141321'].map((num, i) => (
                <li key={i} className="flex items-center">
                  <FaPhoneAlt className="mr-3" />
                  <a href={`tel:+91${num}`} className="hover:text-[#EF8D2A]">+91 {num}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 md:flex justify-center text-center text-sm font-medium space-y-4 md:space-y-0">
          {/* <div>
            <a href="#" className="hover:text-[#EF8D2A] mr-3">Terms & Conditions</a> |
            <a href="#" className="hover:text-[#EF8D2A] mx-3">Privacy Policy</a> |
            <a href="#" className="hover:text-[#EF8D2A] ml-3">FAQ</a>
          </div> */}
          <p>&copy; 2025 TANISH ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
