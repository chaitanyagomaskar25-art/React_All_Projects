import React from 'react'

const Availability = () => {
  return (
    <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          {/* Abstract background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-blue-600/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Open for New <br />
                Collaborations.
              </h2>
              <p className="text-blue-200 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                I am currently seeking opportunities to apply my skills in a professional environment. Interested in Internships, Junior Roles, and Freelance.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6">
              <a 
                href="mailto:hello@chaitanya.dev" 
                className="w-full md:w-auto px-16 py-6 bg-white text-slate-900 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all shadow-2xl active:scale-95 text-center"
              >
                Let's Talk
              </a>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Status: Immediate Start</p>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Availability
