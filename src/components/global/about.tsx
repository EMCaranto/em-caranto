// React JS
import React from 'react'

// Next JS
import Image from 'next/image'

// Dependencies
import {
  BriefcaseIcon,
  CalendarIcon,
  GraduationCapIcon,
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
    icon: <GraduationCapIcon size={20} />,
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
        <div className="flex flex-col xl:flex-row">
          {/** image */}
          <div className="relative hidden flex-1 xl:flex">
            <ImageDev
              containerStyle={
                'bg-about-shape-light dark:bg-about-shape-dark relative h-[505px] w-[505px] bg-no-repeat'
              }
              imageSrc={myImage}
            />
          </div>
          {/** tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skill">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/** tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/** personal info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="custom-h3 mb-4">
                      Unmatched Service Quality for over 10 years
                    </h3>
                    <p className="custom-subtitle mx-auto max-w-xl xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    {/** icon */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((info) => {
                        return (
                          <div
                            className="mx-auto flex items-center gap-x-4 xl:mx-0"
                            key={info.text}
                          >
                            <div>{info.icon}</div>
                            <div>{info.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/** language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                {/** qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="custom-h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/** experience and education */}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/** experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <BriefcaseIcon size={20} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, 'Experience')?.title}
                          </h4>
                        </div>
                        {/** list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'Experience')?.data.map(
                            (item) => {
                              const { company, position, years } =
                                item as QualificationItem
                              return (
                                <div
                                  className="group flex gap-x-8"
                                  key={company}
                                >
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]">
                                      <span className="sr-only">Hover Dot</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                      {/** education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCapIcon size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, 'Education')?.title}
                          </h4>
                        </div>
                        {/** list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'Education')?.data.map(
                            (item) => {
                              const { college, course, years } =
                                item as QualificationItem
                              return (
                                <div
                                  className="group flex gap-x-8"
                                  key={college}
                                >
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]">
                                      <span className="sr-only">Hover Dot</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {college}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {course}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/** skill */}
                <TabsContent value="skill">
                  <div className="text-center xl:text-left">
                    <h3 className="custom-h3 mb-8">Tools I Used Everyday</h3>
                    {/** skill list */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      <div>
                        {getData(skillData, 'Skills')?.data.map((item) => {
                          const { name } = item as SkillItem
                          return (
                            <div
                              className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                              key={name}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/** tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/** tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillData, 'Tools')?.data.map((item) => {
                          const { imagePath } = item as SkillItem
                          return (
                            <div key={imagePath}>
                              <Image
                                src={`${imagePath}`}
                                alt="tools"
                                height={48}
                                width={48}
                                priority
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
