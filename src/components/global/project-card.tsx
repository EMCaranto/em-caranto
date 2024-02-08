// React JS
import React from 'react'

// Next JS
import Image from 'next/image'
import Link from 'next/link'

// Dependencies
import { GithubIcon, LinkIcon } from 'lucide-react'

// Components
import { Card, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Project {
  image: string
  category: string
  name: string
  description: string
  link: string
  github: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {/** cover image */}
        <div className="xl:bg-project-bg-light xl:dark:bg-project-bg-dark relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-neutral-300 dark:bg-secondary/40 xl:bg-[110%] xl:bg-no-repeat ">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt="project_image"
            height={250}
            width={247}
            priority
          />
          {/** links */}
          <div className="flex gap-x-4">
            <Link
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              href={project.link}
            >
              <LinkIcon />
            </Link>
            <Link
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              href={project.github}
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>
        <h4 className="custom-h4 mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
