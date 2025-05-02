import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, Link as ScrollLink } from "react-scroll"; // Importing ScrollLink from react-scroll
import mainlogo from '../../assets/images/MainLogo.png';
import Logo1 from '../../assets/images/Logo1.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "HOME", to: "test1" },
    { name: "CHOOSE US", to: "test2" },
    { name: "ABOUT US", to: "test3" },
    { name: "TESTIMONIALS", to: "test4" },
  ];

  return (
    <nav className="bg-[#141414] text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
           <Link to='test1'>
           <a href="/">
              <img src={Logo1} alt="Logo1" className=" h-26 md:h-26 lg:h-30 " />
            </a>
           </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 xl:space-x-20">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="hover:text-[#EF8D2A] cursor-pointer font-medium"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>


          {/* Appointment Button */}
          
          <button className="hidden md:flex items-center gap-2 px-3 lg:px-6 py-2 cursor-pointer bg-[#EF8D2A] rounded-sm hover:bg-[#e67e10] transition-colors">
           <a href="tel:+916283381082" className=" flex items-center gap-2"> Make Appointment <FaArrowRight /> </a>
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 flex flex-col justify-center items-center pb-4 space-y-3">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="block text-white hover:text-[#EF8D2A] transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
          <button className=" bg-[#EF8D2A] px-4 cursor-pointer py-2 flex items-center gap-2 rounded-md hover:bg-[#e67e10] transition-colors">
          <a href="tel:+916283381082" className=" flex items-center gap-2">Make Appointment <FaArrowRight /> </a>
          </button> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
