import React from 'react'
import { NextSeo } from 'next-seo'
import config from '../../../../config/seo.json'

const Seo = ({ title, description }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
      titleTemplate={config.seo.titleTemplate}
      /* openGraph={{
        url: config.seo.openGraph.url,
        title: config.seo.openGraph.title,
        description: config.seo.openGraph.description,
        images: [
          {
            url: config.seo.openGraph.images[0].url,
            width: config.seo.openGraph.images[0].width,
            height: config.seo.openGraph.images[0].height,
            alt: config.seo.openGraph.images[0].alt,
            type: 'image/jpeg'
          },
          {
            url: config.seo.openGraph.images[1].url,
            width: config.seo.openGraph.images[1].width,
            height: config.seo.openGraph.images[1].height,
            alt: config.seo.openGraph.images[1].alt,
            type: 'image/jpeg'
          },
          { url: config.seo.openGraph.images[1].url },
          { url: config.seo.openGraph.images[1].url }
        ],
        siteName: ''
      }}
      facebook={{
        appId: '928977633900253'
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: config.seo.twitter.cardType
      }} */
    />
  )
}

export default Seo
