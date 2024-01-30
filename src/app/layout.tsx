// Next JS
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Components
import Footer from '@/components/footer'
import Header from '@/components/header'

//  Providers
import { ThemeProvider } from '@/components/providers/theme-provider'

// Styles
import '@/styles/globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMCaranto Portfolio',
  description: 'This is a portfolio created by EMCaranto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
