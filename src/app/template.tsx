'use client'

// React JS
import React from 'react'

// Dependencies
import { motion } from 'framer-motion'

// Hooks
import useScrollProgress from '@/hooks/useScrollProgress'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const progress = useScrollProgress()

  return (
    <>
      <motion.main
        animate="enter"
        initial="hidden"
        variants={variants}
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/** progress scrollbar */}
      <span
        className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-all duration-700"
        style={{ transform: `translateY(${progress - 100}%)` }}
      ></span>
    </>
  )
}
