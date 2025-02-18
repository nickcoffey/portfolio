import Image from 'next/image'
import Head from 'next/head'
import { CONTACTS } from '@/consts'
import { getPageTitle } from '@/utils'
import profilePic from '../../public/profile.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>
      <main className='flex flex-col gap-12'>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <Image src={profilePic} alt='Profile' className='rounded-full h-full w-48' />
          <h1 className='text-4xl font-bold'>Hi, my name is Nick Coffey and I&#39;m a fullstack developer.</h1>
        </div>
        <p className='leading-loose'>
          I&#39;ve been working as a web developer professionally since 2017 and love the constant learning and
          innovation that comes with building on the web. This blog is where I like to share new ideas, technologies,
          and discoveries I come across in my personal and professional projects.
        </p>
        <ul className='flex flex-col gap-4 text-sm'>
          {CONTACTS.map(({ link, text, Icon }, index) => (
            <li className='flex items-center gap-4' key={index}>
              <Icon className='text-lg text-gray-400' />
              <a href={link} target='_blank' className='hover:underline'>{text}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
