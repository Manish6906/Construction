import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#141414]  text-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold ">MyBrand</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className=" ">Home</a>
            <a href="#" className=" ">About</a>
            <a href="#" className=" ">Services</a>
            <a href="#" className="">Contact</a>
            
          </div>
          <button className="  px-4 py-2 rounded-md  ">
          Make Appointment
            </button>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
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
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block  ">Home</a>
          <a href="#" className="block  ">About</a>
          <a href="#" className="block ">Services</a>
          <a href="#" className="block ">Contact</a>
          <button className="w-full  px-4 py-2 rounded-md ">
          Make Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
