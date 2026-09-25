import React, { memo, useState } from 'react';
import BookCard from './BookCard';

const BookGrid = memo(({ visibleBooks }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex-1 relative rounded-2xl bg-linear-to-b from-stone-300/90 via-amber-100/20 to-stone-300/90 p-3 sm:p-5 border-t border-l border-r border-amber-950/25 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.3),inset_0_12px_24px_rgba(0,0,0,0.22)] overflow-hidden">
      <style>{`
        @keyframes richLibraryGlow {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shelf-border-rich {
          background-size: 300% 300%;
          animation: richLibraryGlow 12s ease infinite;
        }
      `}</style>

      {/* Architectural Alcove Wall Shadows */}
      <div className="absolute top-0 inset-x-0 h-12 bg-linear-to-b from-black/25 via-black/8 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-y-0 left-0 w-6 bg-linear-to-r from-black/20 via-black/5 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-0 w-6 bg-linear-to-l from-black/20 via-black/5 to-transparent pointer-events-none z-0" />

      {/* 4-Column Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 py-2 relative z-10">
        {visibleBooks.map((book, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <BookCard
              key={book.key || book.cover_i || book.title}
              book={book}
              isHovered={isHovered}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </div>

      {/* Animated Multi-Color Wooden Edge Molding */}
      <div className="absolute bottom-0 inset-x-0 h-4 sm:h-4.5 rounded-b-2xl border-t border-white/40 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] overflow-hidden pointer-events-none z-20">
        <div className="w-full h-full animate-shelf-border-rich bg-linear-to-r from-amber-950 via-amber-600  to-amber-950 opacity-95" />
        <div className="absolute top-0 inset-x-0 h-px bg-white/30" />
      </div>
    </div>
  );
});

export default BookGrid; 