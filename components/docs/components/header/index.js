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
      <div className='h-16 m-auto max-w-[90rem]'>
        <div className='flex items-center justify-between w-full h-full px-6'>
          <div className='flex items-center justify-start'>
            <Hamburger sidebarOpen={handleSidebar} />
            <Link href='/' className='no-underline font-medium text-lg' passHref>
              Development tools
            </Link>
          </div>
          <span className='text-xs px-3 py-[5px] rounded-md text-black bg-green-100'>Version 2.0</span>
        </div>
      </div>
    </header>
  )
}

export default Header
