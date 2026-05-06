import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { buttonHover, headerItem, headerReveal } from '@/lib/motion'
import { navItems } from '@/features/home/data/portfolio-data'
import logo from "@/assets/logo.svg";

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'show'}
      variants={headerReveal}
      className="sticky top-4 z-50 mb-4 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,22,0.74),rgba(8,11,18,0.9))] px-3 py-2.5 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.2)] lg:mb-4 lg:rounded-full lg:px-4"
    >
      <div className="flex items-center justify-between gap-3">
        <motion.div variants={headerItem} className="flex min-w-0 items-center gap-2.5 lg:gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border border-cyan-200/18 bg-cyan-200/10 font-display text-[11px] font-bold tracking-[0.24em] text-white lg:h-10 lg:w-10 lg:text-sm">
           <img src={logo} alt="logo" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold text-white lg:text-[13px]">Harismunandar Osa</div>
            <div className="text-[8px] uppercase tracking-[0.24em] text-white/46 lg:text-[9px]">Frontend Engineer</div>
          </div>
        </motion.div>

        <motion.nav variants={headerReveal} className="hidden items-center gap-1.5 md:flex lg:gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              variants={headerItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="nav-link-fx rounded-full px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/62 transition hover:bg-white/[0.05] hover:text-white lg:px-4"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div variants={headerItem} className="flex items-center gap-2">
          <motion.div whileHover={reduceMotion ? undefined : buttonHover} className="hidden md:block">
            <Button
              className="h-10 rounded-full px-5 text-[10px] uppercase tracking-[0.18em]"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Contact
            </Button>
          </motion.div>

          <button
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-200/20 hover:bg-white/[0.07] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0, y: -8 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: 'auto', y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-3 grid gap-2 border-t border-white/8 pt-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.28 }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                className="mt-1 w-full"
                onClick={() => {
                  setOpen(false)
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
