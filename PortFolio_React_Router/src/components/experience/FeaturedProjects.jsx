import React from 'react'

const FeaturedProjects = () => {

     const featured = [
    {
      id: "01",
      title: "JobDev Portal",
      focus: "Full-Stack React Architecture",
      github: "https://github.com/yourusername/jobdev",
      live: "https://jobdev.vercel.app",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
      desc: "A specialized dashboard for engineers with real-time job tracking and glassmorphism styling."
    },
    {
      id: "02",
      title: "NutriTrack Pro",
      focus: "Advanced Data Visualization",
      github: "https://github.com/yourusername/nutritrack",
      live: "https://nutritrack.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      desc: "Calculates body metrics and nutritional intake using optimized JS logic and dynamic charts."
    },
    // Add 3 more here following the same structure
  ];
  
  return (
        <div className="space-y-30">
          {featured.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* LEFT: The UI Preview Frame */}
              <div className="w-full lg:w-3/5 group relative">
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-105 -z-10"></div>
                
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-blue-200/50">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Quick-Action Overlay (Mobile/Hover) */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                    <a href={item.live} className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform">Live Site</a>
                    <a href={item.github} className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm hover:bg-white hover:text-slate-900 transition-all">GitHub</a>
                  </div>
                </div>
              </div>

              {/* RIGHT: Technical Context */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-5xl font-black text-slate-100 font-mono tracking-tighter">
                    {item.id}
                  </span>
                  <h3 className="text-4xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 font-bold uppercase text-[10px] tracking-[0.3em]">
                    {item.focus}
                  </p>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* DESKTOP LINKS (Visible without hover) */}
                <div className="flex items-center gap-8 pt-4">
                  <a href={item.live} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900">
                    Live Demo
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                  <a href={item.github} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
  )
}

export default FeaturedProjects
