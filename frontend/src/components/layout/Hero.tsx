
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-fitora-offwhite px-5 pb-16 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: Hero content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[590px]"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-bold tracking-[3px] text-fitora-sage"
          >
            PERSONAL FIT, EXPLAINED
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl font-semibold leading-[1.08] tracking-[-2.5px] text-fitora-charcoal sm:text-6xl lg:text-[76px]"
          >
            Your fit.
            <br />
            Your{' '}
            <span className="font-normal italic text-fitora-sage">
              identity.
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-[440px] text-base leading-8 text-fitora-charcoal/70 sm:text-lg"
          >
            Compare your measurements and fit preferences with individual
            garments—and understand why a size is recommended.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#get-started"
              className="inline-flex items-center gap-3 rounded-full bg-fitora-dark-sage px-7 py-4 text-sm font-semibold text-white! transition-all duration-200 hover:-translate-y-0.5 hover:bg-fitora-charcoal"
            >
              Create Your Fit Profile
              <ArrowRight size={17} />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-fitora-grey px-6 py-4 text-sm font-semibold text-fitora-charcoal transition-colors hover:border-fitora-sage hover:text-fitora-sage"
            >
              <Play size={15} />
              Explore the Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 text-xs text-fitora-charcoal/45"
          >
            Portfolio demo · Fictional brands · Sample garment data
          </motion.p>
        </motion.div>

        {/* Right: Fashion editorial image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_24px_24px] bg-fitora-beige">
            <img
              src="https://i.pinimg.com/736x/02/9a/5f/029a5fb3220b20bdbb24d7462dfa57dc.jpg"
              alt="Fashion editorial for FITORA"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-7 right-7 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[10px] font-semibold tracking-[1.5px] text-fitora-charcoal backdrop-blur-md">
              PERSONAL FIT, REIMAGINED
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-fitora-sage/30" />

          <div className="absolute -right-4 top-16 h-12 w-12 rounded-full bg-fitora-sage/15" />
        </motion.div>
      </div>
    </section>
  )
}
