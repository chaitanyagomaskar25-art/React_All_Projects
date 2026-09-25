import React from 'react';
import { BookOpen } from 'lucide-react';

const SubjectCard = ({ icon, title, count, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative p-4 transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between h-60 hover:-translate-y-1.5"
    >
      {/* Icon Image Container */}
      <div className="relative my-auto">
        <div className="w-20 h-20 flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain filter drop-shadow-xs"
          />
        </div>
      </div>

      {/* Subject Title */}
      <div className="w-full mb-1">
        <h3 className="text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors line-clamp-1">
          {title}
        </h3>
      </div>

      {/* Book Count Badge */}
      <div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 group-hover:text-stone-700 transition-colors">
          <BookOpen size={13} className="text-amber-600" />
          {count} Books
        </span>
      </div>
    </div>
  );
};

export default SubjectCard;