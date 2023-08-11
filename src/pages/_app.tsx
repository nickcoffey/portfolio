import { Footer, Header } from '@/components'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/markdown.css'
import '@/styles/one-dark-light.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
