import React from 'react'

const Header = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tighter leading-[0.9] mb-8">
              Web Developer <br />
              <span className="text-slate-400">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
              I specialize in building high-performance web applications using <span className="text-slate-900">React</span> and <span className="text-slate-900">Modern JavaScript</span>. 
              My focus is on creating scalable, professional interfaces that prioritize user experience and clean engineering.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end">
             <div className="p-8 bg-slate-50 rounded-4xl border border-slate-100 w-full">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Core Philosophy</p>
                <p className="text-sm font-bold text-slate-900 italic leading-relaxed">
                  "Code is read much more often than it is written. Build for clarity, scale for performance."
                </p>
             </div>
          </div>
        </div>
  )
}

export default Header
