import React from 'react'

const UsedTools = () => {
  return (
       <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3 text-slate-700">
              <span className="w-8 h-px bg-blue-500"></span> Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Git', 'GitHub', 'Postman', 'Vercel', 'Netlify', 'Chrome DevTools'].map(tool => (
                <span key={tool} className="px-3 py-1 bg-white rounded-lg text-[11px] font-bold text-slate-400 border border-slate-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
  )
}

export default UsedTools
