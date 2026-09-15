import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, Smartphone, Link, ChevronLeft, ChevronRight } from "lucide-react";

const ForthPage = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight"
          >
            File & Special
          </motion.h2>
          <p className="text-gray-500 mt-2">Finalize your assets and contact details.</p>
        </div>

        <div className="space-y-4">
          
          {/* File Input Card */}
          <motion.label 
            className="group cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
          >
            <Upload size={24} className="text-gray-500 group-hover:text-blue-500 mb-2" />
            <span className="text-xs font-semibold text-gray-400">Upload File</span>
            <input type="file" className="hidden" />
          </motion.label>

          {/* NEW: Mobile Number Input */}
          <div className={`flex items-center px-4 py-4 rounded-2xl border transition-all duration-300 ${
            activeField === 'phone' ? 'bg-white/10 border-blue-500 ring-2 ring-blue-500/20' : 'bg-white/5 border-white/10'
          }`}>
            <Smartphone size={20} className={activeField === 'phone' ? 'text-blue-500' : 'text-gray-500'} />
            <div className="flex flex-col flex-1 ml-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Mobile Number</span>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                onFocus={() => setActiveField('phone')}
                onBlur={() => setActiveField(null)}
                className="bg-transparent border-none focus:ring-0 w-full text-white outline-none font-mono"
              />
            </div>
          </div>

          {/* URL Input */}
          <div className={`flex items-center px-4 py-4 rounded-2xl border transition-all duration-300 ${
            activeField === 'url' ? 'bg-white/10 border-blue-500 ring-2 ring-blue-500/20' : 'bg-white/5 border-white/10'
          }`}>
            <Link size={20} className={activeField === 'url' ? 'text-blue-500' : 'text-gray-500'} />
            <div className="flex flex-col flex-1 ml-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">URL</span>
              <input
                type="url"
                placeholder="https://example.com"
                onFocus={() => setActiveField('url')}
                onBlur={() => setActiveField(null)}
                className="bg-transparent border-none focus:ring-0 w-full text-white outline-none"
              />
            </div>
          </div>

          {/* Image Submit Placeholder */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
            <input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpjWfmrt529ykqOUvcLQ6pNia7fQibE6uLg&s" alt="submit icon" className="w-25 h-20 invert opacity-40 hover:opacity-100 cursor-pointer" />
              <span className="text-xs text-gray-500">Review your details before the final step</span>
            </div>
          </div>

          <input type="hidden" value="hiddenValue" />
        </div>

        {/* Navigation - Kept exactly as requested */}
        <div className="flex items-center justify-between pt-8">
          <button 
            onClick={() => navigate("/third")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
            Prev
          </button>

          <button 
            onClick={() => navigate("/fifth")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
       <div className="absolute bottom-10 flex gap-2">
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
                <div className="w-8 h-1.5 rounded-full bg-blue-600" />

        <div className="w-8 h-1.5 rounded-full bg-white/10" />

      </div>
      
    </div>
  );
};

export default ForthPage;