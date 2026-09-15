import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, RotateCcw, CalendarDays, CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";

const SecondPage = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState(null);

  // Configuration for consistent input cards
  const fields = [
    { id: 'date', type: 'date', label: 'Primary Date', icon: Calendar },
    { id: 'time', type: 'time', label: 'Specific Time', icon: Clock },
    { id: 'datetime', type: 'datetime-local', label: 'Full Timestamp', icon: RotateCcw },
    { id: 'month', type: 'month', label: 'Billing Month', icon: CalendarDays },
    { id: 'week', type: 'week', label: 'Target Week', icon: CalendarRange },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header - Consistent with FirstPage */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight"
          >
            Scheduling
          </motion.h2>
          <p className="text-gray-500 mt-2">Select your preferred dates and times.</p>
        </div>

        {/* Form Container */}
        <div className="space-y-4">
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-2xl transition-all duration-300 border ${
                activeField === field.id 
                  ? 'bg-white/10 border-blue-500 ring-2 ring-blue-500/20' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center px-4 py-4">
                <field.icon 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    activeField === field.id ? 'text-blue-500' : 'text-gray-500'
                  }`} 
                />
                <div className="flex flex-col flex-1 ml-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    onFocus={() => setActiveField(field.id)}
                    onBlur={() => setActiveField(null)}
                    className="bg-transparent border-none focus:ring-0 w-full text-white outline-none cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation - Same visual weight as FirstPage */}
        <div className="flex items-center justify-between pt-8">
          <button 
            onClick={() => navigate("/first")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button 
            onClick={() => navigate("/third")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Continue
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress Indicator - Step 2 */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-blue-600" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  );
};

export default SecondPage;