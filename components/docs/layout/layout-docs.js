import React from 'react'
import Head from 'next/head'

// Next components
import { useRouter } from 'next/router'

// Views
import Footer from 'components/docs/views/footer'

/** Components */
import Sidebar from 'components/docs/components/sidebar'
import Header from 'components/docs/components/header'

const LayoutDocs = ({ sidebar, title, description, pageSection, pageSectionDescription, children }) => {
  const htmlTitle = title ? `Gomotor development tools - ${title}` : 'Gomotor development tools'
  const htmlDescription = description ? `${description}` : 'Guía de vistas, componentes y pautas a seguir para el desarrollo de Gomotor'

  // String
  const capitalized = (string) => {
    return string
      .charAt(0)
      .toUpperCase() +
    string
      .slice(1)
      .split('-')
      .join(' ')
  }

  // Dinamic title section

  const router = useRouter()
  const url = router.asPath
  const lastLetter = url.split('/')
  const slugItem = lastLetter[lastLetter.length - 1]
  const slugPageSection = capitalized(slugItem)

  return (
    <>
      <Head>
        <title>{htmlTitle}</title>
        <meta name='description' content={htmlDescription} />
      </Head>
      <Header />
      <div className='flex w-full max-w-[90rem] m-auto'>
        <Sidebar sidebar={sidebar} />
        <div className='flex-1 min-w-0'>
          <div className='px-6 md:px-10 max-w-3xl'>
            <div className='min-h-[76vh] mt-10 docs-content'>
              <h1 className='headline-1'>{pageSection || slugPageSection}</h1>
              <p className='docs-lead'>{pageSectionDescription}</p>
              <div className='mt-10'>
                {children}
              </div>
            </div>
            <Footer className='border-0' />
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutDocs
