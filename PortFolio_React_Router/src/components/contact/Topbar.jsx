import React from 'react'

const Topbar = () => {
  return (
   <div className="max-w-4xl mb-24">
          <div className="inline-block px-3 py-1 mb-6 border border-slate-200 rounded-full">
             <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">Get in touch</span>
          </div>
          <h1 className="text-[clamp(3.5rem,10vw,7.1rem)] font-extrabold tracking-tighter leading-[0.85] mb-8">
            Contact <span className="text-slate-200 hover:text-slate-300 transition-colors duration-500">Me.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            I help brands build high-performance digital systems. 
            Drop a line to discuss your project architecture or engineering needs.
          </p>
        </div>
  )
}

export default Topbar
