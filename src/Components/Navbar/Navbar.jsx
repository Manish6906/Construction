import React, { useState } from "react";
import logo from '../../assets/images/Logo.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "SERVICE", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="bg-[#141414] text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#EF8D2A]  font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Appointment Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-2 cursor-pointer bg-[#EF8D2A] rounded-sm hover:bg-[#e67e10] transition-colors">
  Make Appointment <FaArrowRight />
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
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-[#EF8D2A] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-[#EF8D2A] px-4 cursor-pointer py-2 flex items-center gap-2 rounded-md hover:bg-[#e67e10] transition-colors">
            Make Appointment<FaArrowRight />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
