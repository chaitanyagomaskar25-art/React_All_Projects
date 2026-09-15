import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  // Navigation array for easier management
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/project" },
    { name: "Education", to: "/education" },
    { name: "Skills", to: "/education" },
    { name: "Featured Projects", to: "/experience" },
    { name: "Experience", to: "/experience" },
    { name: "Tools used", to: "/education" },
    { name: "Current Learning", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-sm mb-6">
              Let's create something amazing.
            </h2>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-green-400 uppercase tracking-widest text-xs font-semibold">
                Available for work
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 w-full">
            <h4 className="text-gray-500 font-medium mb-6 uppercase tracking-[0.2em] text-xs">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs tracking-wide">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2026 Chaitanya Gomaskar</p>
            {/* Kept mailto as <a> because it triggers an external app (email) */}
            <a 
              href="mailto:hello@email.com" 
              className="hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              hello@email.com
            </a>
          </div>
          
          <button 
            to="/" 
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top 
            <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;