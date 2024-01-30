// React JS
import React, { CSSProperties } from 'react'

// Next JS
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Dependencies
import { motion } from 'framer-motion'

interface MainNavbarProps {
  containerStyle?: string
  linkStyle?: string
  underlineStyle?: string
}

const navLinks = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const MainNavbar = ({
  containerStyle,
  linkStyle,
  underlineStyle,
}: MainNavbarProps) => {
  const pathname = usePathname()

  return (
    <nav className={`${containerStyle}`}>
      {navLinks.map((link) => {
        return (
          <Link
            className={`capitalize ${linkStyle}`}
            href={link.path}
            key={link.path}
          >
            {link.path === pathname && (
              <motion.span
                className={`${underlineStyle}`}
                animate={{ y: 0 }}
                initial={{ y: '-100%' }}
                layoutId="underline"
                transition={{ type: 'tween' }}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default MainNavbar
