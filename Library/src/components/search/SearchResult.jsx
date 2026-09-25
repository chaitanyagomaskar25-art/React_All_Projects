import React, { useState } from "react";
import { useLocation } from "react-router";
import { Sparkles } from "lucide-react";
import SearchResultPagination from "./SearchResultPagination";
import SearchResultEmpty from "./SearchResultEmpty";
import Book3DCard from "./SearchBook3DCard";

const ITEMS_PER_PAGE = 8;

const SearchResult = () => {
  const { state } = useLocation();
  const books = state?.books || [];
  const query = state?.query || "";
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => goToPage(currentPage - 1);
  const handleNext = () => goToPage(currentPage + 1);

  if (!books.length) {
    return <SearchResultEmpty query={query} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 font-sans">
      <style>{`
        @keyframes ambientWoodGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shelf-border {
          background-size: 200% 200%;
          animation: ambientWoodGlow 8s ease infinite;
        }
      `}</style>

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-blue-900/10 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-6 bg-blue-600 rounded-full shadow-sm shadow-blue-500/30" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight">
            {query ? `Search Results for "${query}"` : "Search Results"}
          </h1>
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-900/90 bg-linear-to-r from-blue-50/90 via-sky-50/80 to-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shrink-0 shadow-xs backdrop-blur-xs">
          <Sparkles size={14} className="text-blue-600" />
          <span>Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, books.length)} of {books.length}</span>
        </div>
      </div>

      {/* Pagination Bar */}
      <SearchResultPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onGoToPage={goToPage}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Bookcase Container */}
      <div className="relative rounded-2xl bg-linear-to-b from-stone-200/80 via-amber-50/30 to-stone-300/60 p-3 sm:p-5 border border-amber-900/20 shadow-[inset_0_6px_16px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-8 bg-linear-to-b from-black/15 via-black/5 to-transparent pointer-events-none z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 py-2 relative z-10">
          {currentBooks.map((book) => (
            <Book3DCard key={book.key} book={book} />
          ))}
        </div>

        {/* Wooden Shelf Edge */}
        <div className="absolute bottom-0 inset-x-0 h-3 sm:h-3.5 rounded-b-2xl border-t border-white/20 shadow-[0_-2px_6px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-none z-20">
          <div className="w-full h-full animate-shelf-border bg-linear-to-r from-amber-950 via-amber-900 to-amber-950 opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;