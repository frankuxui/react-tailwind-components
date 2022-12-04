import { content } from 'pages/api/data'

const OpenGraph = ({ title, description, path, cover, coverWidth, coverheight, image }) => {
  return (
    <>
      {/* OG meta */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || content.title} />
      <meta property='og:description' content={description || content.description} />
      <meta property='og:site_name' content={description || content.description} />
      <meta property='og:url' content={`${content.website}/${path}`} />
      <meta property='og:image' content={image || content.cover} />
      <meta property='og:image:width' content={coverWidth || content.coverWidth} />
      <meta property='og:image:height' content={coverheight || content.coverHeight} />
      <meta property='fb:app_id' content='928977633900253' />

      {/* Twitter meta */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={`${content.website}/${path}`} />
      <meta name='twitter:title' content={title || content.title} />
      <meta name='twitter:description' content={description || content.description} />
      <meta name='twitter:image' content={image || content.cover} />
      <meta name='twitter:site' content='@nytimesbits' />
      <meta name='twitter:creator' content={content.autor || '@frankuxui'} />
    </>
  )
}

export default OpenGraph
