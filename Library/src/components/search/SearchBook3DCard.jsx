import React from "react";
import { Link } from "react-router";
import { BookOpen, User, Calendar } from "lucide-react";

const Book3DCard = ({ book }) => {
  const cleanKey = book.key ? book.key.split("/").pop() : "";

  return (
    <Link
      to={`/book/${cleanKey}`}
      className="flex flex-col items-center w-full group focus:outline-none"
    >
      <div 
        className="relative w-full h-56 sm:h-68 lg:h-80 flex items-center justify-center p-2"
        style={{ perspective: "1200px" }}
      >
        <div 
          className="relative h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-46 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1.5"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-24deg) rotateX(5deg)"
          }}
        >
          {/* Front Cover Board */}
          <div 
            className="absolute -inset-x-px -inset-y-px z-20 rounded-r-[3px] bg-stone-800 shadow-[-6px_12px_24px_rgba(0,0,0,0.35)] overflow-hidden"
            style={{ transform: "translateZ(7px)" }}
          >
            <div className="absolute top-0 bottom-0 left-2.5 sm:left-3.5 w-0.5 bg-black/20 z-30 pointer-events-none" />

            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-stone-700 p-3 flex flex-col justify-between border-l-4 border-amber-900/60">
                <div className="text-[10px] text-amber-200/70 font-mono uppercase tracking-wider">Open Library</div>
                <div className="my-auto text-center px-1">
                  <BookOpen size={24} className="mx-auto text-amber-200/50 mb-1" />
                  <p className="text-xs font-semibold text-amber-100 line-clamp-3 leading-tight">{book.title}</p>
                </div>
                <div className="text-[9px] text-amber-200/60 truncate">
                  {book.author_name ? book.author_name[0] : "Unknown"}
                </div>
              </div>
            )}
          </div>

          {/* Paper Block & Pages */}
          <div 
            className="absolute inset-y-px left-0 right-0.5 bg-[#f7f4eb] rounded-r-xs z-10"
            style={{ transform: "translateZ(3.5px)" }}
          />

          <div 
            className="absolute top-px bottom-px right-px w-3.5 sm:w-4.5 lg:w-5.5 bg-[#faf8f3] origin-right z-0 border-l border-amber-950/20" 
            style={{ 
              transform: "rotateY(90deg) translateZ(-1px)",
              backgroundImage: 'repeating-linear-gradient(90deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          <div 
            className="absolute top-0 left-px right-px h-3.5 sm:h-4.5 lg:h-5.5 bg-[#efebd9] origin-top z-0 border-b border-amber-950/20"
            style={{ 
              transform: "rotateX(-90deg)",
              backgroundImage: 'repeating-linear-gradient(0deg, #f5f1e6, #f5f1e6 2px, #dcd5c5 2px, #dcd5c5 3px)' 
            }}
          />

          <div 
            className="absolute -inset-x-px -inset-y-px bg-amber-950 rounded-r-[3px] z-0 shadow-md" 
            style={{ transform: "translateZ(-7px)" }}
          />
        </div>

        {/* Floor Contact Shadow */}
        <div 
          className="absolute bottom-1 w-4/5 h-4 bg-amber-950/35 rounded-full blur-md -skew-x-12 translate-x-2 pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
          style={{ transform: "rotateX(80deg)" }}
        />
      </div>

      {/* Info Tag */}
      <div className="w-full mt-1 flex flex-col items-center text-center px-1">
        <h2 className="text-xs sm:text-sm font-semibold text-amber-950 line-clamp-1 group-hover:text-amber-700 transition-colors">
          {book.title}
        </h2>

        <div className="mt-1 flex items-center justify-center gap-2 text-[11px] text-amber-900/70 w-full">
          <span className="truncate flex items-center gap-1 max-w-[70%]">
            <User size={12} className="shrink-0 opacity-70" />
            <span className="truncate">{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</span>
          </span>

          {book.first_publish_year && (
            <span className="shrink-0 flex items-center gap-0.5 opacity-80">
              <Calendar size={11} className="shrink-0" />
              <span>{book.first_publish_year}</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Book3DCard;