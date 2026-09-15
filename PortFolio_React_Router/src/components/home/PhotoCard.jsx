import React from 'react';

const PhotoCard = () => {
  return (
   <div className="relative group max-w-sm mx-auto">
  {/* 1. Subtle Background Depth Layer */}
  <div className="absolute -inset-2 bg-slate-50 rounded-[2.5rem] scale-95 group-hover:scale-100 group-hover:bg-blue-50/40 transition-all duration-700 ease-out -z-10"></div>

  {/* 2. Main Image Container */}
  <div className="relative aspect-4/5 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(59,130,246,0.08)] group-hover:-translate-y-2">
    
    {/* Image / Placeholder Layer */}
    <div className="absolute inset-0 bg-slate-100 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em]">
            Chaitanya Gomaskar
          </span>
          <div className="h-px w-8 bg-slate-200"></div>
        </div>
      </div>

      {/* When ready, add your image here:
      */}

        <img src="https://i.pinimg.com/736x/7f/3b/cf/7f3bcfb71e86b7af1f60d9860fe5557b.jpg" className="w-full h-full object-cover" alt="Chaitanya" /> 

    </div>

    {/* 3. The "Identity Glass" Reveal */}
    <div className="absolute inset-x-4 bottom-4">
      <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex justify-between items-center">
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Full-Stack Engineer
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Chaitanya H. Gomaskar
            </p>
          </div>
          <div className="flex h-8 w-8 rounded-full bg-slate-900 items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-700 delay-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l10 10M17 7H7v10"/></svg>
          </div>
        </div>
      </div>
    </div>

    {/* 4. Fine Polish: Top-right Status Dot */}
    <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tight">Active</span>
    </div>
  </div>
</div>
  );
};

export default PhotoCard;