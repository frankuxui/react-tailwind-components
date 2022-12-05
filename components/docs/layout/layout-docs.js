import React from 'react'
import Sidebar from 'components/docs/components/sidebar'
import Header from 'components/docs/components/header'
import Toc from 'components/docs/components/mdx/toc'
import Footer from 'components/docs/views/footer'
import Seo from '../components/seo'

const LayoutDocs = ({ sidebar, children, title, pageTitle, description, pageDescription }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <div className='flex w-full max-w-[90rem] m-auto md:px-4'>
        <Sidebar sidebar={sidebar} />
        <section className='flex-1 min-w-0'>
          <div className='px-6 md:px-10 md:max-w-[50rem]'>
            <div className='min-h-[76vh] mt-10 docs-content'>
              <h1 className='text-4xl md:text-5xl font-bold font-roboto'>{pageTitle}</h1>
              <p className='text-base md:text-xl mt-4'>{pageDescription}</p>
              <div className='mt-10 pb-12'>
                {children}
              </div>
            </div>
          </div>
        </section>
        <Toc />
      </div>
      <Footer />
    </>
  )
}

export default LayoutDocs
