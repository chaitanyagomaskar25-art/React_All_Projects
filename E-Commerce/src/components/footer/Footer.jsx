import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 mt-auto">
  <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">
    
    {/* Brand & Social */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
        Shop<span className="text-blue-600">Vibe</span>
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
        Simple shopping, better vibes. Your one-stop destination for curated lifestyle essentials.
      </p>
      <div className="flex gap-5 text-gray-400 dark:text-gray-500">
        <FaInstagram className="hover:text-pink-500 transition-colors cursor-pointer" size={20} />
        <FaTwitter className="hover:text-blue-400 transition-colors cursor-pointer" size={20} />
        <FaGithub className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer" size={20} />
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
        Explore
      </h3>
      <ul className="space-y-3 text-sm font-medium text-gray-600 dark:text-gray-300">
        <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
        <li><Link to="/cart" className="hover:text-blue-600 transition-colors">Your Cart</Link></li>
      </ul>
    </div>

    {/* Contact & Support */}
    <div>
      <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
        Support
      </h3>
      <div className="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-300">
        <p className="flex items-center gap-3">
          <MapPin size={18} className="text-blue-600" /> City, India
        </p>
        <p className="flex items-center gap-3">
          <Phone size={18} className="text-blue-600" /> +91 1234567890
        </p>
        <p className="flex items-center gap-3">
          <Mail size={18} className="text-blue-600" /> support@shopvibe.com
        </p>
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
      © 2026 ShopVibe — All Rights Reserved
    </p>
    <div className="flex gap-6 text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
        <span className="cursor-pointer hover:text-blue-600 transition-colors">Privacy Policy</span>
        <span className="cursor-pointer hover:text-blue-600 transition-colors">Terms of Service</span>
    </div>
  </div>
</footer>
  );
};

export default Footer;