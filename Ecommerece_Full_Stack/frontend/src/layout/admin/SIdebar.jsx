import React, { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: "📊", end: true },
    { path: "/admin/add-products", label: "Add Products", icon: "➕" },
    { path: "/admin/products", label: "Products", icon: "📦" },
    { path: "/admin/graph", label: "Graph", icon: "📈" },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Top Header (Fixed top bar for mobile screens) */}
      <header className="md:hidden shrink-0 z-40 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
            ⚡
          </div>
          <span className="text-sm font-black text-white tracking-tight">Admin Console</span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white transition-all active:scale-95"
          aria-label="Toggle Navigation"
        >
          <span className="text-lg leading-none">{isOpen ? "✕" : "☰"}</span>
        </button>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {isOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden transition-opacity"
        />
      )}

      {/* Sidebar - Locked to full height (h-screen) */}
      <aside
        className={`fixed md:relative top-0 left-0 z-50 h-screen w-64 bg-slate-900/95 md:bg-slate-900/90 border-r border-slate-800/80 backdrop-blur-2xl flex flex-col shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar Brand Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-indigo-500/25">
              ⚡
            </div>
            <div>
              <h1 className="text-sm font-black text-white tracking-tight">Admin Console</h1>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Control Panel</p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="md:hidden text-slate-400 hover:text-white p-1 text-sm"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Navigation Links List */}
        <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/10 text-indigo-400 border border-indigo-500/30 shadow-md shadow-indigo-500/10"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent"
                }`
              }
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer Fixed Action */}
        <div className="p-4 border-t border-slate-800/80 shrink-0">
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-800 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
          >
            <span>←</span> Back to Storefront
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;