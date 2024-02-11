'use client'

import React from 'react'

import { MailIcon, SendIcon, UserRoundIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <UserRoundIcon className="absolute left-4 h-4 w-4" />
        <Input
          className="pl-12"
          type="text"
          id="name"
          placeholder="Your name"
        />
      </div>
      <div className="relative flex items-center">
        <MailIcon className="absolute left-4 h-4 w-4" />
        <Input
          className="pl-12"
          type="email"
          id="email"
          placeholder="Email address"
        />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message here ..." />
      </div>
      <Button className="flex w-full items-center gap-x-2 xl:max-w-[200px]">
        <SendIcon className="h-4 w-4 text-white" />
        <span className="text-white">Let&apos;s talk</span>
      </Button>
    </form>
  )
}

export default Form
