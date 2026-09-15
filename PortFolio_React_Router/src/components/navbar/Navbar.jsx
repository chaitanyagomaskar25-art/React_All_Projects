import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/project" },
    { name: "Experience", to: "/experience" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
         <Logo />

          {/* Desktop Nav Links */}
          <Navlinks />

          {/* Mobile Menu Button */}
         <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
     <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-black border-b border-white/10 px-6 pt-2 pb-6 space-y-2`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="block py-3 text-base font-medium text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;