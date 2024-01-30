// React JS
import React from 'react'

// Next JS
import Image from 'next/image'
import Link from 'next/link'

// Logo
import appDarkLogo from '../../../public/svgs/emc_logo_dark.svg'
import appLightLogo from '../../../public/svgs/emc_logo_light.svg'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        className="hidden dark:block"
        src={appDarkLogo}
        alt="dark_logo"
        height={54}
        width={54}
      />
      <Image
        className="dark:hidden"
        src={appLightLogo}
        alt="light_logo"
        height={54}
        width={54}
      />
    </Link>
  )
}

export default Logo
