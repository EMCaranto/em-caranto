export interface ProjectItem {
  cover: string
  name: string
  category: string
  description: string
  link: string
  github: string
}

export const projectData: ProjectItem[] = [
  {
    cover: '/images/projects/enscribe/enscribe-light-cover.png',
    name: 'Enscribe',
    category: 'Next JS',
    description: 'This is a simple notion clone created by Next JS.',
    link: 'https://enscribe.vercel.app/',
    github: 'https://github.com/EMCaranto/emc-enscribe',
  },
  {
    cover: '/images/projects/emcube/emcube-cover.png',
    name: 'EMCube',
    category: 'Next JS',
    description:
      'This is a web based software as a service that uses ai to generate a content.',
    link: 'https://next-ai-saas-zeta.vercel.app/',
    github: 'https://github.com/EMCaranto/next-ai-saas',
  },
  {
    cover:
      '/images/projects/react-firebase-auth/react-firebase-auth-light-cover.png',
    name: 'React Firebase Auth',
    category: 'React JS',
    description:
      'This is my simple react js authentication with firebase authentication.',
    link: 'https://react-firebase-auth-tau.vercel.app/sign-in',
    github: 'https://github.com/EMCaranto/react-firebase-auth',
  },
  {
    cover: '/images/projects/react-todo-list/todo-list-cover.png',
    name: 'Todo List',
    category: 'React JS',
    description:
      'This is my first simple little project when I am learning react js.',
    link: 'https://react-todo-list-two-beta.vercel.app/',
    github: 'https://github.com/EMCaranto/react-todo-list',
  },
]
