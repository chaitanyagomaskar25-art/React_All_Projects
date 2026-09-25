import React from "react";
import { Link } from "react-router";
import { BookX, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8 font-sans">
      <div className="max-w-md w-full text-center space-y-6 sm:space-y-8 bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-300/80 shadow-sm">
        
        {/* Visual Graphic Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-200 border border-slate-300 flex items-center justify-center text-amber-700 shadow-xs">
            <BookX className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <span className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-slate-900 text-slate-50 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase shadow-xs">
            Error
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-mono">
            404
          </p>
          <h1 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed font-medium">
            Sorry, the page or catalog entry you are looking for has been moved, removed, or does not exist.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
          >
            <ArrowLeft size={15} className="text-slate-500" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-50 text-xs font-bold transition-all duration-200 shadow-xs active:scale-98"
          >
            <Home size={15} />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;