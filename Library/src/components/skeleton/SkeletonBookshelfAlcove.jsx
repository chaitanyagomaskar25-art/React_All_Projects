import React from "react";
import { SkeletonBookCard } from "./SkeletonBookCard";

export function SkeletonBookshelfAlcove({ itemCount = 4 }) {
  return (
    <div className="flex-1 relative rounded-2xl bg-linear-to-b from-stone-200/80 via-amber-50/30 to-stone-300/60 p-3 sm:p-5 border border-amber-900/20 shadow-[inset_0_6px_16px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* Alcove Ceiling Shadow Effect */}
      <div className="absolute top-0 inset-x-0 h-8 bg-linear-to-b from-black/15 via-black/5 to-transparent pointer-events-none z-0" />

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 py-2 relative z-10">
        {Array.from({ length: itemCount }).map((_, index) => (
          <SkeletonBookCard key={index} />
        ))}
      </div>

      {/* Animated 3D Wooden Shelf Lip (Bottom Border) */}
      <div className="absolute bottom-0 inset-x-0 h-3 sm:h-3.5 rounded-b-2xl border-t border-white/20 shadow-[0_-2px_6px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-none z-20">
        <div className="w-full h-full animate-shelf-border-skeleton bg-linear-to-r from-amber-950 via-amber-900 to-amber-950 opacity-90" />
      </div>
    </div>
  );
}