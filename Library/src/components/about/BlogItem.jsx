import React from 'react';

const BlogItem = ({ title, date, url, isFirst }) => {
  return (
    <li className={isFirst ? '' : 'pt-2.5 border-t border-slate-200/80'}>
      <a
        href={url}
        className="group flex flex-col text-xs sm:text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
      >
        <span className="line-clamp-2 leading-snug group-hover:underline">
          {title}
        </span>
        <span className="text-[11px] font-medium text-slate-400 mt-1">
          {date}
        </span>
      </a>
    </li>
  );
};

export default BlogItem;