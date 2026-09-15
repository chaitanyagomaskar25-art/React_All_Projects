import React from 'react';
import EHeader from '../components/education/EHeader';
import HSkills from '../components/education/HSkills';
import SSkills from '../components/education/SSkills';
import UsedTools from '../components/education/UsedTools';
import Availability from '../components/education/Availability';

const Education = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-32 pb-24 px-6 md:px-12 selection:bg-blue-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER: IDENTITY & ACADEMICS --- */}
      <EHeader />

        {/* --- SKILLS & TOOLS MASONRY --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          
          {/* HARD SKILLS */}
         <HSkills />
          {/* SOFT SKILLS */}
          <SSkills />

          {/* WORKFLOW TOOLS */}
         <UsedTools />
        </div>

        {/* --- AVAILABILITY / CALL TO ACTION --- */}
       <Availability />
      </div>
    </div>
  );
};

export default Education;