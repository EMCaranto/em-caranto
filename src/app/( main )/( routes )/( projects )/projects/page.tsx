'use client'

import React, { useState } from 'react'

import ProjectCard from '@/components/global/project-card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { projectData } from '@/data/project-data'

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
          <TabsList className="mx-auto mb-12 grid h-full w-full grid-cols-2 border-none bg-background dark:border-none md:grid-cols-4 md:border lg:max-w-[640px] xl:grid-cols-5">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  className="w-full capitalize md:w-auto"
                  value={category}
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
