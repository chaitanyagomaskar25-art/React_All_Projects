import React from 'react'
import { Globe } from 'lucide-react';

const AboutHero = () => {
  return (
          <section className="px-6 pt-20 lg:pt-32 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Centered on mobile/tablet, left-aligned on desktop */}
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs lg:text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Our Story</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] lg:leading-[0.9]">
              Redefining the <br /> 
              <span className="text-slate-400 italic">Standard.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
              We started with a simple idea: that premium quality shouldn't be a luxury. 
              We bridge the gap between world-class design and everyday accessibility.
            </p>
            
          </div>

          {/* Image Container - HIDDEN BELOW 1024px (lg) */}
          <div className="hidden lg:block relative">
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Our Office" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-4xl shadow-xl max-w-50 border border-slate-50">
              <Globe className="w-8 h-8 text-slate-900 mb-4" />
              <p className="text-sm font-bold leading-tight">Shipping to over 120 countries worldwide.</p>
            </div>
          </div>

        </div>
      </section>
  )
}

export default AboutHero
