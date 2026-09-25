import React from "react";
import { Info } from "lucide-react";

const SubjectInfoBanner = () => {
  return (
    <div className="rounded-2xl bg-slate-200/90 border border-slate-300 p-4 sm:p-5 shadow-xs space-y-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center gap-2 text-slate-800 text-xs font-bold tracking-wide uppercase">
        <Info size={14} className="text-amber-700 shrink-0" />
        <span>Library Knowledge Base</span>
      </div>

      <h3 className="text-sm sm:text-base font-bold text-slate-900">
        Understanding Subject Headings (LCSH)
      </h3>

      <blockquote className="border-l-2 border-amber-700 pl-3.5 py-0.5 my-2 italic text-xs text-slate-700 leading-relaxed">
        "The Library of Congress Subject Headings (LCSH) comprise a controlled vocabulary maintained by the United States Library of Congress for use in bibliographic records..."
      </blockquote>
      
      <p className="text-xs text-slate-600 leading-relaxed">
        Subject headings facilitate rapid catalog access by grouping books with shared topics, places, people, or historical periods.
      </p>

      <div className="pt-2 border-t border-slate-300 text-[11px] text-slate-500">
        <span className="font-semibold text-amber-800">Pro Tip:</span> Traditional catalogers are restricted to 3 subject headings, but feel free to enhance existing tags or create multi-topic collections!
      </div>
    </div>
  );
};

export default SubjectInfoBanner;