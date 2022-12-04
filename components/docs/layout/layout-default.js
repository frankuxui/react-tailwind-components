import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import OpenGraph from 'components/docs/components/open-graph'
import { content } from 'pages/api/data'
import Seo from '../components/seo'

const DefaultLayout = ({ title, description }) => {
  const router = useRouter()
  const path = router?.asPath

  return (
    <>
      <Head>
        <title>{`${title} - ${content.title} ${content.version}` || content.title}</title>
        <meta name='description' content={description || content.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description || content.description} />
        <Seo />
        {/* <OpenGraph
          title={title}
          description={description}
          path={path}
        /> */}
      </Head>
    </>
  )
}

export default DefaultLayout
