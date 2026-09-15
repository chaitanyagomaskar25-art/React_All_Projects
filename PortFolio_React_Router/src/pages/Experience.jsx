import React from "react";
import Header from "../components/experience/Header";
import Capability from "../components/experience/Capability";
import CodeQuality from "../components/experience/CodeQuality";
import FeaturedProjects from "../components/experience/FeaturedProjects";

const Experience = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 md:px-12 selection:bg-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: DEV IDENTITY */}
        <Header />

        {/* SECTION 2: WHAT I CAN DO (Capabilities) */}
        <Capability />

        {/* SECTION 3: CODE QUALITY STANDARDS */}
        <CodeQuality />

        {/* SECTION 4: FEATURED PROJECTS (Experience Timeline) */}
        <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <h2 className="text-[clamp(3rem,8vw,5rem)] font-extrabold tracking-tighter leading-none mb-6">
                Featured <span className="text-slate-200">Projects.</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>
            {/* --- FEATURED LIST --- */}
            <FeaturedProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
