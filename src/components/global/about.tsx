// React JS
import React from 'react'

// Next JS
import Image from 'next/image'

// Dependencies
import {
  CalendarIcon,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCallIcon,
  User2Icon,
} from 'lucide-react'

// Components
import ImageDev from '@/components/global/image-dev'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { title } from 'process'

// Public
import myImage from '../../../public/assets/about/developer.png'

interface InfoItem {
  icon: React.ReactNode
  text: string
}

interface QualificationItem {
  college?: string
  course?: string
  company?: string
  position?: string
  years: string
}

interface QualificationSection {
  title: string
  data: QualificationItem[]
}

interface SkillItem {
  name?: string
  imagePath?: string
}

interface SkillSection {
  title: string
  data: SkillItem[]
}

const infoData: InfoItem[] = [
  {
    icon: <User2Icon size={20} />,
    text: 'Erickson Caranto',
  },
  {
    icon: <PhoneCallIcon size={20} />,
    text: '+63 999-353-1054',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'erickson.caranto.m@gmail.com',
  },
  {
    icon: <CalendarIcon size={20} />,
    text: 'Born on 14 July, 1999',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of Science in Information Technology',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Malis, Guiguinto, Bulacan',
  },
]

const qualificationData: QualificationSection[] = [
  {
    title: 'Education',
    data: [
      {
        college: 'Bulacan State University',
        course: 'Bachelor of Science',
        years: '2019 - 2023',
      },
      {
        college: 'Bulacan State University',
        course: 'Bachelor of Science',
        years: '2019 - 2023',
      },
      {
        college: 'Bulacan State University',
        course: 'Bachelor of Science',
        years: '2019 - 2023',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        company: 'Accenture',
        position: 'Software Engineer Intern',
        years: '2019 - 2023',
      },
      {
        company: 'Accenture',
        position: 'Software Engineer Intern',
        years: '2019 - 2023',
      },
      {
        company: 'Accenture',
        position: 'Software Engineer Intern',
        years: '2019 - 2023',
      },
    ],
  },
]

const skillData: SkillSection[] = [
  {
    title: 'Skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'HTML, CSS',
      },
      {
        name: 'HTML, CSS',
      },
      {
        name: 'HTML, CSS',
      },
      {
        name: 'HTML, CSS',
      },
    ],
  },
  {
    title: 'Tools',
    data: [
      {
        imagePath: '/assets/about/vscode.svg',
      },
      {
        imagePath: '/assets/about/vscode.svg',
      },
      {
        imagePath: '/assets/about/vscode.svg',
      },
      {
        imagePath: '/assets/about/vscode.svg',
      },
      {
        imagePath: '/assets/about/vscode.svg',
      },
    ],
  },
]

const About = () => {
  const getData = (
    arr: (QualificationSection | SkillSection)[],
    title: string
  ): QualificationSection | SkillSection | undefined => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="pb-12 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="custom-section-title mx-auto mb-8 text-center xl:mb-16">
          About Me
        </h2>
        <div>
          {/** image */}
          <div>
            <div className=""></div>
            <ImageDev
              containerStyle={
                'bg-about-shape-light dark:bg-about-shape-dark relative h-[505px] w-[505px] bg-no-repeat'
              }
              imageSrc={myImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
