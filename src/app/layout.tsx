// Next JS
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// Components - Global
import Footer from '@/components/global/footer'
import Header from '@/components/global/header'

//  Providers
import { ThemeProvider } from '@/components/providers/theme-provider'

// Styles
import '@/styles/globals.css'

const font = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'EMCaranto Portfolio',
  description: 'This is a portfolio created by EMCaranto',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/svgs/logo/app_logo/emc-logo-light.svg',
        href: '/svgs/logo/app_logo/emc-logo-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/svgs/logo/app_logo/emc-logo-dark.svg',
        href: '/svgs/logo/app_logo/emc-logo-dark.svg',
      },
    ],
  },
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
