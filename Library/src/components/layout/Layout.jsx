import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Container - pt-28 ensures page content is not hidden behind the fixed header */}
      <main className="max-w-1200 flex-1 w-full pt-28 sm:pt-32">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;