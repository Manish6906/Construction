import React from 'react';
import { motion } from 'framer-motion';
import footer from '../../assets/images/footerimg.png';
import { FaArrowRight, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-scroll';
import Logo1 from '../../assets/images/Logo1.png';
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="relative mt-10 px-6 py-3 md:py-14 lg:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${footer})` }}
      initial={{ opacity: 0 }} // Initial state for animation (hidden)
      animate={{ opacity: 1 }} // Final state (fully visible)
      transition={{ duration: 1 }} // Duration of the animation
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header CTA */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:justify-between sm:items-center mb-10 md:mb-0 md:gap-6"
          initial={{ opacity: 0, y: -50 }} // Start above the screen (Y-axis)
          animate={{ opacity: 1, y: 0 }} // End at normal position
          transition={{ duration: 1, delay: 0.2 }} // Staggered transition
        >
          <div className="md:justify-start">
            <img src={Logo1} alt="Logo1" className="h-30 md:h-26 object-contain w-full" />
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold md:text-center mb-3 sm:mb-0 flex-1">
            Schedule Your Rental Today!
          </h1>

          <a 
          href="https://wa.me/916283381082"
        target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-[#EF8D2A] hover:bg-[#e67e10] rounded transition-colors transform hover:scale-105"
          >
            Make Appointment <FaArrowRight />
          </a>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-y-2 py-10">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start below the screen (Y-axis)
            animate={{ opacity: 1, y: 0 }} // End at normal position
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-[#EF8D2A] mb-4">About Us</h2>
            <p className="font-medium leading-relaxed text-sm sm:text-base">
              At Tanish Enterprises, we specialize in delivering reliable, high-performance equipment tailored to your project needs. With a focus on quality, convenience, and outstanding customer service, we ensure your success every step of the way.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="md:flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }} // Start below the screen (Y-axis)
            animate={{ opacity: 1, y: 0 }} // End at normal position
            transition={{ duration: 1, delay: 0.6 }}
          >
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start below the screen (Y-axis)
            animate={{ opacity: 1, y: 0 }} // End at normal position
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold text-[#EF8D2A] mb-4">Contact Us</h2>
            <ul className="space-y-3 font-medium text-sm sm:text-base">
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
                  <FaWhatsapp  className="mr-3" />
                  <a href={`https://wa.me/+91${num}`}
        target="_blank" className="hover:text-[#EF8D2A]">+91 {num}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 md:flex justify-center text-center text-sm font-medium space-y-4 md:space-y-0">
          <p>&copy; 2025 TANISH ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
