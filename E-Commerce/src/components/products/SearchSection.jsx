import React from 'react';
import { Search } from 'lucide-react';

const SearchSection = ({ value, onChange }) => {
  return (
   <div className="mt-12 flex items-center justify-center py-8 px-4 w-full">
  <div className="relative group w-full max-w-2xl"> {/* Increased max-w-md to max-w-2xl for size */}
    
    {/* Search Icon */}
    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
      <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
    </div>

    {/* Input Field */}
    <input
      type="search"
      placeholder="Search for products, collections..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full pl-14 pr-6 py-4 bg-white border border-slate-200 
                 text-slate-900 text-lg rounded-2xl shadow-sm transition-all duration-300
                 placeholder:text-slate-400
                 hover:border-slate-300 hover:shadow-md
                 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 
                 focus:bg-white"
    />
  </div>
</div>
  );
};

export default SearchSection;