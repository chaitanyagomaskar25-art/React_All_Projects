import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./SIdebar";

const AdminLayout = () => {
  return (
    // h-screen and overflow-hidden prevent the entire page/sidebar from scrolling
    <div className="h-screen w-screen bg-slate-950 text-slate-100 font-sans flex flex-col md:flex-row relative overflow-hidden">
      
      {/* Dynamic Background Ambient Blurs */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable Content View (Only this area scrolls) */}
      <main className="flex-1 h-[calc(100vh-57px)] md:h-screen overflow-y-auto p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full relative z-10 scrollbar-thin scrollbar-thumb-slate-800">
        <Outlet />
      </main>
      
    </div>
  );
};

export default AdminLayout;