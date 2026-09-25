// /components/header/NavLinks.jsx
import React from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';

export const navItems = [
  { label: 'Subjects', path: '/subjects' },
  { label: 'Home', path: '/' },
  { label: 'Trending', path: '/trending' },
  { label: 'Explore', path: '/explore' },
  { label: 'Collection', path: '/collection' },
  { label: 'Random Book', path: '#' },
];

export const DesktopNav = () => (
  <div className="hidden md:flex flex-1 items-center gap-6 font-semibold text-xs tracking-wide text-slate-700">
    <Link to="#" className="text-slate-800 hover:text-indigo-600 transition-colors py-1">
      My Books
    </Link>
    
    <div className="relative group">
      <Link to="#" className="flex items-center gap-1 text-slate-800 hover:text-indigo-600 transition-colors py-1">
        Browse 
        <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200 text-slate-500 group-hover:text-indigo-600" />
      </Link>
      
      <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-slate-300 rounded-lg shadow-xl py-1.5 w-44 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
        {navItems.map((item, idx) => (
          <Link key={idx} to={item.path} className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const MobileDrawer = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-1 text-xs font-semibold text-slate-800">
      <Link to="#" className="py-2 px-3 hover:bg-slate-100 rounded-md transition-colors">My Books</Link>
      {navItems.map((item, idx) => (
        <Link key={idx} to={item.path} className="py-2 px-3 hover:bg-slate-100 rounded-md transition-colors">
          {item.label}
        </Link>
      ))}
    </div>
  );
};