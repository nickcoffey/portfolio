import Head from 'next/head'
import { getPageTitle } from '@/utils'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{getPageTitle('Not Found')}</title>
      </Head>
      <main className='flex flex-col gap-6 items-center py-48'>
        <h1 className='text-4xl font-bold'>Whoops!</h1>
        <p className='text-xl'>That page doesn't exist</p>
      </main>
    </>
  )
}
