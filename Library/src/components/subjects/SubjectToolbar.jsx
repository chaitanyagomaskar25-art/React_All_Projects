import React, { useRef, useState, useEffect } from "react";
import { Search, X, ArrowUpDown, ChevronDown, Check, SortAsc, SortDesc, ListOrdered } from "lucide-react";

const SORT_OPTIONS = [
  { id: "asc", label: "A to Z", fullLabel: "A to Z (Alphabetical)", icon: SortAsc },
  { id: "desc", label: "Z to A", fullLabel: "Z to A (Reverse)", icon: SortDesc },
  { id: "count", label: "Most Subtopics", fullLabel: "Most Subtopics", icon: ListOrdered },
];

const SubjectToolbar = ({ searchQuery, setSearchQuery, sortBy, setSortBy, totalCount }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeOption = SORT_OPTIONS.find((opt) => opt.id === sortBy);

  return (
    <div className="bg-slate-200/60 p-2.5 sm:p-3 rounded-2xl border border-slate-300/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 shadow-2xs">
      {/* Search Input */}
      <div className="relative flex-1 min-w-0">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search subjects or topics..."
          className="w-full pl-10 pr-9 py-2 bg-white rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-600 transition-all shadow-2xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown & Counter Container */}
      <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
        <div className="relative flex-1 sm:flex-initial" ref={sortRef}>
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl px-3 sm:px-3.5 py-2 text-xs font-bold text-slate-800 shadow-2xs transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/50"
          >
            <div className="flex items-center gap-1.5">
              <ArrowUpDown size={14} className="text-slate-500 shrink-0" />
              <span className="text-slate-400 font-medium hidden sm:inline">Sort:</span>
              <span className="text-slate-900 truncate max-w-27.5 sm:max-w-none">
                {activeOption?.label}
              </span>
            </div>
            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 shrink-0 ${isSortOpen ? "rotate-180" : ""}`} />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                Sort Subjects By
              </div>
              {SORT_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isSelected = sortBy === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setIsSortOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={14} className={isSelected ? "text-amber-700" : "text-slate-400"} />
                      <span>{option.fullLabel}</span>
                    </div>
                    {isSelected && <Check size={14} className="text-slate-900 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <span className="px-3 sm:px-3.5 py-2 rounded-xl bg-slate-900 text-slate-50 text-xs font-bold shadow-2xs shrink-0">
          {totalCount} Topics
        </span>
      </div>
    </div>
  );
};

export default SubjectToolbar;