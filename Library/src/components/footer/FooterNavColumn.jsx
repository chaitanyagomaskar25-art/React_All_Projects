import React from 'react';

const FooterNavColumn = ({ title, items, onScrollToTop }) => {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1.5 border-b border-slate-200">
        {title}
      </h3>
      <ul className="space-y-2 text-xs sm:text-sm font-medium">
        {items.map((item, idx) => (
          <li key={idx}>
            {item === "Return to Top" ? (
              <button
                onClick={onScrollToTop}
                className="text-indigo-600 font-bold hover:underline cursor-pointer py-0.5 text-left"
              >
                {item} ↑
              </button>
            ) : (
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-indigo-600 transition-colors block py-0.5"
              >
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavColumn;