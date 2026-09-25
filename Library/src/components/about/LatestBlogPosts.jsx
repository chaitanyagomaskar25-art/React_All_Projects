import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import BlogItem from './BlogItem';

const LatestBlogPosts = ({ posts }) => {
  return (
    <div className="md:col-span-5 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
      <div>
        <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-200">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
            <Newspaper size={15} className="text-indigo-600" /> Latest Blog Posts
          </span>
          <a
            href="https://blog.openlibrary.org"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors"
          >
            View Blog <ArrowRight size={12} />
          </a>
        </div>

        <ul className="space-y-3">
          {posts.map((post, index) => (
            <BlogItem
              key={post.id}
              title={post.title}
              date={post.date}
              url={post.url}
              isFirst={index === 0}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestBlogPosts;