import React from 'react';
import { ExternalLink } from 'lucide-react';

const FooterBranding = () => {
  return (
    <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 text-center md:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href="https://archive.org" target="_blank" rel="noreferrer" className="shrink-0">
          <img
            src="https://openlibrary.org/static/images/pantheon.png"
            alt="Internet Archive Logo"
            className="w-8 h-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>
        <p className="max-w-2xl leading-relaxed text-slate-600">
          Open Library is an initiative of the{" "}
          <a
            href="https://archive.org"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            Internet Archive <ExternalLink size={10} />
          </a>
          , a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other projects include the{" "}
          <a href="https://web.archive.org" className="text-indigo-600 font-semibold hover:underline">
            Wayback Machine
          </a>
          ,{" "}
          <a href="https://archive.org" className="text-indigo-600 font-semibold hover:underline">
            archive.org
          </a>{" "}
          and{" "}
          <a href="https://archive-it.org" className="text-indigo-600 font-semibold hover:underline">
            archive-it.org
          </a>.
        </p>
      </div>

      {/* Version badge */}
      <div className="shrink-0">
        <a
          href="https://github.com/internetarchive/openlibrary"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 bg-slate-200 border border-slate-300 px-3 py-1 rounded-full text-[11px] font-mono text-slate-700 hover:bg-slate-300 transition-colors"
        >
          version <span className="font-bold text-slate-900">7ea6b9e</span>
        </a>
      </div>
    </div>
  );
};

export default FooterBranding;