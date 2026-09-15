import React, { useState } from 'react';
import Header from '../components/projects/Header';

const Projects = () => {
  // 1. Manually defined project data for full control
  const projectData = [
    {
      id: 1,
      title: "NutriTrack Pro",
      category: "Health Tech",
      desc: "Comprehensive BMI and nutrition tracking system with real-time data visualization.",
      github: "https://github.com/yourusername/nutritrack",
      live: "https://nutritrack-pro.vercel.app",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
    },
    {
      id: 2,
      title: "JobDev Portal",
      category: "Web Architecture",
      desc: "Specialized job board for software engineers featuring glassmorphism UI.",
      github: "https://github.com/yourusername/jobdev",
      live: "https://jobdev-portal.netlify.app",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
    },
    {
      id: 3,
      title: "ShopSphere",
      category: "E-Commerce",
      desc: "Advanced product catalog with dynamic sorting, ratings, and review systems.",
      github: "https://github.com/yourusername/shopsphere",
      live: "https://shopsphere-store.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
    },
    // ... You can manually add all 50 here. 
    // For this example, I will keep the structure clean.
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
       <Header />

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {projectData.slice(0, visibleCount).map((project) => (
            <div key={project.id} className="group">
              
              {/* Image Frame */}
              <div className="relative aspect-16/10 rounded-4xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] group-hover:-translate-y-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Interaction Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-xs flex items-center justify-center gap-4">
                  <a 
                    href={project.live} 
                    className="px-6 py-2.5 bg-white text-slate-900 rounded-full font-bold text-xs hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="px-6 py-2.5 bg-slate-900/50 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xs hover:bg-white hover:text-slate-900 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 tracking-tighter italic">
                    Built // 2026
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Action */}
        {visibleCount < projectData.length && (
          <div className="mt-24 flex flex-col items-center gap-6">
            <div className="h-12 w-px bg-slate-200"></div>
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Discover More Work
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;