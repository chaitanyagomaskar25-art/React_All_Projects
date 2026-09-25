import React, { useState } from 'react';
import SubjectCard from './SubjectCard';
import SubjectControls from './SubjectControls';
import { subjectsData } from '../../data/subjectsData';

const ITEMS_PER_PAGE = 4;

const BrowseBySubject = ({ onSelectCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = subjectsData.filter(item => item.title && item.title.trim() !== "");

  const visibleSubjects = data.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE) + 1;

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < data.length) {
      setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= ITEMS_PER_PAGE) {
      setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  return (
    <section className="mb-14 font-sans max-w-7xl mx-auto px-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-8 pb-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-800 tracking-tight">
            Browse by Subject
          </h2>
        </div>

        {/* Stepper Navigation */}
        <SubjectControls
          currentPage={currentPage}
          totalPages={totalPages}
          isPrevDisabled={currentIndex === 0}
          isNextDisabled={currentIndex + ITEMS_PER_PAGE >= data.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleSubjects.map((item) => (
          <SubjectCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            count={item.count}
            onSelect={() => onSelectCategory && onSelectCategory(item.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseBySubject;