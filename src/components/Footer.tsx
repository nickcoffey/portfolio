import { ROUTES } from '@/consts'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className='flex flex-col gap-6 py-6 mt-6 text-sm border-t border-gray-200'>
      <nav className='flex gap-10 justify-center'>
        {ROUTES.map((route, index) => (
          <a href='' key={index}>{route}</a>
        ))}
      </nav>
      <p className='text-gray-400 font-light text-center'>
        &copy; {currentYear} Nick Coffey. All rights reserved.
      </p>
    </footer>
  )
}
