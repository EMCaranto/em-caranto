import React from 'react'

import About from '@/components/global/about'
import CallToAction from '@/components/global/call-to-action'
import Hero from '@/components/global/hero'
import Work from '@/components/global/work'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <CallToAction />
    </main>
  )
}
