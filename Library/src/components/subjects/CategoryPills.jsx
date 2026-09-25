import React from "react";

const CategoryPills = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 pt-1 snap-x snap-mandatory touch-pan-x scrollbar-none [&::-webkit-scrollbar]:hidden">
        <button
          onClick={() => onSelectCategory("All")}
          className={`snap-start px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
            selectedCategory === "All"
              ? "bg-slate-900 text-slate-50 shadow-xs scale-102"
              : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-300"
          }`}
        >
          All ({categories.length})
        </button>
        {categories.map((sub) => {
          const isActive = selectedCategory === sub.category;
          return (
            <button
              key={sub.category}
              onClick={() => onSelectCategory(sub.category)}
              className={`snap-start px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-slate-50 shadow-xs scale-102"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-300"
              }`}
            >
              {sub.category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPills;