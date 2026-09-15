import React from 'react'

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-20 px-8 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Based in India — Open for Collaboration
          </p>
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tighter text-slate-900">
            Creative Developer <br />
            {/* <span className="text-slate-500 hover:text-slate-300 transition-colors duration-500"> */}
              & Problem Solver.
            {/* </span> */}
          </h1>
        </div>
      </section>
  )
}

export default Hero
