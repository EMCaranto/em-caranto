// React JS
import React from 'react'

// Next JS
import Link from 'next/link'

// Dependencies
import { DownloadIcon, SendIcon } from 'lucide-react'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'

// Components
import Badge from '@/components/global/badge'
import ImageDev from '@/components/global/image-dev'
import Social from '@/components/global/social'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="bg-hero h-[80vh] bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/** text */}
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="custom-h1 mb-4">
              Hello, my name is Erickson Caranto
            </h1>
            <p className="custom-subtitle mx-auto max-w-[490px] xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/** buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href={'/contact'}>
                <Button className="gap-x-2">
                  <SendIcon className="h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Button className="gap-x-2" variant={'secondary'}>
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          {/** image */}
          <div className="relative hidden xl:flex">Image</div>
        </div>
        {/** icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
