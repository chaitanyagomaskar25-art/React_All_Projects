import React from "react";
import { Link } from "react-router";
import { Loader2, ArrowRight } from "lucide-react";
import RecentSearchList from "./RecentSearchList";

const SearchResultDropdown = ({
  search,
  recent,
  isPending,
  isError,
  books,
  onSelectRecent,
  onRemoveRecent,
  onClearRecent,
  onSelectBook,
  onViewAllResults,
}) => {
  const isSearchEmpty = search.trim() === "";

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-96 overflow-y-auto z-50 divide-y divide-gray-100">
      {/* Recent Searches */}
      {isSearchEmpty && (
        <RecentSearchList
          recent={recent}
          onSelectTerm={onSelectRecent}
          onRemoveTerm={onRemoveRecent}
          onClearAll={onClearRecent}
        />
      )}

      {/* Loading State */}
      {!isSearchEmpty && isPending && (
        <div className="flex items-center justify-center p-6 text-gray-500 text-sm gap-2">
          <Loader2 className="animate-spin text-sky-600" size={18} />
          <span>Searching Open Library...</span>
        </div>
      )}

      {/* Error State */}
      {!isSearchEmpty && isError && (
        <div className="p-4 text-center text-sm text-red-500">
          Failed to fetch search results. Please try again.
        </div>
      )}

      {/* No Results */}
      {!isSearchEmpty && !isPending && !isError && books.length === 0 && (
        <div className="p-6 text-center text-sm text-gray-500">
          No books found for &quot;{search}&quot;
        </div>
      )}

      {/* Preview Items */}
      {!isSearchEmpty && !isPending && !isError && books.length > 0 && (
        <div>
          {books.slice(0, 4).map((book) => (
            <Link
              key={book.key}
              to={`/book${book.key}`}
              onClick={onSelectBook}
              className="flex items-center gap-3 p-3 hover:bg-sky-50/60 transition-colors group"
            >
              <div className="w-10 h-14 bg-gray-100 rounded shrink-0 overflow-hidden border border-gray-200">
                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[9px] text-gray-400 text-center px-1">
                    No Cover
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-sky-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                </p>
                {book.first_publish_year && (
                  <span className="inline-block mt-1 text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    {book.first_publish_year}
                  </span>
                )}
              </div>
            </Link>
          ))}

          <button
            onClick={onViewAllResults}
            className="w-full py-2.5 px-3 bg-gray-50 hover:bg-sky-50 text-sky-600 text-xs font-semibold flex items-center justify-center gap-1.5 border-t border-gray-100 transition-colors"
          >
            <span>See all {books.length} results</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultDropdown;