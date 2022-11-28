/** @type {import('next').NextConfig} */
const remarkGfm = import('remark-gfm')
const rehypeStringify = import('rehype-stringify')
const toc = import('@jsdevtools/rehype-toc')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeStringify, toc],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react'
  }
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']

})

module.exports = withMDX()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true
  }
})
