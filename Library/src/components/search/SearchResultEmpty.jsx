import React from "react";
import { BookOpen } from "lucide-react";

const SearchResultEmpty = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-[50vh]">
      <div className="w-16 h-16 bg-blue-50 border border-blue-200/60 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
        <BookOpen size={32} />
      </div>
      <h2 className="text-xl font-bold text-blue-950">No Search Results Found</h2>
      <p className="text-sm text-slate-600 mt-1 max-w-sm">
        {query ? `We couldn't find any books matching "${query}".` : "No books available to display."} Try searching with a different title, author, or ISBN.
      </p>
    </div>
  );
};

export default SearchResultEmpty;