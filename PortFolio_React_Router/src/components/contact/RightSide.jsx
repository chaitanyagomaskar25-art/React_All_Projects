import React from 'react'

const RightSide = () => {
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully");
  };

  return (
      <div className="lg:col-span-7">
            <div className="relative group/card">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-100 to-indigo-100 rounded-[2.6rem] blur opacity-25 group-hover/card:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
                  <p className="text-sm text-slate-500 font-medium">Fill out the details below and I'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Chaitanya R."
                        className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      rows="5"
                      required
                      placeholder="What are you looking to build?"
                      className="w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium resize-none"
                    ></textarea>
                  </div>

                  {/* ATTRACTIVE TOUCH: Animated Submit Button */}
                  <button 
                    type="submit" 
                    className="group relative w-full overflow-hidden bg-slate-900 text-white rounded-2xl py-5 font-bold transition-all hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-200 active:scale-[0.98]"
                  >
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></div>
                    
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span>Initialize Contact</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </button>

                  <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                    Secure channel • 24h response time
                  </p>
                </form>
              </div>
            </div>
          </div>
  )
}

export default RightSide
