import React from 'react'
import Head from 'next/head'
import { Router } from 'next/router'
import OpenGraph from 'components/docs/components/open-graph'

const DefaultLayout = ({ htmlTitle, htmlDescription, image }) => {
  const path = Router?.asPath
  return (
    <>
      <Head>
        <title>{htmlTitle}</title>
        <meta name='description' content={htmlDescription} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={htmlDescription} />
        <OpenGraph title={htmlTitle} description={htmlDescription} image={image} path={path} />
      </Head>
    </>
  )
}

export default DefaultLayout
