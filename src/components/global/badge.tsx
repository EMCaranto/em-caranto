'use client'

// React JS
import React from 'react'

// Dependencies
import CountUp from 'react-countup'

interface BadgeProps {
  icon?: React.ReactNode
  containerStyle?: string
  badgeText?: string
  endCountText?: string
  endCountNum: number
}

const Badge = ({
  icon,
  containerStyle,
  badgeText,
  endCountText,
  endCountNum,
}: BadgeProps) => {
  return (
    <div className={`custom-badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-sm font-medium leading-none text-black">
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge
