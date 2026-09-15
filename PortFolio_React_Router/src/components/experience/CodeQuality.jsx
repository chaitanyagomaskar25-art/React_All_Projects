import React from 'react'

const CodeQuality = () => {
  return (
         <div className="bg-slate-950 rounded-[3rem] p-8 md:p-20 text-white mb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">High-Standard <br/>Code Quality</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Every project I ship follows a strict technical manifesto to ensure longevity and ease of maintenance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <QualityMetric label="Clean Structure" value="Modular & Reusable" />
              <QualityMetric label="Performance" value="Optimized Assets" />
              <QualityMetric label="Styling" value="Custom Modern CSS" />
              <QualityMetric label="Documentation" value="Self-Explaining Code" />
            </div>
          </div>
        </div>

  )
};

const QualityMetric = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
      {label}
    </p>
    <p className="text-lg font-semibold text-white">{value}</p>
  </div>
);

export default CodeQuality
