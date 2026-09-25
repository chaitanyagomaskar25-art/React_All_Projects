import React from 'react';
import { Link } from 'react-router';
import { BookOpen } from 'lucide-react';

const BookCard = ({ book, isHovered, onMouseEnter, onMouseLeave }) => {
  const bookId = book?.key ? book.key.split("/").pop() : "";

  return (
    <Link 
      to={`/book/${bookId}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group flex flex-col items-center cursor-pointer w-full"
    >
      {/* 3D Perspective Viewport */}
      <div 
        className="relative w-full h-48 sm:h-64 md:h-76 lg:h-88 flex items-center justify-center p-2"
        style={{ perspective: "1200px" }}
      >
        {/* Realistic Warm Overhead Light Cone */}
        <div 
          className={`absolute inset-0 bg-radial from-amber-300/20 via-amber-500/5 to-transparent rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
            isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
          }`}
        />

        {/* Realistic 3D Book */}
        <div 
          className="relative h-34 sm:h-50 md:h-62 lg:h-74 w-23 sm:w-35 md:w-45 lg:w-54 transition-all duration-500 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered 
              ? "rotateY(0deg) rotateX(0deg) translateY(-14px) scale(1.07)"
              : "rotateY(-24deg) rotateX(5deg) translateY(0px)"
          }}
        >
          {/* Front Hardcover Board */}
          <div 
            className={`absolute inset-x-[-1.5px] inset-y-[-1.5px] z-20 rounded-r-[3px] overflow-hidden bg-slate-200 transition-all duration-500 ${
              isHovered 
                ? 'shadow-[0_28px_45px_rgba(0,0,0,0.35)]' 
                : 'shadow-[-8px_14px_28px_rgba(0,0,0,0.45)]'
            }`}
            style={{ transform: "translateZ(7px)" }}
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-2 text-[9px] sm:text-xs text-slate-200 font-sans text-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mb-1 text-amber-400" />
                <span className="line-clamp-3 font-semibold leading-tight">{book.title}</span>
              </div>
            )}

            {/* Spine Crease / Indentation Hinge Line */}
            <div className="absolute top-0 bottom-0 left-2.5 sm:left-3.5 w-0.5 bg-black/30 shadow-[1px_0_1px_rgba(255,255,255,0.35)] pointer-events-none" />

            {/* Surface Glare / Leather Texture Sheen */}
            <div 
              className={`absolute inset-0 bg-linear-to-tr from-black/25 via-white/20 to-transparent pointer-events-none transition-opacity duration-500 ${
                isHovered ? 'opacity-10' : 'opacity-85'
              }`} 
            />
          </div>

          {/* Inner Paper Block */}
          <div 
            className="absolute inset-y-px left-0 right-0.5 bg-[#f7f4eb] rounded-r-xs z-10"
            style={{ transform: "translateZ(3.5px)" }}
          />

          {/* Right Edge Page Stack Texture */}
          <div 
            className="absolute top-px bottom-px right-px w-3.5 sm:w-4.5 lg:w-5.5 bg-[#faf8f3] origin-right z-0 border-l border-amber-950/20" 
            style={{ 
              transform: "rotateY(90deg) translateZ(-1px)",
              backgroundImage: 'repeating-linear-linear(90deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          {/* Top Edge Page Stack Texture */}
          <div 
            className="absolute top-0 left-px right-px h-3.5 sm:h-4.5 lg:h-5.5 bg-[#efebd9] origin-top z-0 border-b border-amber-950/20"
            style={{ 
              transform: "rotateX(-90deg)",
              backgroundImage: 'repeating-linear-linear(0deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          {/* Back Cover Board */}
          <div 
            className="absolute inset-x-[-1.5px] inset-y-[-1.5px] bg-slate-900 rounded-r-[3px] z-0 shadow-md" 
            style={{ transform: "translateZ(-7px)" }}
          />
        </div>

        {/* Dynamic Ground Contact Shadow on Shelf Floor */}
        <div 
          className={`absolute bottom-1 w-4/5 h-4 bg-amber-950/55 rounded-full blur-md transition-all duration-500 origin-center ${
            isHovered 
              ? 'scale-110 bg-amber-950/25 blur-lg translate-y-3.5 skew-x-0' 
              : 'scale-100 -skew-x-12 translate-x-2'
          }`}
          style={{ transform: "rotateX(80deg)" }}
        />
      </div>

      {/* Info Labels */}
      <div className="w-full mt-2 text-center transition-all duration-300 px-1">
        <h3 className="text-[10px] sm:text-xs lg:text-sm font-bold text-slate-900 line-clamp-1 w-full group-hover:text-amber-800 transition-colors" title={book.title}>
          {book.title}
        </h3>
        <p className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-slate-500 line-clamp-1 w-full mt-0.5">
          {Array.isArray(book.author_name) ? book.author_name.join(", ") : book.author_name || "Unknown Author"}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;