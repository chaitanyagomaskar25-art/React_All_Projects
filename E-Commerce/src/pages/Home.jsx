import React from 'react'
import { ShieldCheck, Truck, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
const Home = () => {
  return (
<div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
  {/* Main Content Wrapper */}
  <main className="overflow-hidden">
    
    {/* Hero Section */}
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Hero Text Content */}
        <div className="lg:col-span-7 space-y-8 md:space-y-10 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Spring 2026 Release
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.85] tracking-tighter text-slate-900">
            ESSENTIALS <br /> 
            <span className="text-slate-300 transition-colors duration-500 hover:text-blue-600">REIMAGINED</span>
          </h1>

          <p className="max-w-md text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            ShopVibe delivers a curated collection of premium lifestyle tools designed for durability and aesthetic precision.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link 
              to='/product' 
              className="px-10 py-5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-slate-200 hover:shadow-blue-200"
            >
              Shop Now 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="px-10 py-5 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 text-center transition-all underline decoration-2 decoration-slate-200 underline-offset-8 hover:decoration-blue-600"
            >
              The Lookbook
            </Link>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-4/5 sm:aspect-video lg:aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300">
            <img 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000 ease-out" 
              src='https://plus.unsplash.com/premium_photo-1683124234722-da5929a6d1d2?w=800&auto=format&fit=crop&q=80' 
              alt="ShopVibe Essentials" 
            />
            {/* Glossy Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Aura Series 01</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Limited Edition</p>
                </div>
                <p className="text-lg font-black text-blue-600">$149.00</p>
              </div>
            </div>
          </div>
          
          {/* Background Decoration Elements (Visible on Desktop) */}
          <div className="hidden lg:block absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        </div>
      </div>
    </section>

    {/* Feature Highlights Section */}
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        
        <div className="group space-y-6">
          <div className="w-14 h-14 bg-white shadow-sm text-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
            <Truck size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">Rapid Fulfillment</h4>
            <p className="text-slate-500 leading-relaxed text-sm">Global carbon-neutral shipping within 48 hours for all domestic orders.</p>
          </div>
        </div>

        <div className="group space-y-6">
          <div className="w-14 h-14 bg-white shadow-sm text-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
            <ShieldCheck size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">Lifetime Warranty</h4>
            <p className="text-slate-500 leading-relaxed text-sm">Built to last decades. Every purchase is backed by our signature quality guarantee.</p>
          </div>
        </div>

        <div className="group space-y-6">
          <div className="w-14 h-14 bg-white shadow-sm text-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
            <Globe size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 tracking-tight">Sustainable Path</h4>
            <p className="text-slate-500 leading-relaxed text-sm">100% transparent supply chain focusing on recycled materials and fair wages.</p>
          </div>
        </div>

      </div>
    </section>

    {/* Brand Philosophy Section */}
    <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-40 text-center">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
          We don't just sell products. <br className="hidden md:block" />
          <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">We curate your environment.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left border-t border-slate-100 pt-16">
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            ShopVibe was established on the principle that the objects you interact with daily should be both 
            inspiring and functional. Our design team travels globally to partner with artisans who share 
            our obsession with detail.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            By removing the middleman, we deliver luxury-grade materials at an accessible price point. 
            Our commitment to 2026 sustainability standards means we use 90% less plastic in our packaging.
          </p>
        </div>
      </div>
    </section>

  </main>
</div>
  )
}

export default Home
