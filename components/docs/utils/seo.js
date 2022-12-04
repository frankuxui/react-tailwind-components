import config from '../../../config/seo.json'

export function getSeo (options = {}) {
  const { omitOpenGraphImage } = options
  const { seo } = config
  const { images, ...openGraph } = seo.openGraph

  return {
    ...seo,
    openGraph: {
      ...openGraph,
      images: omitOpenGraphImage ? undefined : images
    }
  }
}
