import IntroSection from '@/components/IntroSection'
import LandingSection from '@/components/LandingSection'
import ProjectSection from '@/components/ProjectSection'
import ScrollToTop from '@/components/ScrollToTop'

import React from 'react'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col'>
        <LandingSection />
        <IntroSection />
        <ProjectSection className=' min-h-screen pt-10 mb-10' />
        <ScrollToTop />
      </div>
    </main >
  )
}
