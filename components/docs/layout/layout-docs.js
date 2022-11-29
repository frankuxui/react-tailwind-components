import React from 'react'
import Sidebar from 'components/docs/components/sidebar'
import Header from 'components/docs/components/header'
// import Toc from 'components/docs/mdx-components/toc'

const LayoutDocs = ({ sidebar, children, title, description }) => {
  return (
    <>
      <Header />
      <div className='flex w-full max-w-[90rem] m-auto'>
        <Sidebar sidebar={sidebar} />
        <div className='flex-1 min-w-0'>
          <div className='px-6 md:px-10 max-w-3xl'>
            <div className='min-h-[76vh] mt-10 docs-content'>
              <h1 className='text-4xl md:text-5xl font-bold font-roboto'>{title}</h1>
              <p className='text-base md:text-xl mt-4'>{description}</p>
              <div className='mt-10'>
                {children}
              </div>
            </div>
            <footer>Footer</footer>
          </div>
        </div>
        {/* <Toc /> */}
      </div>
    </>
  )
}

export default LayoutDocs
