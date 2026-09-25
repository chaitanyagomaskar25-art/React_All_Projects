import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = ({ languages }) => {
  return (
    <div className="pt-6 pb-8 border-t border-slate-200 mb-6">
      <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-900 uppercase tracking-wider">
        <Globe size={14} className="text-indigo-600" /> Change Language
      </div>
      <div className="flex flex-wrap gap-1.5 text-xs">
        {languages.map((lang, idx) => (
          <a
            key={idx}
            href={`#lang-${idx}`}
            className="px-2.5 py-1 bg-white border border-slate-300 rounded-md hover:border-indigo-400 hover:text-indigo-600 transition-all font-medium text-[11px] sm:text-xs text-slate-700"
          >
            {lang}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;