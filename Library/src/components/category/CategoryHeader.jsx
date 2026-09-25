import React from "react";

const CategoryHeader = ({ category, page, currentIndex, visibleCount }) => {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-amber-900/20 pb-3 gap-2">
      <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-amber-950 capitalize tracking-tight flex items-center gap-2">
        <span className="w-1.5 h-4 sm:h-5 lg:h-6 bg-amber-700 rounded-full shadow-xs" />
        {category}
      </h2>
      <span className="text-[10px] sm:text-xs font-semibold text-amber-900 tracking-wider uppercase bg-amber-100/80 px-2.5 sm:px-3 py-1 rounded-full border border-amber-300/70 shadow-xs shrink-0">
        Shelf {page} • Books {currentIndex + 1}-{currentIndex + visibleCount}
      </span>
    </div>
  );
};

export default CategoryHeader;