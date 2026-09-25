import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const ProjectNarrative = () => {
  return (
    <div className="md:col-span-7 flex flex-col justify-between space-y-4 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0">
            <BookOpen size={18} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            About the Project
          </h2>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
          Open Library is an open, editable library catalog, building towards a web page for every book ever published.{' '}
          <a
            href="https://openlibrary.org/about"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors"
          >
            More <ExternalLink size={12} />
          </a>
        </p>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by{' '}
          <a href="#subjects" className="text-indigo-600 font-semibold hover:underline">
            subjects
          </a>
          ,{' '}
          <a href="#authors" className="text-indigo-600 font-semibold hover:underline">
            authors
          </a>
          , or{' '}
          <a href="#lists" className="text-indigo-600 font-semibold hover:underline">
            lists
          </a>{' '}
          members have created. If you love books, why not help build a library?
        </p>
      </div>
    </div>
  );
};

export default ProjectNarrative;