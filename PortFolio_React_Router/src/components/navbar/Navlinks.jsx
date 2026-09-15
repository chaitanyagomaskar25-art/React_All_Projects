import React from 'react'
import { Link } from "react-router-dom"; // Import Link

const Navlinks = () => {
    const navLinks = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/project" },
    { name: "Experience", to: "/experience" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];
  
  return (
   <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
  )
}

export default Navlinks
