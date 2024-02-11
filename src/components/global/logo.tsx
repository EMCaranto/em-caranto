// React JS
import React from 'react'

// Next JS
import Image from 'next/image'
import Link from 'next/link'

// Public - App Logo
import AppDarkLogo from '../../../public/svgs/logo/app_logo/emc-logo-dark.svg'
import AppLightLogo from '../../../public/svgs/logo/app_logo/emc-logo-light.svg'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        className="hidden dark:block"
        src={AppDarkLogo}
        alt="app-logo"
        height={54}
        width={54}
      />
      <Image
        className="dark:hidden"
        src={AppLightLogo}
        alt="app-logo"
        height={54}
        width={54}
      />
    </Link>
  )
}

export default Logo
