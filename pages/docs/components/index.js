import React from 'react'
import Link from 'next/link'
import LayoutDocs from '../../../components/docs/layout/layout-docs'
import { IconViewMore } from '../../../components/docs/components/icons'

import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

const Componentes = ({ components }) => {
  return (
    <LayoutDocs
      title='Componentes'
      pageSection={null}
      pageSectionDescription='La interfaz de usuario de Gomotor proporciona componentes preconstruidos para ayudar a construir el proyectos más rápido y eficiente. Aquí hay una descripción general de los componentes disponibles.'
      sidebar={components}
    >
      <ul className='columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4'>
        {components && components.map((item, index) => (
          <li key={index} className='break-inside-avoid mb-4'>
            <Link href={`/docs/components/${item.slug}`} passHref className='docs-nav-link-card group'>
              <div className='font-base flex items-center justify-between m-0'>
                {item.frontMatter.title}
                <span className='hidden group-hover:block'>
                  <IconViewMore />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </LayoutDocs>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('content/components/'))

  const components = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('content/components/', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      components
    }
  }
}

export default Componentes
