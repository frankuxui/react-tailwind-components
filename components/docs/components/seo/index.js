import React from 'react'
import { NextSeo } from 'next-seo'
import config from '../../../../config/site-conf.json'

const Seo = ({ title, description, titleTemplate }) => {
  return (
    <NextSeo
      title={title}
      description={config.seo.description}
      openGraph={{ title, description }}
      titleTemplate={config.seo.titleTemplate}
    />
  )
}

export default Seo
