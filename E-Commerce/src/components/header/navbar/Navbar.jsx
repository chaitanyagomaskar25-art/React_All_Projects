import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Added 'sticky top-0 z-50' to the nav tag */}
      <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link
              to="/product"
              className="hover:text-blue-600 transition-colors"
            >
              Product
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <span>Cart</span>
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>

            <Link to="/profile" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200 object-cover hover:border-blue-500 transition-all"
              />
            </Link>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          /* Changed 'absolute' to 'fixed' or kept it relative to the sticky parent */
          <div className="md:hidden bg-white border-t border-gray-100 flex flex-col space-y-4 px-8 py-6 font-medium text-gray-700 absolute w-full left-0 shadow-lg z-50 animate-in fade-in slide-in-from-top-5 duration-300">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/product"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Product
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <span>Cart</span>
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-200 object-cover"
              />
              <span>Profile</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
