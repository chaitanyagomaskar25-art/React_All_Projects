import React from 'react'

const EHeader = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">Currently Upskilling</span>
            </div>
            
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-extrabold tracking-tighter leading-[1.1] mb-10">
              Developing <br />
              <span className="text-slate-200">the Web.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Currently pursuing a <span className="text-slate-900">BCA</span> at **Eternal University** (2025-2028). 
              Focusing on modern engineering standards and scalable architectures.
            </p>
          </div>

          {/* Current Tech Stack Display */}
          {/* Current Tech Stack Display */}
<div className="lg:col-span-4 space-y-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm">
  <div>
    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Active Learning</h3>
    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">Current Sprint: Q2 2024</p>
  </div>
  
  <div className="space-y-6">
    {[
      { name: 'React / Next.js', level: 'w-[85%]' },
      { name: 'TypeScript', level: 'w-[60%]' },
      { name: 'Node.js', level: 'w-[70%]' },
      { name: 'PostgreSQL', level: 'w-[45%]' }
    ].map((tech) => (
      <div key={tech.name} className="group">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-bold text-slate-700">{tech.name}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div className={`${tech.level} h-full bg-blue-600 group-hover:bg-blue-400 transition-all duration-500`}></div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
  )
}

export default EHeader
