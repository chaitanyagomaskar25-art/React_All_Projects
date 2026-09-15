import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  // Dynamic inline styles based on theme state
  const footerStyle = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#f8fafc' : '#0f172a',
    borderTop: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
    transition: 'all 0.3s ease',
  };

  const textSecondaryStyle = {
    color: isDark ? '#94a3b8' : '#64748b',
  };

  const borderDividerStyle = {
    borderTop: `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`,
  };

  return (
    <footer style={footerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              StoreCraft
            </h3>
            <p className="text-sm" style={textSecondaryStyle}>
              Your modern destination for premium products. Quality meets style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm" style={textSecondaryStyle}>
              <li>
                <Link to="/products" className="hover:text-indigo-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-indigo-500 transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-indigo-500 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm" style={textSecondaryStyle}>
              <li>
                <Link to="/about" className="hover:text-indigo-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex space-x-4 text-sm" style={textSecondaryStyle}>
              <a href="#" className="hover:text-indigo-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm" style={{ ...borderDividerStyle, ...textSecondaryStyle }}>
          © {new Date().getFullYear()} StoreCraft, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;