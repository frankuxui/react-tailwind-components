import React from 'react'
import Link from 'next/link'

const CardHome = ({ link, title, icon, description }) => {
  return (
    <>
      <Link href={link} passHref className='flex flex-col border-2 cursor-pointer break-inside-avoid p-6 rounded-xl space-y-2 transition-colors no-underline font-normal group mb-4 hover:text-blue-600 hover:border-blue-600'>
        <h5 className='flex items-center justify-between text-lg font-medium m-0'>
          <span>
            {title}
            <i className='transition-all ml-1 group-hover:ml-2'>&rarr;</i>
          </span>
          <span>
            {icon}
          </span>
        </h5>
        <p>{description}</p>
      </Link>
    </>
  )
}

export default CardHome
