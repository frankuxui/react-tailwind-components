import React from 'react'
import { Roboto } from '@next/font/google'
import '../styles/globals.css'
import '../styles/prims-synthWave84.css'
import { MDXProvider } from '@mdx-js/react'
import APPContext from 'components/docs/context'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
})

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{` html { font-family: ${roboto.style.fontFamily}; } `}</style>
      <APPContext>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </APPContext>
    </>
  )
}

export default MyApp
