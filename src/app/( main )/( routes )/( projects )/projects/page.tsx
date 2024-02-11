'use client'

import React, { useState } from 'react'

import ProjectCard from '@/components/global/project-card'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projectData = [
  {
    cover: '/',
    name: 'Project Name 1',
    category: 'Category 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    cover: '/',
    name: 'Project Name 2',
    category: 'Category 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    cover: '/',
    name: 'Project Name 3',
    category: 'Category 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    cover: '/',
    name: 'Project Name 4',
    category: 'Category 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
]

const uniqueCategory: string[] = ['all']

projectData.forEach((project) => {
  if (!uniqueCategory.includes(project.category)) {
    uniqueCategory.push(project.category)
  }
})

export default function ProjectPage() {
  const [categories, setCategories] = useState(uniqueCategory)
  const [category, setCategory] = useState('all')

  const filterProject = projectData.filter((project) => {
    return category === 'all' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-10 xl:pt-12">
      <div className="container mx-auto">
        <h2 className="custom-section-title mx-auto mb-8 text-center xl:mb-16">
          My Projects
        </h2>
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
        </Tabs>
      </div>
    </section>
  )
}
