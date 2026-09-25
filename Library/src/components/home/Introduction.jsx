import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IntroCard from './IntroCard';
import { introCardsData } from '../../data/introData';

const Introduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = introCardsData.slice(currentIndex, currentIndex + cardsPerPage);

  const nextSlide = () => {
    if (currentIndex < introCardsData.length - cardsPerPage) {
      setCurrentIndex((prev) => prev + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(0, prev - cardsPerPage));
    }
  };

  return (
    <div className="mb-6 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-slate-900 text-lg sm:text-xl font-bold tracking-tight">
          Welcome to Open Library
        </h2>

        <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
          {Math.floor(currentIndex / cardsPerPage) + 1} / {Math.ceil(introCardsData.length / cardsPerPage)}
        </div>
      </div>
      
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`p-2 sm:p-2.5 rounded-full border transition-all shrink-0 ${
            currentIndex === 0 
              ? 'border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed' 
              : 'border-slate-300 bg-white text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-xs active:scale-95 cursor-pointer'
          }`}
          aria-label="Previous cards"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleCards.map((card) => (
            <IntroCard key={card.id} {...card} />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentIndex >= introCardsData.length - cardsPerPage}
          className={`p-2 sm:p-2.5 rounded-full border transition-all shrink-0 ${
            currentIndex >= introCardsData.length - cardsPerPage
              ? 'border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed' 
              : 'border-slate-300 bg-white text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-xs active:scale-95 cursor-pointer'
          }`}
          aria-label="Next cards"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Introduction;