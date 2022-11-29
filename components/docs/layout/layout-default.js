import React from 'react'
import Head from 'next/head'

const DefaultLayout = ({ htmlTitle, htmlDescription }) => {
  return (
    <>
      <Head>
        <title>{htmlTitle}</title>
        <meta name='description' content={htmlDescription} />
      </Head>
    </>
  )
}

export default DefaultLayout
