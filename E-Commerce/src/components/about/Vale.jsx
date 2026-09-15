import React from 'react'

const Vale = ({values}) => {
  return (
   <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight">How we operate</h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto lg:mx-0 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v, i) => (
            <div key={i} className="group p-8 lg:p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm lg:text-base">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Vale
