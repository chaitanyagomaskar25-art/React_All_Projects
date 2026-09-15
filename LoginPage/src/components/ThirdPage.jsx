import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, User, Users, Sliders, ChevronLeft, ChevronRight } from "lucide-react";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState(50);
  const [selectedGender, setSelectedGender] = useState("male");
  const [checked, setChecked] = useState(false);

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
            Preferences
          </motion.h2>
          <p className="text-gray-500 mt-2">Personalize your workspace settings.</p>
        </div>

        <div className="space-y-6">
          
          {/* Checkbox Section */}
          <label className="group cursor-pointer flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className={checked ? 'text-blue-500' : 'text-gray-500'} size={20} />
              <span className="font-medium">Enable Notifications</span>
            </div>
            <input 
              type="checkbox" 
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-5 h-5 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-0 transition-all cursor-pointer accent-blue-600" 
            />
          </label>

          {/* Radio Group Section */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Select Identity</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'male', label: 'Male', icon: User },
                { id: 'female', label: 'Female', icon: Users }
              ].map((option) => (
                <label
                  key={option.id}
                  className={`cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
                    selectedGender === option.id 
                    ? 'bg-blue-600/10 border-blue-500 ring-2 ring-blue-500/20' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <option.icon size={24} className={selectedGender === option.id ? 'text-blue-500' : 'text-gray-400'} />
                  <span className="mt-2 font-bold tracking-wide text-sm">{option.label}</span>
                  
                  {/* Hidden native radio for accessibility, state managed by label click */}
                  <input 
                    type="radio" 
                    name="gender" 
                    value={option.id}
                    checked={selectedGender === option.id}
                    onChange={() => setSelectedGender(option.id)}
                    className="mt-3 w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Range Slider Section */}
          <div className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-bold">
                <Sliders size={14} />
                Intensity
              </div>
              <span className="text-blue-500 font-mono font-bold">{rangeValue}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8">
          <button 
            onClick={() => navigate("/second")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button 
            onClick={() => navigate("/forth")}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Continue
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress Indicator - Step 3 */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  );
};

export default ThirdPage;