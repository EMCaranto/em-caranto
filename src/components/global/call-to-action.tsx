// React JS
import React from 'react'

// Next JS
import Link from 'next/link'

// Components
import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="bg-neutral-300 py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="custom-h2 mb-8 max-w-xl text-center">
            Prepared to turn your ideas into reality? I am here to help
          </h2>
          <Link href={'/contact'}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
