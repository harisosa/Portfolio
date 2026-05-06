import { ContactSection } from '@/features/home/components/contact-section'
import { ExperienceSection } from '@/features/home/components/experience-section'
import { HeroSection } from '@/features/home/components/hero-section'
import { JourneySection } from '@/features/home/components/journey-section'
import { StackSection } from '@/features/home/components/stack-section'
import { WorkingStyleSection } from '@/features/home/components/working-style-section'
import { SiteHeader } from '@/features/navigation/components/site-header'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,211,255,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(69,172,255,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_12%,transparent_85%,rgba(255,255,255,0.02))]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-20 pt-5 sm:px-6 lg:px-8 xl:px-10">
        <SiteHeader />
        <main className="space-y-5 lg:space-y-6">
          <HeroSection />
          <StackSection />
          <ExperienceSection />
          <JourneySection />
          <WorkingStyleSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
