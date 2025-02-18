import Link from 'next/link'
import { getFormattedDate, getPageTitle } from '@/utils'
import Head from 'next/head'

type Project = {
  id: string
  title: string
  createdAt: string
  description: string
  link: string
}
const projects: Project[] = [
  {
    id: '1',
    title: 'Cookies By Coffey',
    createdAt: '2022-10-04T06:00:00.000Z',
    description: 'A boutique cookie site that acts as a landing page and order submission tool.',
    link: 'https://cookiesbycoffey.com'
  }
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>{getPageTitle('Projects')}</title>
      </Head>
      <main className='flex flex-col gap-12'>
        <h1 className='font-bold text-4xl'>Projects</h1>
        {projects.map(({ id, title, createdAt, description, link }) => (
          <section key={id}>
            <Link href={link}>
              <div className='flex flex-col gap-2 group'>
                <h2 className='font-bold text-2xl group-hover:underline'>{title}</h2>
                <p className='text-gray-400'>{getFormattedDate(createdAt)}</p>
                <p className='text-gray-400'>{description}</p>
              </div>
            </Link>
          </section>
        ))}
      </main>
    </>
  )
}
