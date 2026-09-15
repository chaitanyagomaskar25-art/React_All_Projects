import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MousePointer2, Send, RotateCcw, ChevronLeft, CheckCircle } from "lucide-react";

const FifthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30"
          >
            <CheckCircle className="text-blue-500" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight"
          >
            Final Actions
          </motion.h2>
          <p className="text-gray-500 mt-2">Choose how you want to proceed with your data.</p>
        </div>

        <div className="space-y-4">
          
          {/* Action: Standard Click */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="group cursor-pointer flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-blue-600 transition-colors">
                <MousePointer2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Standard Action</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Type: Button</span>
              </div>
            </div>
            <input 
              type="button" 
              value="Click Me" 
              className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold cursor-pointer hover:bg-white/20 transition-colors"
            />
          </motion.div>

          {/* Action: Submit (Primary) */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="group cursor-pointer flex items-center justify-between p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Send size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-400">Finalize Submission</span>
                <span className="text-[10px] text-blue-500/70 uppercase tracking-widest font-bold">Type: Submit</span>
              </div>
            </div>
            <input 
              type="submit" 
              value="Submit" 
              className="px-4 py-2 bg-blue-600 rounded-lg text-xs font-bold cursor-pointer hover:bg-blue-500 transition-colors"
            />
          </motion.div>

          {/* Action: Reset (Warning/Secondary) */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="group cursor-pointer flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-800 group-hover:bg-red-500/20 group-hover:text-red-500 rounded-xl transition-colors">
                <RotateCcw size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Clear All Data</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Type: Reset</span>
              </div>
            </div>
            <input 
              type="reset" 
              value="Reset" 
              className="px-4 py-2 text-gray-400 hover:text-red-500 text-xs font-bold cursor-pointer transition-colors"
            />
          </motion.div>

        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8">
          <button 
            onClick={() => navigate("/forth")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
            Prev
          </button>

          <button 
            disabled 
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 text-gray-700 font-bold cursor-not-allowed opacity-50"
          >
            Finished
          </button>
        </div>
      </div>

      {/* Final Step Indicator */}

       <div className="absolute bottom-10 flex gap-2">
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-blue-600" />

      </div>
      
    </div>
  );
};

export default FifthPage;