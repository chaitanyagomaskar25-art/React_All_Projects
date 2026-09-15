import React from 'react'
import { ArrowRight, Globe, ShieldCheck, Zap, Users } from 'lucide-react';
import { Link } from 'react-router';

const Call = () => {
  return (
     <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
          
          <h2 className="relative z-10 text-3xl lg:text-5xl font-black text-white tracking-tight mb-10 leading-tight">
            Ready to experience <br className="hidden lg:block" /> the difference?
          </h2>
          <button className="relative z-10 w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-lg">
          <Link to='/product'>Start Shopping</Link>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
  )
}

export default Call
