const OpenGraph = ({ title, description, image }) => {
  return (
    <>
      {/* OG meta */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content={description}
      />
      <meta property='og:site_name' content={description} />
      <meta
        property='og:url'
        content='https://react-tailwind-components-xi.vercel.app/'
      />
      <meta
        property='og:image'
        content={image || 'https://react-tailwind-components-xi.vercel.app/images/pexels-photo-13836783.jpeg'}
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      {/* Twitter meta */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:url'
        content='https://react-tailwind-components-xi.vercel.app/'
      />
      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:image'
        content={image || 'https://react-tailwind-components-xi.vercel.app/images/pexels-photo-13836783.jpeg'}
      />
    </>
  )
}

export default OpenGraph
