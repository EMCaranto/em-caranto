'use client'

// React JS
import React, { useEffect, useState } from 'react'

// Next JS
import { usePathname } from 'next/navigation'

// Components
import Logo from '@/components/global/logo'
import ThemeToggle from '@/components/global/theme-toggle'

import MainNavbar from '@/components/global/navbar/main-navbar'
import MobileNavbar from '@/components/global/navbar/mobile-navbar'

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener('scroll', handleScroll)

    // clear event listener
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header
      className={`${
        header
          ? 'bg-white py-4 shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/** main navbar */}
            <MainNavbar
              containerStyle={'hidden items-center gap-x-8 xl:flex'}
              linkStyle={'relative transition-all hover:text-primary'}
              underlineStyle={
                'absolute left-0 top-full h-0.5 bg-primary w-full'
              }
            />
            <ThemeToggle />

            {/** mobile navbar */}
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
