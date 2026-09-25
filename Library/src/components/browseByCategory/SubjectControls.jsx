import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SubjectControls = ({ currentPage, totalPages, isPrevDisabled, isNextDisabled, onPrev, onNext }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-wider text-stone-400">
        {currentPage} / {totalPages}
      </span>
      <div className="flex items-center gap-1 bg-stone-100/60 p-1 rounded-full">
        <button
          disabled={isPrevDisabled}
          onClick={onPrev}
          className={`p-2 rounded-full transition-all ${
            isPrevDisabled
              ? 'text-stone-300 cursor-not-allowed'
              : 'text-stone-700 hover:bg-white hover:shadow-xs active:scale-90 cursor-pointer'
          }`}
          aria-label="Previous subjects"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          disabled={isNextDisabled}
          onClick={onNext}
          className={`p-2 rounded-full transition-all ${
            isNextDisabled
              ? 'text-stone-300 cursor-not-allowed'
              : 'text-stone-700 hover:bg-white hover:shadow-xs active:scale-90 cursor-pointer'
          }`}
          aria-label="Next subjects"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SubjectControls;