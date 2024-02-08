// React JS
import React from 'react'

// Components
import About from '@/components/global/about'
import Hero from '@/components/global/hero'
import Work from '@/components/global/work'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
    </main>
  )
}
