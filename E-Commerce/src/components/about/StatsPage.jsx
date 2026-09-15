import React from 'react'

const StatsPage = ({stats}) => {
  return (
    <section className="bg-white py-16 mt-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-3xl lg:text-4xl font-black tracking-tighter text-slate-900">{stat.value}</p>
                <p className="text-[10px] lg:text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StatsPage
