// Next JS
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Components
import Footer from '@/components/footer'
import Header from '@/components/header'

// Styles
import '@/styles/globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMCaranto Portfolio',
  description: 'This is a portfolio created by EMCaranto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
