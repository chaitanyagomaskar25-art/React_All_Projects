import React, { useState } from "react";
import { SUBJECTS } from "../../data/subjects";
import { HelpCircle, ChevronDown, Layers } from "lucide-react";
import { useSubjectFilter } from "../../hooks/useSubjectFilter";
import SubjectToolbar from "./SubjectToolbar";
import CategoryPills from "./CategoryPills";
import SubjectInfoBanner from "./SubjectInfoBanner";
import SubjectList from "./SubjectList";

const SubjectSection = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredData,
    totalSubtopicsCount,
    resetFilters,
  } = useSubjectFilter(SUBJECTS);

  return (
    // Fixed: Replaced `w-200` with `w-full overflow-x-hidden` for full-width responsive layout
    <div className="bg-slate-100 min-h-screen py-4 sm:py-6 lg:py-8 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 space-y-4 sm:space-y-6 lg:space-y-8 font-sans">
        
        {/* Header Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-300">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800 shadow-xs shrink-0">
                <Layers size={18} className="text-amber-700 sm:hidden" />
                <Layers size={20} className="text-amber-700 hidden sm:block" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
                  Subject Explorer
                </h1>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Browse through curated library catalogs & classifications
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsInfoOpen(!isInfoOpen)}
              className="inline-flex items-center justify-between sm:justify-start gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all duration-200 cursor-pointer w-full sm:w-auto shadow-xs active:scale-98"
            >
              <div className="flex items-center gap-1.5">
                <HelpCircle size={15} className="text-amber-700 shrink-0" />
                <span>What is a Subject Heading?</span>
              </div>
              <ChevronDown size={14} className={`transition-transform duration-200 shrink-0 ${isInfoOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <SubjectToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalCount={totalSubtopicsCount}
          />

          <CategoryPills
            categories={SUBJECTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {isInfoOpen && <SubjectInfoBanner />}

        <SubjectList
          data={filteredData}
          searchQuery={searchQuery}
          onReset={resetFilters}
        />

      </div>
    </div>
  );
};

export default SubjectSection;