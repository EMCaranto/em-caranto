import React from 'react'

import Link from 'next/link'

import { DownloadIcon, UserRoundSearchIcon } from 'lucide-react'
import { RiArrowDownSLine } from 'react-icons/ri'

import Badge from '@/components/global/badge'
import ImageDev from '@/components/global/image-dev'
import Social from '@/components/global/social'

import { Button } from '@/components/ui/button'

import HeroImage from '../../../public/images/emcaranto.png'

const Hero = () => {
  return (
    <section className="h-[80vh] py-12 xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Junior Web Developer
            </div>
            <h1 className="custom-h1 mb-4">
              Hello, my name is Erickson Caranto
            </h1>
            <p className="custom-subtitle mx-auto max-w-[500px] xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            <div className="mx-auto mb-12 flex flex-col gap-3 md:flex-row xl:mx-0">
              <Link href={'/contact'}>
                <Button className="gap-x-2">
                  <UserRoundSearchIcon className="h-4 w-4" />
                  <span>Contact Me</span>
                </Button>
              </Link>
              <Button className="gap-x-2" variant={'outline'}>
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </Button>
            </div>
            <Social
              containerStyle={'mx-auto flex gap-x-6 xl:mx-0'}
              iconStyle={
                'text-[22px] text-foreground transition-all hover:text-primary'
              }
            />
          </div>
          <div className="relative hidden xl:flex">
            <ImageDev
              containerStyle={'relative h-[450px] w-[450px]'}
              imageSrc={HeroImage}
            />
          </div>
        </div>
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
