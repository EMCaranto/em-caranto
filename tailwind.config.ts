import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // custom
      backgroundImage: {
        hero: 'url(/svgs/wave/wave-haikei.svg)',
        'hero-shape': 'url(/svgs/blob/blob-haikei-1.svg)',
        'hero-shape-light': 'url(/svgs/blob/blob-haikei-2.svg)',
        'hero-shape-dark': 'url(/svgs/blob/blob-haikei-3.svg)',
        'about-shape-light': 'url(/assets/about/shape-light.svg)',
        'about-shape-dark': 'url(/assets/about/shape-dark.svg)',
        'dot-light': 'url(/assets/dots-light.svg)',
        'dot-dark': 'url(/assets/dots-dark.svg)',
        'project-bg-light': 'url(/assets/work/project-bg-light.png)',
        'project-bg-dark': 'url(/assets/work/project-bg-dark.png)',
        'contact-illustration-light':
          'url(/assets/contact/illustration-light.svg)',
        'contact-illustration-dark':
          'url(/assets/contact/illustration-dark.svg)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
