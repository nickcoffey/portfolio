import Head from 'next/head'
import { getPageTitle } from '@/utils'

export default function Custom500() {
  return (
    <>
      <Head>
        <title>{getPageTitle('Server Error')}</title>
      </Head>
      <main className='flex flex-col gap-6 items-center py-48'>
        <h1 className='text-4xl font-bold'>Whoops!</h1>
        <p className='text-xl'>Something went wrong</p>
      </main>
    </>
  )
}
