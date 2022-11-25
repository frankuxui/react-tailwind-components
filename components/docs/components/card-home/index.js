import React from 'react'
import Link from 'next/link'

const CardHome = ({ link, title, icon, description }) => {
  return (
    <>
      <Link href={link} passHref className='docs-card group mb-4 space-y-2'>
        <h5 className='flex items-center  justify-between font-medium m-0'>
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
