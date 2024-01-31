'use client'

// React JS
import React from 'react'

// Next JS
import Link from 'next/link'

// Dependencies
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from 'react-icons/ri'

interface SocialProps {
  containerStyle?: string
  iconStyle?: string
}

const iconLists = [
  {
    icon: <RiLinkedinFill />,
    name: 'Linkedin',
    path: '/',
  },
  {
    icon: <RiGithubFill />,
    name: 'Github',
    path: '/',
  },
  {
    icon: <RiFacebookFill />,
    name: 'Facebook',
    path: '/',
  },
  {
    icon: <RiInstagramFill />,
    name: 'Instagram',
    path: '/',
  },
]

const Social = ({ containerStyle, iconStyle }: SocialProps) => {
  return (
    <div className={`${containerStyle}`}>
      {iconLists.map((icon) => {
        return (
          <Link href={icon.path} key={icon.path}>
            <div className={`${iconStyle}`}>{icon.icon}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Social
