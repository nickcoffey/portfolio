import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ROUTES } from '@/consts'

export function Header() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false)

  const openModal = () => setShowMobileNavigation(true)
  const closeModal = () => setShowMobileNavigation(false)

  return (
    <header className='flex items-center justify-between h-10 mb-12'>
      <Link href='/' className='bg-black p-1 rounded-full text-white dark:bg-slate-700'>NC</Link>
      <nav className='gap-8 hidden md:flex'>
        {ROUTES.map(({ link, name }, index) => (
          <Link href={link} key={index}>
            {name}
          </Link>
        ))}
      </nav>
      {!showMobileNavigation && <FaBars className='text-2xl md:hidden' onClick={openModal} />}
      {showMobileNavigation && (
        <nav
          className='flex flex-col gap-10 items-center justify-center bg-black opacity-90 dark:opacity-95 text-white fixed top-0 left-0 z-50 h-full w-full'
          onClick={closeModal}
        >
          <FaTimes className='fixed top-6 right-3 text-2xl' />
          {ROUTES.map(({ link, name }, index) => (
            <Link href={link} key={index} className='text-2xl font-bold'>
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
