'use client'

// React JS
import React, { useState } from 'react'

// Components
import ProjectCard from '@/components/global/project-card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projectData = [
  {
    image: '/assets/work/3.png',
    category: 'Category',
    name: 'Website Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/3.png',
    category: 'Category',
    name: 'Website Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/3.png',
    category: 'Category',
    name: 'Website Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/3.png',
    category: 'Category',
    name: 'Website Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/3.png',
    category: 'Category',
    name: 'Website Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
]

const uniqueCategory: string[] = ['all projects']

projectData.forEach((item) => {
  if (!uniqueCategory.includes(item.category)) {
    uniqueCategory.push(item.category)
  }
})

export default function ProjectPage() {
  const [categories, setCategories] = useState(uniqueCategory)
  const [category, setCategory] = useState('all projects')

  const filterProject = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="custom-section-title mx-auto mb-8 text-center xl:mb-16">
          My Projects
        </h2>
        {/** tabs */}
        <Tabs className="mb-24 xl:mb-48" defaultValue={category}>
          <TabsList className="mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-4 md:border lg:max-w-[640px]">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  className="w-[162px] capitalize md:w-auto"
                  value={category}
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/** tab content */}
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {filterProject.map((project) => {
              return (
                <TabsContent value={category} key={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
