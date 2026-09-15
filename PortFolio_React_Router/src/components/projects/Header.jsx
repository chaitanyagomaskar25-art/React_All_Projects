import React from 'react'

const Header = () => {
  return (
     <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">Case Studies</span>
          </div>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-extrabold tracking-tighter leading-[1.1] mb-10">
            Engineered <br />
            <span className="text-slate-200 hover:text-slate-300 transition-colors cursor-default">Solutions.</span>
          </h1>
        </div>
  )
}

export default Header
