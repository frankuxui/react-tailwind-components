import React from 'react'
import Hamburger from 'components/docs/components/hamburger'
import Link from 'next/link'

// Context
import { APPContext } from 'components/docs/context'

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = React.useContext(APPContext)

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <header className='sticky top-0 left-0 right-0 w-full z-20 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white transition-shadow'>
      <div className='h-16 flex justify-between items-center m-auto max-w-[90rem] px-4'>
        <div className='flex items-center justify-start'>
          <Hamburger sidebarOpen={handleSidebar} />
          <Link href='/' className='no-underline font-medium text-lg' passHref>
            Development tools
          </Link>
        </div>
        <span className='text-xs px-3 py-1 rounded-md text-white bg-black'>Version 2.0</span>
      </div>
    </header>
  )
}

export default Header
