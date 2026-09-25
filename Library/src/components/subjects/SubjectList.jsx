import React from "react";
import { NavLink } from "react-router";
import { Sparkles, Hash, ArrowUpRight, BookOpen } from "lucide-react";

const SubjectList = ({ data, searchQuery, onReset }) => {
  if (data.length === 0) {
    return (
      <div className="py-8 sm:py-16 text-center space-y-3 bg-white/70 rounded-2xl border border-dashed border-slate-300 px-4 shadow-2xs">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 text-amber-800 flex items-center justify-center mx-auto shadow-xs">
          <BookOpen size={20} className="sm:hidden" />
          <BookOpen size={24} className="hidden sm:block" />
        </div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900">No matching subjects found</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          We couldn't find any topics matching "{searchQuery}". Try searching for another category or clear your search filter.
        </p>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-50 text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-300">
      {data.map((sub, index) => (
        <div 
          key={sub.category} 
          className="py-4 sm:py-6 lg:py-8 first:pt-0 last:pb-0 group transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-2.5 sm:gap-4 md:gap-8">
            <div className="md:w-1/4 shrink-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-3.5 w-0.5 bg-amber-700 rounded-full" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-amber-800 transition-colors">
                  {sub.category}
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium pl-6">
                <Sparkles size={11} className="text-amber-700 shrink-0" />
                <span>{sub.subcategories.length} subtopics matching</span>
              </div>
            </div>

            <div className="md:w-3/4 flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {sub.subcategories.map((s) => (
                <NavLink
                  key={s}
                  to={`/subjects/${encodeURIComponent(s)}`}
                  className="group/pill inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-900 text-slate-800 hover:text-slate-50 border border-slate-300 hover:border-slate-900 transition-all duration-200 active:scale-95 shadow-2xs"
                >
                  <Hash size={11} className="text-slate-400 group-hover/pill:text-slate-300 transition-colors shrink-0" />
                  <span>{s}</span>
                  <ArrowUpRight size={12} className="opacity-40 group-hover/pill:opacity-100 group-hover/pill:translate-x-0.5 transition-all shrink-0" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectList;