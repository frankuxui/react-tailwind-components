import React from 'react'
import '../styles/globals.css'
import '../styles/prims-synthWave84.css'
import APPContext from 'components/docs/context'
import { Analytics } from '@vercel/analytics/react'
import { getSeo } from 'components/docs/utils/seo'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

function MyApp ({ Component, pageProps }) {
  const seo = getSeo()
  return (
    <>
      <Head>
        <meta name='theme-color' content='#33D1FF' />
        <link rel='icon' href='/images/favicon.ico' />
        <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      </Head>
      <DefaultSeo
        {...seo}
      />
      <APPContext>
        <Component {...pageProps} />
      </APPContext>
      <Analytics />
    </>
  )
}

export default MyApp
