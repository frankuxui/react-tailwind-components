import React from 'react'
import '../styles/globals.css'
import '../styles/prims-synthWave84.css'
import APPContext from 'components/docs/context'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <APPContext>
        <Component {...pageProps} />
      </APPContext>
    </>
  )
}

export default MyApp
