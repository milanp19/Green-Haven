import './globals.css'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import Navbar from './components/Navbar'

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
      </body>
    </html>
  )
}
