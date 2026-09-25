import React from "react";

export function SkeletonNavButton() {
  return (
    <div className="p-2 sm:p-2.5 lg:p-3 rounded-full border border-amber-300/60 bg-white shadow-xs shrink-0">
      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-slate-200 rounded-full animate-pulse" />
    </div>
  );
}