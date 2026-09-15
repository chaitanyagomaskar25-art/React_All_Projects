import React from "react";
import SearchSection from "./SearchSection";

const TopPart = ({value, onChange}) => {
  return (
    <div className="max-w-360 mx-auto mb-10 pb-8 border-b border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
            Curated
          </span>
          <h2 className="text-5xl font-black text-slate-950 tracking-tighter">
            Editor's Choice
          </h2>
        </div>
        <p className="text-slate-600 font-medium max-w-sm md:text-right leading-relaxed">
          Discover our weekly pick of premium products, selected for their
          exceptional quality and innovative design.
        </p>
      </div>
      <SearchSection value={value} onChange={onChange}/>
    </div>
  );
};

export default TopPart;
