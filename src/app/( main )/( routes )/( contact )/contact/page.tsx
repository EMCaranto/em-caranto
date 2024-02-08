// React JS
import React from 'react'

// Dependencies
import { HomeIcon, MailIcon, PhoneIcon } from 'lucide-react'

// Components
import Form from '@/components/global/form'

export default function ContactPage() {
  return (
    <section>
      <div className="container mx-auto">
        {/** text */}
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          {/** text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="custom-h1 mb-8 max-w-md">Lets work together</h1>
            <p className="custom-subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elis. Placeat
            </p>
          </div>
          {/** illustration */}
          <div className="bg-contact-illustration-light dark:bg-contact-illustration-dark hidden w-full bg-contain bg-top bg-no-repeat xl:flex"></div>
        </div>
        {/** info text */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/** text */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            {/** mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>erickson.caranto.m@gmail.com</div>
            </div>
            {/** address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon className="text-primary" size={18} />
              <div>Malis, Guiguinto, Bulacan</div>
            </div>
            {/** phone number */}
            <div className="flex items-center gap-x-8">
              <PhoneIcon className="text-primary" size={18} />
              <div>09993531054</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}
