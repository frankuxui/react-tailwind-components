/** @type {import('next').NextConfig} */
// const remarkGfm = import('remark-gfm')
// const rehypeStringify = import('rehype-stringify')
// const toc = import('@jsdevtools/rehype-toc')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
