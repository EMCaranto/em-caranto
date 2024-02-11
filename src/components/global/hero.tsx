// React JS
import React from 'react'

// Next JS
import Link from 'next/link'

// Dependencies
import { DownloadIcon, SendIcon } from 'lucide-react'
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from 'react-icons/ri'

// Components
import Badge from '@/components/global/badge'
import ImageDev from '@/components/global/image-dev'
import Social from '@/components/global/social'

import { Button } from '@/components/ui/button'

// Public
import HeroImage from '../../../public/images/emcaranto.png'

const Hero = () => {
  return (
    <section className="h-[80vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
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
            {/** social */}
            <Social
              containerStyle={'mx-auto flex gap-x-6 xl:mx-0'}
              iconStyle={
                'text-[22px] text-foreground transition-all hover:text-primary'
              }
            />
          </div>
          {/** image */}
          <div className="relative hidden xl:flex">
            {/** badge 1 */}
            <Badge
              containerStyle={'absolute -left-[5rem] top-[24%]'}
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={'Years of Experience'}
            />
            {/** badge 2 */}
            <Badge
              containerStyle={'absolute -left-[1rem] top-[80%]'}
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText={'k'}
              badgeText={'Finished Projects'}
            />
            {/** badge 3 */}
            <Badge
              containerStyle={'absolute -right-8 top-[55%]'}
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText={'k'}
              badgeText={'Happy Clients'}
            />
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px] bg-hero-shape-light bg-no-repeat dark:bg-hero-shape-dark">
              {/** blob */}
            </div>
            <ImageDev
              containerStyle={
                'bg-hero-shape relative h-[462px] w-[510px] bg-bottom bg-no-repeat'
              }
              imageSrc={HeroImage}
            />
          </div>
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
