import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { GithubIcon, LinkIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardHeader } from '@/components/ui/card'

import { ProjectItem } from '@/data/project-data'

interface ProjectCardProps {
  project: ProjectItem
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-none shadow-lg dark:bg-slate-800/30">
      <CardHeader className="relative bg-gray-300 p-0">
        <div className="flex items-center justify-center">
          <Image
            className=""
            src={project.cover}
            alt="project-cover"
            height={500}
            width={500}
            priority
          />
        </div>
        <div className="absolute -bottom-5 right-4 flex gap-2">
          <Link
            className="group rounded-full bg-slate-950/80 p-2 text-white transition-all duration-300 hover:scale-125"
            href={project.github}
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link
            className="group rounded-full bg-slate-950/80 p-2 text-white transition-all duration-300 hover:scale-125"
            href={project.link}
          >
            <LinkIcon className="h-6 w-6" />
          </Link>
        </div>
      </CardHeader>
      <div className="h-full px-4 py-4">
        <Badge className="absolute bottom-4 right-4 px-4 py-1 font-medium uppercase leading-none">
          {project.category}
        </Badge>
        <h4 className="custom-h4 mb-2 pt-4">{project.name}</h4>
        <p className="h-[75px] text-sm text-slate-950/50 dark:text-slate-100/50">
          {project.description}
        </p>
      </div>
    </Card>
  )
}

export default ProjectCard
