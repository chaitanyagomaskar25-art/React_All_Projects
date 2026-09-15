import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Mail, Phone, Search, ChevronRight, ChevronLeft } from "lucide-react";

const FirstPage = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState(null);

  // Animation variants for the input cards
  const cardVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight"
          >
            Account Details
          </motion.h2>
          <p className="text-gray-500 mt-2">Please fill in your primary information.</p>
        </div>

        {/* Interactive Form Container */}
        <div className="space-y-4">
          {[
            { id: 'text', type: 'text', placeholder: 'Full Name', icon: User },
            { id: 'password', type: 'password', placeholder: 'Security Key', icon: Lock },
            { id: 'email', type: 'email', placeholder: 'Email Address', icon: Mail },
            { id: 'tel', type: 'tel', placeholder: 'Phone Number', icon: Phone },
            { id: 'search', type: 'search', placeholder: 'Find your Workspace', icon: Search },
          ].map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-2xl transition-all duration-300 ${
                activeField === field.id ? 'bg-white/10 ring-2 ring-blue-500' : 'bg-white/5'
              }`}
            >
              <div className="flex items-center px-4 py-4">
                <field.icon 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    activeField === field.id ? 'text-blue-500' : 'text-gray-500'
                  }`} 
                />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onFocus={() => setActiveField(field.id)}
                  onBlur={() => setActiveField(null)}
                  className="bg-transparent border-none focus:ring-0 w-full ml-4 text-white placeholder-gray-600 outline-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-8">
          <button 
            disabled 
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-600 cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button 
            onClick={() => navigate("/second")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Next Step
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-8 h-1.5 rounded-full bg-blue-600" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  );
};

export default FirstPage;