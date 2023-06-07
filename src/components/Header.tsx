import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ROUTES } from '@/consts'
import profilePic from '../../public/profile.jpeg'

export function Header() {
  const [showNavigation, setShowNavigation] = useState(false)

  const openModal = () => setShowNavigation(true)
  const closeModal = () => setShowNavigation(false)

  return (
    <header className='flex items-center justify-between h-10 mb-12'>
      <Image src={profilePic} alt='Profile' className='rounded-full h-full w-10' />
      <FaBars className='text-2xl' onClick={openModal} />
      {showNavigation && (
        <nav
          className='flex flex-col gap-10 items-center justify-center bg-black text-white fixed top-0 left-0 z-50 h-full w-full'
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
