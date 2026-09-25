import React from "react";
import { History, Trash2 } from "lucide-react";

const RecentSearchList = ({ recent, onSelectTerm, onRemoveTerm, onClearAll }) => {
  if (!recent.length) return null;

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
          <History size={13} /> Recent Searches
        </span>
        <button
          onClick={onClearAll}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors"
        >
          Clear all
        </button>
      </div>
      <div className="space-y-1">
        {recent.map((term, index) => (
          <div
            key={index}
            onClick={() => onSelectTerm(term)}
            className="flex items-center justify-between px-2 py-1.5 text-sm text-gray-700 hover:bg-sky-50 rounded-lg cursor-pointer group"
          >
            <span className="truncate group-hover:text-sky-600">{term}</span>
            <button
              onClick={(e) => onRemoveTerm(e, term)}
              className="text-gray-300 hover:text-gray-500 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearchList;