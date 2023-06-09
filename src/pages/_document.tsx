import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='antialiased'>
      <Head />
      <body className='py-4 px-3 dark:bg-slate-900 dark:text-white 2xl:px-96 xl:px-72 lg:px-48 md:px-24 sm:px-12'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
