import React from 'react';

const IntroCard = ({ img, title, description }) => {
  return (
    <div className="group flex flex-row items-center gap-4 border border-slate-200/90 bg-white p-4 rounded-xl shadow-xs hover:border-indigo-200 hover:shadow-md transition-all duration-200 h-full text-left">
      <div className="shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-indigo-50/40 transition-colors">
        <img 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" 
          src={img} 
          alt={title} 
        />
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntroCard;