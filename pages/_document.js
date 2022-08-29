import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='antialiased bg-rose-100 dark:bg-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
