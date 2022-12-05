import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Close from 'components/docs/components/close'
import SidebarLink from 'components/docs/components/sidebar/sidebar-link'
import { useRouter } from 'next/router'
import { APPContext } from 'components/docs/context'
import { IconComponent, IconTheme, IconView } from 'components/docs/components/icons'

const Sidebar = ({ sidebar }) => {
  const router = useRouter()
  const url = router.asPath
  const slugArray = url.split('/')
  const slug = slugArray[slugArray.length - 1]
  const categorie = slugArray[2]
  const group = categorie.split('-').join(' ')

  // Open and close sidebar

  const { setSidebarOpen, sidebarOpen } = React.useContext(APPContext)
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <aside
        className={classNames('fixed overflow-y-auto left-0 top-0 h-full min-w-[15rem] max-w-5xl break-words pr-8 pb-6 pl-6 md:pl-0 pt-4 shrink-0 hidden border-r z-40 md:min-w-0 md:block md:sticky md:top-16 md:h-[calc(100vh_-_4.5rem)] md:bg-transparent md:z-10 bg-white', sidebarOpen && '!block')}
      >
        {sidebarOpen && (
          <div className='flex md:hidden items-center justify-between mb-6 -mr-6'>
            <Link href='/' passHref className='font-bold text-lg no-underline'>
              Components
            </Link>
            <Close sidebarClose={handleSidebar} />
          </div>
        )}
        <div>
          <ul>
            {/* <li>
              <SidebarLink
                link='/docs/getting-started/start'
                icon={<IconHome size={18} />}
                title='Getting started'
                className={group === 'getting started' && 'text-blue-500'}
              />
            </li> */}
            <li>
              <SidebarLink
                link='/docs/components'
                icon={<IconComponent size={18} />}
                title='Components'
                className={group === 'components' && 'text-blue-500'}
              />
            </li>
            <li>
              <SidebarLink
                link='/docs/theme'
                icon={<IconTheme size={18} />}
                title='Theme'
                className={group === 'theme' && 'text-blue-500'}
              />
            </li>
            <li>
              <SidebarLink
                link='/'
                icon={<IconView size={18} />}
                title='Views'
                className={group === 'views' && 'text-blue-500'}
              />
            </li>
          </ul>
          <ul className='-mx-4 mt-8'>
            {sidebar && sidebar.map((item, index) => (
              <li key={index}>
                <Link
                  href={{ pathname: `/docs/${categorie}/${item.frontMatter?.title?.split(' ').join('-').toLowerCase()}` }} passHref
                  className={classNames(item.frontMatter.isComing && 'opacity-70 pointer-events-none', 'flex justify-start items-center no-underline font-normal px-4 py-2 my-1 rounded-full transition-all hover:text-black', item.frontMatter?.slug?.split(' ').join('-').toLowerCase() === slug.split('#')[0] ? 'font-bold text-blue-500' : '')}
                  onClick={handleSidebar}
                >

                  {item.frontMatter.title}
                  {item.frontMatter.isComing && (
                    <span className='ml-3 px-2 py-1 text-[11px] flex items-center justify-center rounded-md font-medium flex-none bg-blue-100 text-black'>Coming soon</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {sidebarOpen && (<div className='fixed top-0 left-0 w-full h-full z-30 block md:hidden bg-[#00000014] backdrop-blur-sm' onClick={handleSidebar} />)}
    </>
  )
}

export default Sidebar
