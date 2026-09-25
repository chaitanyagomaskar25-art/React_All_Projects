import React from "react";

export function SkeletonHeader() {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-amber-900/15 pb-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-4 sm:h-5 lg:h-6 bg-amber-700/60 rounded-full animate-pulse" />
        <div className="h-5 sm:h-6 lg:h-7 w-32 sm:w-44 bg-amber-900/10 rounded-md animate-pulse" />
      </div>
      <div className="h-5 sm:h-6 w-28 sm:w-36 bg-amber-100/70 border border-amber-300/60 rounded-full animate-pulse shrink-0" />
    </div>
  );
}