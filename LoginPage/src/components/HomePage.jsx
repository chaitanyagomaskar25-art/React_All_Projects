import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("#050505");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ease-in-out overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-8 left-8 z-50 flex items-center gap-4 bg-white/5 backdrop-blur-xl p-3 px-5 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Theme</span>
          <span className="text-xs text-white/80 font-mono">{color.toUpperCase()}</span>
        </div>
        <div className="relative w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden shadow-inner">
          <input 
            type="color" 
            value={color} 
            onChange={handleChange}
            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer bg-transparent border-none"
          />
        </div>
      </div>

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none animate-pulse"
        style={{ backgroundColor: 'white' }} 
      />

      <div className="relative z-10 text-center space-y-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter text-white leading-none">
            WELCOME
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-sm md:text-base uppercase tracking-[0.5em] mt-4"
          >
            Design your experience
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={() => navigate("/first")}
            className="group relative px-14 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />

            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3 tracking-widest text-sm">
              GET STARTED
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;