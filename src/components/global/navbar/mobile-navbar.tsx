// React JS
import React from 'react'

// Dependencies
import { MenuIcon } from 'lucide-react'

// Components
import MainNavbar from '@/components/global/navbar/main-navbar'

import Logo from '@/components/global/logo'
import Social from '@/components/global/social'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="h-4 w-4 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <MainNavbar
              containerStyle={'flex flex-col items-center gap-y-6'}
              linkStyle={'text-2xl'}
            />
          </div>
          <Social containerStyle={'flex gap-x-4'} iconStyle={'text-2xl'} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
