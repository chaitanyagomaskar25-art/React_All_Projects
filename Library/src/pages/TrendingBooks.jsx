import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingBooks } from "../api/bookApi";
import { Link } from "react-router";
import { 
  Flame, 
  BookOpen, 
  AlertCircle, 
  ArrowUpRight, 
  User, 
  Search, 
  X, 
  ArrowUpDown, 
  Check, 
  ChevronDown, 
  SortAsc, 
  SortDesc, 
  Sparkles 
} from "lucide-react";
import BookGrid from "../components/books/BookGrid";
import { IsPending } from "../components/skeleton/IsPending";

const SORT_OPTIONS = [
  { id: 'title-asc', label: 'Title (A to Z)', icon: SortAsc },
  { id: 'title-desc', label: 'Title (Z to A)', icon: SortDesc },
  { id: 'author-asc', label: 'Author Name', icon: User },
];

const Trending = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const { data, isPending, isError } = useQuery({
    queryKey: ["trending-books"],
    queryFn: getTrendingBooks,
  });

  const rawBooks = data?.works || [];

  // Filter and Sort Trending Books dynamically
  const filteredBooks = useMemo(() => {
    let result = rawBooks.filter((book) => {
      const titleMatch = book.title?.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const authorNames = Array.isArray(book.author_name) 
        ? book.author_name.join(" ") 
        : book.authors?.map(a => a.name).join(" ") || "";
      const authorMatch = authorNames.toLowerCase().includes(searchQuery.toLowerCase().trim());
      
      return titleMatch || authorMatch;
    });

    return result.sort((a, b) => {
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      if (sortBy === "author-asc") {
        const authorA = Array.isArray(a.author_name) ? a.author_name[0] : "";
        const authorB = Array.isArray(b.author_name) ? b.author_name[0] : "";
        return authorA.localeCompare(authorB);
      }
      return 0;
    });
  }, [rawBooks, searchQuery, sortBy]);

  const activeSortOption = SORT_OPTIONS.find(opt => opt.id === sortBy);

  return (
    <div className="bg-slate-100 min-h-screen py-6 sm:py-8 font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-6 sm:space-y-8">
        
        {/* Header Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800 shadow-xs shrink-0">
                <Flame size={20} className="text-amber-700" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                  Trending Explorer
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Browse through popular library catalogs & weekly highlights
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold shadow-xs">
              <Sparkles size={14} className="text-amber-700 shrink-0" />
              <span>Live OpenLibrary Data</span>
            </span>
          </div>

          {/* Search & Custom Sorting Control Toolbar */}
          <div className="bg-slate-200/60 p-3 rounded-2xl border border-slate-300/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-2xs">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title or author..."
                className="w-full pl-10 pr-9 py-2 bg-white rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-600 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Custom Modern Sorting Menu & Counter */}
            <div className="flex items-center justify-between md:justify-end gap-2 shrink-0">
              
              {/* Modern Custom Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-800 shadow-2xs transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/50"
                >
                  <ArrowUpDown size={14} className="text-slate-500 shrink-0" />
                  <span className="text-slate-400 font-medium hidden sm:inline">Sort:</span>
                  <span className="text-slate-900">{activeSortOption?.label}</span>
                  <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 shrink-0 ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Animated Dropdown Menu */}
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Sort Books By
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
                              ? 'bg-slate-100 text-slate-900 font-bold' 
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Icon size={14} className={isSelected ? 'text-amber-700' : 'text-slate-400'} />
                            <span>{option.label}</span>
                          </div>
                          {isSelected && <Check size={14} className="text-slate-900 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Counter Badge */}
              <span className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-50 text-xs font-bold shadow-2xs shrink-0">
                {filteredBooks.length} Books
              </span>
            </div>

          </div>
        </div>

        {/* Skeleton Loader */}
        {isPending && (
         <IsPending />
        )}

        {/* Error State */}
        {isError && (
          <div className="py-12 sm:py-16 text-center space-y-3 bg-white/70 rounded-2xl border border-dashed border-slate-300 px-4 shadow-2xs">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-amber-800 flex items-center justify-center mx-auto shadow-xs">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Failed to load trending catalog</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Something went wrong while fetching trending books. Please try again later.
            </p>
          </div>
        )}

        {/* Directory Grid Layout */}
        {!isPending && !isError && filteredBooks.length > 0 && (
<BookGrid visibleBooks={filteredBooks}/>
)}

        {/* Empty Search State */}
        {!isPending && !isError && filteredBooks.length === 0 && (
          <div className="py-12 sm:py-16 text-center space-y-3 bg-white/70 rounded-2xl border border-dashed border-slate-300 px-4 shadow-2xs">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-amber-800 flex items-center justify-center mx-auto shadow-xs">
              <BookOpen size={24} />
            </div>
            <h3 className="text-base font-bold text-slate-900">No matching books found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any books matching "{searchQuery}". Try clearing your search query.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSortBy("title-asc"); }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-50 text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Trending;