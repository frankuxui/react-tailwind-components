import Link from 'next/link'
import React from 'react'

const SidebarLink = ({ link, icon, title, className }) => {
  return (
    <Link href={link} className={cx('no-underline flex items-center my-1 py-2 font-medium space-x-2', className && className)} passHref>
      {icon}
      <span>{title}</span>
    </Link>
  )
}

export default SidebarLink

function cx (...classNames) {
  return classNames.filter(Boolean).join(' ')
}
