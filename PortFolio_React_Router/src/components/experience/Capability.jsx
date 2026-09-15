import React from 'react'

const Capability = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <CapabilityCard 
            title="Frontend Engineering" 
            desc="Developing complex UIs with React, focusing on responsive grid systems and glassmorphism."
          />
          <CapabilityCard 
            title="System Architecture" 
            desc="Designing scalable folder structures and state management for enterprise-level applications."
          />
          <CapabilityCard 
            title="API Integration" 
            desc="Seamlessly connecting frontend interfaces with RESTful services and AI models like Gemini."
          />
        </div>
  )
}

const CapabilityCard = ({ title, desc }) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:-translate-y-2">
    <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
      <div className="h-2 w-2 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Capability
