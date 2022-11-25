import React from 'react'

const Demo = ({ children }) => {
  return (
    <div className='relative mb-4 rounded-xl border border-slate-200 pt-14 pl-6 pr-6 pb-6 after:absolute after:top-4 after:left-6 after:text-sm after:uppercase after:text-slate-300 after:content-["Example"]'>
      {children}
    </div>
  )
}

export default Demo
