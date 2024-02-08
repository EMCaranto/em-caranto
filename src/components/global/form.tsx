'use client'

// React JS
import React from 'react'

// Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Dependencies
import { ArrowRightIcon, MailIcon, UserIcon } from 'lucide-react'

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/** input */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" />
        <UserIcon className="absolute right-6" size={20} />
      </div>
      {/** input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/** input */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message here ..." />
        <UserIcon className="absolute right-6 top-4" size={20} />
      </div>
      <Button className="flex max-w-[166px] items-center gap-x-1">
        Lets Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}

export default Form
