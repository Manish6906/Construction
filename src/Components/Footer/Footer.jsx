import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import footer from '../../assets/images/footerimg.png';
import logo from '../../assets/images/Logo.png';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <footer className='relative mt-7 md:mt-15 px-6 py-10 lg:px-20' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content section */}
        <div className='relative z-10 text-white'>
          <div className='md:flex justify-between items-center mb-10'>
            <img src={logo} alt='footer logo' className="h-12" />
            <h1 className='text-xl lg:text-3xl font-bold text-center md:text-left'>Schedule Your Rental Today!</h1>
            <button className="mt-3 sm:mt-0 flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#EF8D2A] rounded-sm hover:bg-[#e67e10] transition-colors">
              Make Appointment <FaArrowRight />
            </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b-4 border-t-4 pb-11 pt-11'>
            {/* About Us Section */}
            <div>
              <h2 className='text-lg font-bold mb-4 text-[#EF8D2A]'>About Us</h2>
              <p className='mb-4 font-semibold'>We are committed to providing the best services to our customers. Our team is dedicated to excellence in every project we undertake.</p>
              <div className='flex space-x-4'>
                <a href="#" target='_blank' className='text-white bg-[#EF8D2A] p-2 rounded-sm hover:bg-[#e67e10] transition-colors'><FaFacebook /></a>
                <a href="#" target='_blank' className='text-white bg-[#EF8D2A] p-2 rounded-sm hover:bg-[#e67e10] transition-colors'><CiYoutube /></a>
                <a href="#" target='_blank' className='text-white bg-[#EF8D2A] p-2 rounded-sm hover:bg-[#e67e10] transition-colors'><FaInstagram /></a>
              </div>
            </div>

            {/* Extra Links Section */}
            <div>
              <h2 className='text-lg font-bold mb-4 text-[#EF8D2A]'>Extra Links</h2>
              <ul className='space-y-2 font-semibold'>
                <li><Link to="/about" className='text-white hover:text-[#EF8D2A]'>About Us</Link></li>
                <li><Link to="/services" className='text-white hover:text-[#EF8D2A]'>Services</Link></li>
                <li><Link to="/team" className='text-white hover:text-[#EF8D2A]'>Team</Link></li>
                <li><Link to="/career" className='text-white hover:text-[#EF8D2A]'>Career</Link></li>
              </ul>
            </div>

            {/* Equipments Section */}
            <div>
              <h2 className='text-lg font-bold mb-4 text-[#EF8D2A]'>Equipments</h2>
              <ul className='space-y-2 font-semibold'>
                <li><Link to="/wheel-loader" className='text-white hover:text-[#EF8D2A]'>Wheel Loader</Link></li>
                <li><Link to="/excavator" className='text-white hover:text-[#EF8D2A]'>Excavator</Link></li>
                <li><Link to="/power-grader" className='text-white hover:text-[#EF8D2A]'>Power Grader</Link></li>
                <li><Link to="/jcb" className='text-white hover:text-[#EF8D2A]'>JCB</Link></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h2 className='text-lg font-bold mb-4 text-[#EF8D2A]'>Contact Us</h2>
              <ul className='space-y-2 font-semibold'>
                <li className='flex items-center text-white'>
                  <FaMapMarkerAlt className='mr-2' /> ST.NO. , 16819, Basant Vihar, Bathinda-151005 (Punjab)
                </li>
                <li className='flex items-center text-white'>
                  <FaEnvelope className='mr-2' /> Sharma41321@gmail.com
                </li>
                <li className='flex items-center text-white'>
                  <FaPhoneAlt className='mr-2' /> +123 456 7890
                </li>
              </ul>
            </div>
          </div>

          <div className='text-center font-semibold mt-6 sm:mt-8 md:flex justify-between'>
            <div className='mb-3 md:mb-0'>
              <p><Link to="/terms" className="hover:text-[#EF8D2A]">Terms and Conditions</Link> | <Link to="/privacy" className="hover:text-[#EF8D2A]">Privacy Policy</Link> | <Link to="/faq" className="hover:text-[#EF8D2A]">FAQ</Link></p>
            </div>
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
