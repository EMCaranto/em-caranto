import {
  BrainCircuitIcon,
  CalendarIcon,
  EyeIcon,
  GraduationCapIcon,
  HomeIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  MailIcon,
  Paintbrush2Icon,
  PhoneCallIcon,
  User2Icon,
  UsersIcon,
  Wand2Icon,
} from 'lucide-react'

interface InfoItem {
  icon: React.ReactNode
  text: string
}

interface QualificationItem {
  school?: string
  course?: string
  company?: string
  position?: string
  year?: string
}

interface QualificationSection {
  title: string
  data: QualificationItem[]
}

interface SkillItem {
  icon?: React.ReactNode
  name?: string
  imagePath?: string
}

interface SkillSection {
  title: string
  data: SkillItem[]
}

const infoData: InfoItem[] = [
  {
    icon: <User2Icon />,
    text: 'Erickson',
  },
  {
    icon: <PhoneCallIcon />,
    text: '(+63) 999 - 353 - 1054',
  },
  {
    icon: <MailIcon />,
    text: 'erickson.caranto.m@gmail.com',
  },
  {
    icon: <CalendarIcon />,
    text: 'Born on July 14, 1999',
  },
  {
    icon: <GraduationCapIcon />,
    text: 'Bachelor of Science in Information Technology',
  },
  {
    icon: <HomeIcon />,
    text: 'Malis, Guiguinto, Bulacan',
  },
]

const qualificationData: QualificationSection[] = [
  {
    title: 'Academic',
    data: [
      {
        school: 'Bulacan State University',
        course: 'Bachelor of Science in Information Technology',
        year: '2019 - 2023',
      },
      {
        school: 'Guiguinto National Vocational High School - Main Campus',
        course: 'Senior High School: TVL - ICT (Programming)',
        year: '2017 - 2019',
      },
      {
        school: 'Guiguinto National Vocational High School - Annex',
        course: 'Junior High School: TVL - Drafting & Visual Graphics Design',
        year: '2013 - 2017',
      },
    ],
  },
  {
    title: 'Work',
    data: [
      {
        company: 'Accenture Inc.',
        position: 'Web Developer Intern',
        year: 'Jan 2023 - May 2023',
      },
    ],
  },
]

const skillData: SkillSection[] = [
  {
    title: 'Skill',
    data: [
      {
        icon: <Paintbrush2Icon />,
        name: 'Front End Coding',
      },
      {
        icon: <LayoutDashboardIcon />,
        name: 'UI / UX Design',
      },
      {
        icon: <Wand2Icon />,
        name: 'Graphics Design',
      },
      {
        icon: <EyeIcon />,
        name: 'Attention to details',
      },
      {
        icon: <BrainCircuitIcon />,
        name: 'Creativity',
      },
      {
        icon: <ListChecksIcon />,
        name: 'Organization',
      },
      {
        icon: <UsersIcon />,
        name: 'Teamwork',
      },
    ],
  },
  {
    title: 'Tool',
    data: [
      {
        name: '',
        imagePath: '',
      },
    ],
  },
]
