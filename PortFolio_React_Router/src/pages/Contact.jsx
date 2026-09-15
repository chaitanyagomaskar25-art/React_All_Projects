import React from 'react';
import Topbar from '../components/contact/Topbar';
import LeftSide from '../components/contact/LeftSide';
import RightSide from '../components/contact/RightSide';

const Contact = () => {
  
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      
      {/* ATTRACTIVE TOUCH: Ambient Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-100 h-100 bg-slate-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* TOP HEADER */}
        <Topbar />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-slate-100 pt-16">
          
          {/* LEFT SIDE: Identity & Info */}
          <LeftSide />

          {/* RIGHT SIDE: The Form Card */}
        <RightSide />
        </div>
      </div>

      {/* Required CSS for the button shine animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { left: 125%; }
        }
      `}} />
    </div>
  );
};

export default Contact;