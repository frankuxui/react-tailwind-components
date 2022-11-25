/** @type {import('next').NextConfig} */

//
// remark plugings
// const remarkToc = import('remark-toc')
// const remark = import('remark')
const remarkGfm = import('remark-gfm')

const rehypeStringify = import('rehype-stringify')
const toc = import('@jsdevtools/rehype-toc')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // remark plugings
    rehypePlugins: [rehypeStringify, toc]
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']

})

//
// Redirect

module.exports = {
  async redirects () {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started/start',
        permanent: true
      },
      {
        source: '/docs/getting-started',
        destination: '/docs/getting-started/start',
        permanent: true
      }
    ]
  }
  /* webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  } */
}
