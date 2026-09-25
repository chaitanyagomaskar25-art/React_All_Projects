import React from "react";
import FooterNavColumn from "./FooterNavColumn";
import LanguageSelector from "./LanguageSelector";
import FooterBranding from "./FooterBranding";
import { footerData } from "../../data/footerData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 text-slate-700 font-sans pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          <FooterNavColumn title="Open Library" items={footerData.openLibrary} />
          <FooterNavColumn title="Discover" items={footerData.discover} onScrollToTop={scrollToTop} />
          <FooterNavColumn title="Develop" items={footerData.develop} />

          {/* Help Column with Social Links */}
          <div>
            <FooterNavColumn title="Help" items={footerData.helpDetails.help} />
            <div className="flex items-center gap-3 pt-4">
              {footerData.helpDetails.logos.map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={logo.name}
                  className="p-1.5 bg-white border border-slate-300 rounded-lg hover:border-indigo-500 hover:shadow-xs transition-all"
                >
                  <img src={logo.url} alt={logo.name} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <LanguageSelector languages={footerData.languages} />

        {/* Internet Archive Branding */}
        <FooterBranding />

      </div>
    </footer>
  );
};

export default Footer;