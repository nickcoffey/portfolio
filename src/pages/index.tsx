import { Footer, Header } from '@/components'

export default function Home() {
  return (
    <div className='py-4 px-3 bg-slate-100 dark:bg-slate-900 dark:text-white transition-colors duration-150'>
      <Header />
      <main>My Blog</main>
      <Footer />
    </div>
  )
}
