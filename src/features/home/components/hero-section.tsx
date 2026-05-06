import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { OrbitShowcase } from '@/features/home/components/orbit-showcase'

const scrollToId = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroSection() {
  return (
    <section className="relative">
      <Card className="section-shell p-5 sm:p-7 lg:p-8">

        <div className="relative z-10">
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.34em] text-cyan-100/72 sm:text-[11px] lg:gap-4">
            <span>Frontend Engineer</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-200/26 via-cyan-200/14 to-transparent" />
          </div>

          <h1 className="mt-4 font-hero text-[clamp(2.8rem,5.4vw,5.45rem)] uppercase leading-[0.94] tracking-[-0.04em] text-cyan-50 [text-shadow:0_0_18px_rgba(212,248,255,0.24),0_0_32px_rgba(108,205,255,0.10)] md:whitespace-nowrap lg:text-[clamp(3.6rem,5vw,5.7rem)]">
            Harismunandar Osa
          </h1>

          <div className="mt-7 grid gap-7 lg:mt-4 lg:grid-cols-[minmax(300px,0.39fr)_minmax(0,0.61fr)] lg:items-start lg:gap-8 xl:grid-cols-[minmax(320px,0.4fr)_minmax(0,0.6fr)] xl:gap-10">
            <div className="flex flex-col justify-start lg:min-h-[28rem] lg:pt-10 xl:min-h-[29rem] xl:pt-12">
              <div className="max-w-[18rem] sm:max-w-[19rem] lg:max-w-[18rem] xl:max-w-[18.5rem]">
                <p className="text-[14px] leading-[1.72] text-white/76 sm:text-[15px] sm:leading-[1.78] xl:text-[15.5px]">
                  Building scalable interfaces, cloud-connected systems, and enterprise-grade product flows with extensive brand experience.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 lg:mt-8">
                <Button
                  className="min-w-[170px] px-6 py-3.5 text-[11px] tracking-[0.2em] shadow-[0_0_0_1px_rgba(203,244,255,0.08),0_18px_34px_rgba(84,196,255,0.22),0_0_24px_rgba(84,196,255,0.18)]"
                  onClick={() => scrollToId('#experience')}
                >
                  View Experience
                </Button>
                <Button
                  variant="secondary"
                  className="min-w-[126px] border-cyan-200/34 bg-transparent px-6 py-3.5 text-[11px] tracking-[0.2em] text-cyan-50/92 hover:border-cyan-200/56 hover:bg-cyan-200/[0.05]"
                  onClick={() => scrollToId('#contact')}
                >
                  Contact
                </Button>
              </div>
            </div>

            <OrbitShowcase />
          </div>
        </div>
      </Card>

    </section>
  )
}
