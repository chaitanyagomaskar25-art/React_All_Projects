import { useQuery } from "@tanstack/react-query";
import { getCategoryBooks } from "../../api/bookApi";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookGrid from "../books/BookGrid";
import { IsPending } from "../skeleton/IsPending";

function SubjectCard({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useQuery({
    queryKey: ["books", category, page],
    queryFn: ({ queryKey }) => getCategoryBooks(queryKey[1], queryKey[2]),
    placeholderData: (previous) => previous
  });

  const books = data?.docs || [];
  const visibleBooks = books.slice(currentIndex, currentIndex + 4);

  if (isPending) return <IsPending />;

  if (isError) return <p className="text-xs text-rose-700 py-6 font-sans">Unable to load category books.</p>;

  return (
    <section className="mb-6 sm:mb-10 lg:mb-14 font-sans px-1 sm:px-0">
      {/* Library Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-5 lg:mb-7 border-b border-slate-300 pb-2 sm:pb-3 gap-2">
        <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-slate-900 capitalize tracking-tight flex items-center gap-1.5 sm:gap-2.5">
          <span className="w-1.5 sm:w-2 h-4 sm:h-5 lg:h-7 bg-amber-700 rounded-full shadow-xs" />
          {category} {data?.numFound ? `(${data.numFound.toLocaleString()})` : ""}
        </h2>
        <span className="text-[8px] sm:text-[10px] lg:text-xs font-semibold text-slate-800 tracking-wider uppercase bg-white px-2 sm:px-3 py-1 rounded-full border border-slate-300 shadow-xs shrink-0">
          Shelf {page} • Books {currentIndex + 1}-{currentIndex + visibleBooks.length}
        </span>
      </div>

      <div className="relative flex items-center gap-1.5 sm:gap-2.5 lg:gap-4">
        {/* Navigation Left */}
        <button
          disabled={currentIndex === 0 && page === 1}
          onClick={() => {
            if (currentIndex >= 4) {
              setCurrentIndex((prev) => prev - 4);
            } else if (page > 1) {
              setPage((prev) => prev - 1);
              setCurrentIndex(96);
            }
          }}
          className={`p-1.5 sm:p-2 lg:p-3 transition-all duration-200 rounded-full shrink-0 border z-30 ${
            currentIndex === 0 && page === 1
              ? 'border-slate-200/50 bg-slate-100 text-slate-300 cursor-not-allowed opacity-50'
              : 'border-slate-300 bg-white text-slate-700 hover:text-amber-800 hover:border-slate-400 hover:bg-slate-50 shadow-md active:scale-95 cursor-pointer'
          }`}
          aria-label="Previous books"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* 4-Column Grid Bookshelf Component */}      
        <BookGrid visibleBooks={visibleBooks} />

        {/* Navigation Right */}
        <button
          onClick={() => {
            if (currentIndex + 4 < books.length) {
              setCurrentIndex((prev) => prev + 4);
            } else {
              setPage((prev) => prev + 1);
              setCurrentIndex(0);
            }
          }}
          className="p-1.5 sm:p-2 lg:p-3 border border-slate-300 bg-white text-slate-700 hover:text-amber-800 hover:border-slate-400 hover:bg-slate-50 shadow-md active:scale-95 transition-all duration-200 rounded-full shrink-0 cursor-pointer z-30"
          aria-label="Next books"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </section>
  );
}

export default SubjectCard;