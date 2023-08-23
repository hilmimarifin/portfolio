import IntroSection from '@/components/IntroSection'
import LandingSection from '@/components/LandingSection'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <main>
      <div className='font-nunito'>
        <LandingSection />
        <IntroSection />
        <ProjectSection className=' min-h-screen pt-10' />
      </div>
    </main >
  )
}
