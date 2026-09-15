import React from 'react'

const LeftSide = () => {
  return (
    <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-hover:text-blue-600 transition-colors">Professional Email</p>
                <a href="mailto:hello@chaitanya.dev" className="text-2xl md:text-3xl font-bold border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1">
                  hello@chaitanya.dev
                </a>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 group-hover:text-blue-600 transition-colors">Digital Presence</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl md:text-3xl font-bold border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 pb-1">
                  linkedin.com/in/chaitanya
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Studio Address</p>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-700">
                  123 Tech Park, Whitefield, <br />
                  Bengaluru, KA, India
                </p>
              </div>
            </div>
          </div>
  )
}

export default LeftSide
