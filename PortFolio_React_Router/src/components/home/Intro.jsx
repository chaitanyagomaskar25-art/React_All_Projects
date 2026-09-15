import React from 'react'
import PhotoCard from './PhotoCard'

const Intro = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Your Photo */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              {/* Background Accent */}
              <div className="absolute -inset-4 bg-slate-50 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              
              {/* Image Placeholder */}
              <PhotoCard />
            </div>
          </div>

          {/* Right: Detailed Intro */}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Hey, I'm Chaitanya — a Full-Stack Developer driven by clean code and user-centric design.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I specialize in building exceptional digital experiences that are fast, 
                accessible, and visually stunning. With a deep focus on React and 
                modern engineering practices, I help brands turn complex ideas into 
                scalable web solutions.
              </p>
              <p>
                Currently, I'm focused on architecting responsive interfaces and 
                integrating powerful APIs to create seamless workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                View Projects
              </button>
              <button className="px-10 py-4 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                Read Resume
              </button>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Intro
