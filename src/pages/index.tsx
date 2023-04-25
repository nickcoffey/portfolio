import { Footer, Header } from '@/components'

export default function Home() {
  return (
    <div className='py-4 px-3 bg-slate-100 dark:bg-slate-900 dark:text-white transition-colors duration-150'>
      <Header />
      <main className='flex flex-col gap-12'>
        <h1 className='text-4xl font-bold'>Hi, my name is Nick Coffey and I'm a fullstack developer.</h1>
        I've been working as a web developer professionally since 2017 and love the constant learning and innovation
        that comes with building on the web. This blog is where I like to share new ideas, technologies, and discoveries
        I come across in my personal and professional projects.
      </main>
      <Footer />
    </div>
  )
}
