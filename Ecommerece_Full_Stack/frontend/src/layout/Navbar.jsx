import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const loggedIn = useAuthContext();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic Theme Styles
  const navStyle = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#ffffff' : '#0f172a',
    borderBottom: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };

  const mobileMenuStyle = {
    backgroundColor: isDark ? '#1e293b' : '#f8fafc',
    borderBottom: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
  };

  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? '#6366f1' : isDark ? '#cbd5e1' : '#475569',
    fontWeight: isActive ? '600' : '500',
    textDecoration: 'none',
  });

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/liked-products', label: 'Liked' },
    { path: '/cart', label: 'Cart' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={navStyle} className="sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <NavLink 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
          >
            StoreCraft
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} style={getLinkStyle} className="transition-colors hover:opacity-80">
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/login" style={getLinkStyle} className="transition-colors hover:opacity-80">
              {loggedIn ? 'Log Out' : 'Log In'}
            </NavLink>

            {/* Desktop Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
                color: isDark ? '#f8fafc' : '#0f172a',
                border: `1px solid ${isDark ? '#334155' : '#cbd5e1'}`,
              }}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
                color: isDark ? '#f8fafc' : '#0f172a',
                border: `1px solid ${isDark ? '#334155' : '#cbd5e1'}`,
              }}
              className="p-2 rounded-lg text-xs font-medium"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: isDark ? '#f8fafc' : '#0f172a' }}
              className="p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                /* Close Icon (X) */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={mobileMenuStyle} className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={getLinkStyle}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            style={getLinkStyle}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base transition-colors"
          >
            {loggedIn ? 'Log Out' : 'Log In'}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;