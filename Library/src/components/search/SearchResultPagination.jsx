import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { calculatePageNumbers } from "../../utils/pagination";

const SearchResultPagination = ({ currentPage, totalPages, onGoToPage, onPrev, onNext }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = calculatePageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center mb-6">
      <nav 
        className="inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-white/80 border border-blue-200/60 shadow-lg shadow-blue-500/5 backdrop-blur-xl transition-all duration-300"
        aria-label="Pagination"
      >
        {/* First Page Quick Jump */}
        <button
          disabled={currentPage === 1}
          onClick={() => onGoToPage(1)}
          className={`p-2 rounded-full transition-all duration-200 ${
            currentPage === 1
              ? "text-slate-300 cursor-not-allowed"
              : "text-blue-900/70 hover:text-blue-600 hover:bg-blue-50 hover:scale-110 active:scale-95 cursor-pointer"
          }`}
          title="First Page"
          aria-label="First Page"
        >
          <ChevronsLeft size={16} />
        </button>

        {/* Previous Page Button */}
        <button
          disabled={currentPage === 1}
          onClick={onPrev}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 ${
            currentPage === 1
              ? "text-slate-300 cursor-not-allowed"
              : "text-blue-950 bg-blue-50/80 hover:bg-blue-600 hover:text-white border border-blue-200/60 hover:border-blue-600 shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="h-4 w-px bg-blue-200/60 mx-0.5" />

        {/* Page Pills */}
        <div className="flex items-center gap-1 px-1">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-1 text-xs text-blue-900/40 font-bold select-none">
                  •••
                </span>
              );
            }

            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onGoToPage(page)}
                className={`relative min-w-8.5 h-8.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-linear-to-tr from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30 scale-105"
                    : "text-blue-900/70 hover:bg-blue-100/60 hover:text-blue-950 hover:scale-105 active:scale-95"
                }`}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <div className="h-4 w-px bg-blue-200/60 mx-0.5" />

        {/* Next Page Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={onNext}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 ${
            currentPage === totalPages
              ? "text-slate-300 cursor-not-allowed"
              : "text-blue-950 bg-blue-50/80 hover:bg-blue-600 hover:text-white border border-blue-200/60 hover:border-blue-600 shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
          }`}
          aria-label="Next Page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>

        {/* Last Page Quick Jump */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onGoToPage(totalPages)}
          className={`p-2 rounded-full transition-all duration-200 ${
            currentPage === totalPages
              ? "text-slate-300 cursor-not-allowed"
              : "text-blue-900/70 hover:text-blue-600 hover:bg-blue-50 hover:scale-110 active:scale-95 cursor-pointer"
          }`}
          title="Last Page"
          aria-label="Last Page"
        >
          <ChevronsRight size={16} />
        </button>
      </nav>
    </div>
  );
};

export default SearchResultPagination;