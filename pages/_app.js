import '../styles/globals.css'

import { Source_Sans_Pro } from 'next/font/google'

const source = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ['latin'],
  variable: '--font-source',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${source.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}