import React from 'react'

import Image from 'next/image'

import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

import Form from '@/components/global/form'

import ContactIllustrationDark from '../../../../../../public/svgs/illustration/contact-illustration-dark.svg'
import ContactIllustrationLight from '../../../../../../public/svgs/illustration/contact-illustration-light.svg'

export default function ContactPage() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[500px] xl:grid-cols-2">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg">
              <span className="h-0.5 w-8 bg-primary"></span>
              <span>Say Hello</span>
            </div>
            <h1 className="custom-h1 mb-8 max-w-md">
              Let&apos;s work together!
            </h1>
          </div>
          <div className="w-full items-center justify-center xl:flex">
            <Image
              className="hidden dark:block"
              src={ContactIllustrationDark}
              alt="contact-illustration"
            />
            <Image
              className="block dark:hidden"
              src={ContactIllustrationLight}
              alt="contact-illustration"
            />
          </div>
        </div>
        <div className="mb-20 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 xl:mb-24 xl:gap-y-8 xl:text-lg">
            <div className="flex items-center gap-x-4">
              <MailIcon className="h-6 w-6" />
              <span>erickson.caranto.m@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-4">
              <MapPinIcon className="h-6 w-6" />
              <span>Malis, Guiguinto, Bulacan</span>
            </div>
            <div className="flex items-center gap-x-4">
              <PhoneIcon className="h-6 w-6" />
              <span>(+63) 999-353-1054</span>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}
