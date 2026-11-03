
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Shopper', href: '#shopper' },
  { label: 'Merchant', href: '#merchant' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-5 z-50 px-4 sm:top-6"
    >
      <nav
        className={`relative mx-auto flex h-[68px] max-w-[1240px] items-center justify-between rounded-full border px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'border-fitora-grey/80 bg-fitora-offwhite/95 shadow-[0_8px_30px_rgba(46,43,41,0.08)] backdrop-blur-xl'
            : 'border-white/60 bg-white/55 shadow-[0_4px_24px_rgba(46,43,41,0.04)] backdrop-blur-lg'
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-[25px] font-extrabold tracking-[-1.5px] text-fitora-charcoal"
          aria-label="FITORA home"
        >
          FITORA<span className="text-fitora-sage">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-fitora-charcoal/75 transition-colors duration-200 hover:text-fitora-dark-sage"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#signin"
            className="text-[13px] font-semibold text-fitora-charcoal transition-colors hover:text-fitora-sage"
          >
            Sign in
          </a>

          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-fitora-dark-sage px-5 py-3 text-[12px] font-semibold text-white! transition-all duration-200 hover:-translate-y-0.5 hover:bg-fitora-charcoal"
          >
            Get Started
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-fitora-charcoal transition-colors hover:bg-fitora-beige md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[78px] overflow-hidden rounded-[24px] border border-fitora-grey/70 bg-fitora-offwhite/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-fitora-charcoal transition-colors hover:bg-fitora-beige"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#signin"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-fitora-charcoal transition-colors hover:bg-fitora-beige"
                >
                  Sign in
                </a>

                <a
                  href="#get-started"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-fitora-dark-sage px-5 py-3 text-sm font-semibold text-white"
                >
                  Get Started
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
