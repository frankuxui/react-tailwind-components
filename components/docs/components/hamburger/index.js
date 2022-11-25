import React from 'react'

const Hamburger = ({ sidebarOpen }) => {
  return (
    <button className='flex items-center justify-center md:hidden mr-4 rounded-md w-9 h-9 transition-all hover:bg-slate-100' onClick={sidebarOpen}>
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <line x1='3' y1='12' x2='21' y2='12' />
        <line x1='3' y1='6' x2='21' y2='6' />
        <line x1='3' y1='18' x2='21' y2='18' />
      </svg>
    </button>
  )
}

export default Hamburger
