import React from 'react'
import Link from 'next/link'

const Footer = ({ className }) => {
  return (
    <footer className={cx('footer', className && className)}>
      <p className='text-sm text-slate-500'>Copyright © 2022 Gomotor. Todos los derechos reservados</p>
      <p>
        <span>Powered by </span>{' '}
        <Link href='https://allmylinks.com/frankuxui' className='font-medium underline' target='_blank' rel='noreferrer'>
          Frankuxui
        </Link>
      </p>
    </footer>
  )
}

export default Footer

function cx (...classNames) {
  return classNames.filter(Boolean).join(' ')
}
