import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import profilePic from '../../public/profile.jpeg'

export function Header() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDark) {
      htmlElement.className = 'dark'
    } else {
      htmlElement.className = ''
    }
  }, [isDark])

  const toggleIsDark = () => setIsDark(!isDark)

  return (
    <header className='flex items-center justify-between'>
      <Image src={profilePic} alt='Profile' className='rounded-full h-10 w-10' />
      <button onClick={toggleIsDark} className='px-3 py-2 bg-white dark:bg-slate-600 shadow-xl rounded-full'>
        {isDark ? <FaRegSun className='text-xl' /> : <FaRegMoon className='text-xl' />}
      </button>
    </header>
  )
}
