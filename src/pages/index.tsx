import { Footer, Header } from '@/components'
import { CONTACTS } from '@/consts'

export default function Home() {
  return (
    <div className='py-4 px-3 bg-slate-100 dark:bg-slate-900 dark:text-white transition-colors duration-150'>
      <Header />
      <main className='flex flex-col gap-12'>
        <h1 className='text-4xl font-bold leading-sn'>Hi, my name is Nick Coffey and I'm a fullstack developer.</h1>
        <p className='leading-loose'>
          I've been working as a web developer professionally since 2017 and love the constant learning and innovation
          that comes with building on the web. This blog is where I like to share new ideas, technologies, and
          discoveries I come across in my personal and professional projects.
        </p>
        <ul className='flex flex-col gap-4 text-sm'>
          {CONTACTS.map(({ link, text, Icon }, index) => (
            <li className='flex items-center gap-4' key={index}>
              <Icon className='text-lg text-gray-400' />
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
