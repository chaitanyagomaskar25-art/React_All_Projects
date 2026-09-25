import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, Link } from "react-router";
import { getAuthorDetails } from "../api/authorsApi";
import { User, Calendar, Tag, ExternalLink, ArrowLeft, AlertCircle } from "lucide-react";

const AuthorDetails = () => {
  const { authorId } = useParams();

  const {
    data: author,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["author", authorId],
    queryFn: () => getAuthorDetails(authorId),
    enabled: !!authorId,
  });

  // Handle Loading Skeleton State
  if (isPending) {
    return (
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-8">
          <div className="w-48 h-64 bg-slate-200 rounded-lg shrink-0 mx-auto md:mx-0" />
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/2" />
            <div className="h-4 bg-slate-200 rounded w-1/4" />
            <div className="space-y-2 pt-4">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
              <div className="h-4 bg-slate-200 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle Error State
  if (isError || !author) {
    return (
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-8 text-center max-w-lg mx-auto">
          <AlertCircle size={40} className="text-rose-500 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-rose-900 mb-1">Failed to Load Author</h2>
          <p className="text-xs text-rose-700 mb-6">We couldn't retrieve the details for this author.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Extract author bio string safely (Open Library provides strings or objects with .value)
  const bioText = typeof author.bio === "string" ? author.bio : author.bio?.value;

  return (
    <div className="max-w-300 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} /> Back
        </button>
      </div>

      {/* Main Author Container */}
      <div className="bg-white border border-slate-300 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Avatar & Quick Info */}
        <div className="flex flex-col items-center shrink-0 w-full md:w-64">
          <div className="w-48 h-60 md:w-full md:h-72 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center relative">
            {author.photos?.[0] ? (
              <img
                src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                <User size={56} className="mb-2 stroke-1" />
                <span className="text-xs font-medium">No Image Available</span>
              </div>
            )}
          </div>

          {/* External Open Library Link */}
          <a
            href={`https://openlibrary.org/authors/${authorId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
          >
            <span>Open Library Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Right Column: Detailed Info & Bio */}
        <div className="flex-1 space-y-6">
          
          {/* Header & Names */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {author.name}
            </h1>
            
            {author.personal_name && author.personal_name !== author.name && (
              <p className="text-xs text-slate-500 font-medium mt-1">
                Personal Name: <span className="text-slate-700">{author.personal_name}</span>
              </p>
            )}
          </div>

          {/* Birth & Death Dates */}
          {(author.birth_date || author.death_date) && (
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 rounded-lg p-3 w-fit">
              <Calendar size={15} className="text-indigo-600 shrink-0" />
              <span>
                {author.birth_date ? author.birth_date : "Unknown"}
                {"  —  "}
                {author.death_date ? author.death_date : "Present"}
              </span>
            </div>
          )}

          {/* Biography */}
          {bioText && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Biography
              </h2>
              <div className="text-xs leading-relaxed text-slate-700 whitespace-pre-line bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 max-h-72 overflow-y-auto">
                {bioText}
              </div>
            </div>
          )}

          {/* Alternate Names */}
          {author.alternate_names?.length > 0 && (
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Tag size={12} /> Also Known As
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {author.alternate_names.map((name, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-md text-[11px] font-medium"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author ID Footer */}
          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
            ID: <span className="text-slate-600">{authorId}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;