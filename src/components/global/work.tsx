'use client'

// React JS
import React from 'react'

// Next JS
import Link from 'next/link'

// Dependencies
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

// Components
import ProjectCard from '@/components/global/project-card'
import { Button } from '@/components/ui/button'

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react'

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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/** text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="custom-section-title mb-4">Latest Projects</h2>
          <p className="custom-subtitle mb-8">
            Lorem ipsume dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href={'/projects'}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/** slider */}
        <div className="right-0 top-0 xl:absolute xl:max-w-[1000px]">
          <Swiper
            className="h-[480px] bg-neutral-100"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 } }}
          >
            {/** display 4 projects */}
            {projectData.slice(0, 4).map((project) => {
              return (
                <SwiperSlide key={project.link}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
