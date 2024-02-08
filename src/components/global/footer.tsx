// React JS
import React from 'react'

// Components
import Social from '@/components/global/social'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/** social */}
          <Social
            containerStyle={'mx-auto mb-4 flex gap-x-6 xl:mx-0'}
            iconStyle={
              'text-[20px] text-primary transition-all hover:text-primary/70 dark:text-white/70 dark:hover:text-primary'
            }
          />
          {/** copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Erickson Caranto. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
