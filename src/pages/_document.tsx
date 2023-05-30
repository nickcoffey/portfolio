import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='antialiased'>
      <Head />
      <body className='py-4 px-3 bg-slate-100 dark:bg-slate-900 dark:text-white transition-colors duration-150'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
