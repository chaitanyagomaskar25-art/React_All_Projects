import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { ChevronDown, Globe, Heart, Check } from 'lucide-react';
import Hero from '../home/Hero';

const Navbar = () => {
  const dropdownRef = useRef(null);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-300 w-full z-50 font-sans px-4 sm:px-6 lg:px-8 pt-2">
      <div className="w-full rounded-t-xl overflow-visible shadow-md border border-slate-300 border-b-0 bg-slate-900">
        
        {/* 1. Internet Archive Top Bar */}
        <div className="w-full text-white text-xs border-b border-slate-800 px-4 sm:px-6 py-2.5">
          <div className="w-full flex items-center justify-between">
            {/* Internet Archive Logo */}
            <Link to="/" className="flex items-center shrink-0 hover:opacity-90 transition-opacity">
              <img
                src="https://openlibrary.org/static/images/ia-logo.svg"
                alt="Internet Archive"
                className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Right Header Controls */}
            <div className="flex items-center gap-3 sm:gap-5">
              
              {/* Donate Button */}
              <Link
                to="/donate"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shrink-0 shadow-sm active:scale-95"
              >
                <span>Donate</span>
                <Heart size={13} className="text-white fill-white group-hover:scale-110 transition-transform shrink-0" />
              </Link>

              {/* Language Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border`}
                >
                  <Globe size={14} className="text-indigo-400" />
                  <span className="hidden xs:inline font-semibold">
                    English
                  </span>
                  {/* <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-700/60 px-1.5 py-0.5 rounded">
                    {language}
                  </span> */}
                  <ChevronDown
                    size={13}
                    className={`text-slate-400 transition-transform duration-200 `}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Open Library Navigation (Hero) */}
        <div className="w-full bg-white">
          <Hero />
        </div>

      </div>
    </header>
  );
};

export default Navbar;