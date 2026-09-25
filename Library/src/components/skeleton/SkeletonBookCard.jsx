import React from "react";

export function SkeletonBookCard() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 3D Viewport Skeleton */}
      <div 
        className="relative w-full h-48 sm:h-64 md:h-76 lg:h-88 flex items-center justify-center p-2"
        style={{ perspective: "1200px" }}
      >
        {/* 3D Tilted Book Skeleton */}
        <div 
          className="relative h-34 sm:h-50 md:h-62 lg:h-74 w-23 sm:w-35 md:w-45 lg:w-54 animate-pulse"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-24deg) rotateX(5deg)"
          }}
        >
          {/* Front Cover Skeleton Board */}
          <div 
            className="absolute -inset-x-px -inset-y-px z-20 rounded-r-[3px] bg-slate-300/90 shadow-[-6px_12px_24px_rgba(0,0,0,0.35)] p-2.5 sm:p-4 flex flex-col justify-between"
            style={{ transform: "translateZ(7px)" }}
          >
            {/* Spine Indentation Crease */}
            <div className="absolute top-0 bottom-0 left-2.5 sm:left-3.5 w-0.5 bg-black/15 pointer-events-none" />

            {/* Cover Content Wireframe */}
            <div className="w-6 sm:w-10 h-2 bg-slate-400/50 rounded-xs" />
            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-full h-2 sm:h-3 bg-slate-400/60 rounded-xs" />
              <div className="w-4/5 h-2 sm:h-3 bg-slate-400/60 rounded-xs" />
              <div className="w-1/2 h-1.5 sm:h-2 bg-slate-400/40 rounded-xs mt-2" />
            </div>
          </div>

          {/* Inner Paper Block */}
          <div 
            className="absolute inset-y-px left-0 right-0.5 bg-[#f7f4eb] rounded-r-xs z-10"
            style={{ transform: "translateZ(3.5px)" }}
          />

          {/* Right Edge Page Stack */}
          <div 
            className="absolute top-px bottom-px right-px w-3.5 sm:w-4.5 lg:w-5.5 bg-[#faf8f3] origin-right z-0 border-l border-amber-950/20" 
            style={{ 
              transform: "rotateY(90deg) translateZ(-1px)",
              backgroundImage: 'repeating-linear-gradient(90deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          {/* Top Edge Page Stack */}
          <div 
            className="absolute top-0 left-px right-px h-3.5 sm:h-4.5 lg:h-5.5 bg-[#efebd9] origin-top z-0 border-b border-amber-950/20"
            style={{ 
              transform: "rotateX(-90deg)",
              backgroundImage: 'repeating-linear-gradient(0deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          {/* Back Cover Board */}
          <div 
            className="absolute -inset-x-px -inset-y-px bg-slate-400 rounded-r-[3px] z-0 shadow-md" 
            style={{ transform: "translateZ(-7px)" }}
          />
        </div>

        {/* Floor Contact Shadow */}
        <div 
          className="absolute bottom-1 w-4/5 h-4 bg-amber-950/35 rounded-full blur-md -skew-x-12 translate-x-2"
          style={{ transform: "rotateX(80deg)" }}
        />
      </div>

      {/* Title & Author Info Wireframe */}
      <div className="w-full mt-2 flex flex-col items-center gap-1.5 px-1">
        <div className="h-3 sm:h-3.5 w-4/5 bg-slate-300/80 rounded-xs animate-pulse" />
        <div className="h-2 sm:h-2.5 w-1/2 bg-slate-200 rounded-xs animate-pulse" />
      </div>
    </div>
  );
}