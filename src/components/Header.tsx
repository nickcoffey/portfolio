import Image from 'next/image'
import profilePic from '../../public/profile.jpeg'

export function Header() {
  return (
    <header className='flex items-center justify-between h-10 mb-12'>
      <Image src={profilePic} alt='Profile' className='rounded-full h-full w-10' />
    </header>
  )
}
