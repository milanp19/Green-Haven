import './globals.css'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import Navbar from './components/Navbar'
import Script from 'next/script'



const cabin = Cabin({ subsets: ['latin'], style: ['normal'] })

export const metadata: Metadata = {
  title: 'Green Haven',
  description: 'Sustainable home designs ready at your fingertips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={cabin.className}>
        <Navbar />
        {children}
        <Script>
          {`
            let html = document.querySelector('body');
            html.style.height = window.innerHeight.toString();
          `}
        </Script>
      </body>
    </html>
  )
}
