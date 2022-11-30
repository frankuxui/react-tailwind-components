import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Toc () {
  const router = useRouter()
  const url = router.asPath
  const [urlState, setUrlState] = useState('')
  const [hasWindow, setHasWindow] = useState(false)
  const [list, setList] = useState([])
  const [ids, setIds] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
    if (hasWindow === true) {
      const headers = document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]')
      const listed = [...headers].map(item => item.textContent)
      const listIds = listed.map((id) => id.split(' ').join('-').toLowerCase())
      setList(listed)
      setIds(listIds)
    }
    setUrlState(url)
  }, [hasWindow, urlState, url])

  return (
    <>
      {list.length > 0 && (
        <nav className='sticky h-full top-20 hidden md:flex flex-none flex-col p-6 max-w-xs min-w-[12rem] mt-16 rounded-xl bg-slate-50'>
          <div className='font-medium mb-2'>En esta página</div>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <Link href={`#${normalizeUrl(item)}`} className='font-medium text-sm underline block py-1' passHref> {normalizeString(item)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

// Normalize string

function normalizeString (string) {
  return string.split('#').join('')
}

// Normalize url

function normalizeUrl (string) {
  return string
    .split(' ')
    .join('-')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
