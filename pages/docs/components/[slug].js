import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import LayoutDocs from '../../../components/docs/layout/layout-docs'
import { components } from 'components/docs/components/mdx'
import remarkGfm from 'remark-gfm'

//
// Rehype package
import rehypeSlug from 'rehype-slug'
import toc from '@jsdevtools/rehype-toc'

const tocPluging = () => {
  const option = {
    headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
    nav: true,
    cssClasses: {
      toc: 'toc-nav',
      list: 'toc-list',
      listItem: 'mt-2',
      link: 'toc-link underline text-slate-600'
    }
  }
  return toc(option)
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      tocPluging
    ]
  }
}

const Page = ({ sidebar, frontMatter: { title, description }, mdxSource }) => {
  return (
    <LayoutDocs
      title={title}
      pageTitle={title}
      description={description}
      pageDescription={description}
      sidebar={sidebar}
    >
      <MDXRemote {...mdxSource} components={components} />
    </LayoutDocs>
  )
}

//
// Static paths

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content/components/'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

//
// Static props

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('content/components/', slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, options)

  //
  // Sidebar Nav links
  const files = fs.readdirSync(path.join('content/components/'))
  const sidebar = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('content/components/', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  }) // End sidebar nav links

  return {
    props: {
      sidebar,
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default Page
