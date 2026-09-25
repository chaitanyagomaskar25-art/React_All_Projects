import React, { useState } from 'react';
import { Link } from 'react-router';
import { Menu } from 'lucide-react';
import SearchBar from '../search/SearchBar';
import { DesktopNav, MobileDrawer } from './NavLinks';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-300 w-full mx-auto bg-white border border-slate-300 border-b-0 rounded-t-xl px-4 sm:px-6 py-3.5 shadow-xs text-slate-900 font-sans">
      <div className="flex items-center justify-between gap-3 md:gap-6">
        
        {/* Logo Section */}
        <div className="flex-1 shrink-0">
          <Link to="/" className="inline-block transition-opacity hover:opacity-85">
            <img
              width={200}
              src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
              alt="Open Library Logo"
              className="mt-0 h-8 md:h-9 object-contain brightness-95"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Search & Actions */}
        <div className="flex-2 flex items-center justify-end gap-2.5 sm:gap-4 md:gap-5">
          <SearchBar />

          <Link to="/login" className="text-xs font-bold text-slate-800 hover:text-indigo-600 px-2 py-1.5 transition-colors whitespace-nowrap">
            Log In
          </Link>
          
          <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap shadow-sm hover:shadow active:scale-95">
            Sign Up
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 p-1.5 rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Hero;