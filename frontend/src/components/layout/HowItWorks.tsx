
import { ArrowDownRight, Ruler, Shirt, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Create your fit profile.',
    description:
      'Add your body measurements and choose how you prefer your clothes to fit. Your profile becomes your starting point.',
    detail: 'YOUR MEASUREMENTS + PREFERENCES',
    icon: Ruler,
    visual: 'profile',
  },
  {
    number: '02',
    title: 'Compare every garment.',
    description:
      'FITORA compares your measurements with the actual measurements of each product—not just the size label.',
    detail: 'YOUR PROFILE + GARMENT DATA',
    icon: Shirt,
    visual: 'compare',
  },
  {
    number: '03',
    title: 'Discover your best match.',
    description:
      'See a suggested size, understand why it was selected and explore how different sizes compare.',
    detail: 'A RECOMMENDATION YOU CAN UNDERSTAND',
    icon: Sparkles,
    visual: 'match',
  },
]

function StepVisual({ type }: { type: string }) {
  if (type === 'profile') {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl bg-[#E8DFD3] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[2px] text-fitora-charcoal/60">
            YOUR FIT PROFILE
          </span>
          <Ruler size={20} className="text-fitora-dark-sage" />
        </div>

        <div className="space-y-4">
          {[
            ['Chest', '96 cm'],
            ['Shoulder', '44 cm'],
            ['Preferred length', '70 cm'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-fitora-charcoal/15 pb-3"
            >
              <span className="text-sm text-fitora-charcoal/65">{label}</span>
              <span className="text-sm font-semibold text-fitora-charcoal">
                {value}
              </span>
            </div>
          ))}
        </div>

        <span className="text-xs font-medium text-fitora-dark-sage">
          Fit preference · Regular
        </span>
      </div>
    )
  }

  if (type === 'compare') {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl bg-[#E4E8DF] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[2px] text-fitora-charcoal/60">
            GARMENT MEASUREMENTS
          </span>
          <Shirt size={20} className="text-fitora-dark-sage" />
        </div>

        <div className="space-y-3">
          {[
            ['S', '48 cm', '42 cm'],
            ['M', '50 cm', '44 cm'],
            ['L', '52 cm', '46 cm'],
          ].map(([size, chest, shoulder]) => (
            <div
              key={size}
              className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                size === 'L'
                  ? 'bg-white shadow-sm'
                  : 'bg-white/45'
              }`}
            >
              <span className="text-sm font-semibold text-fitora-charcoal">
                Size {size}
              </span>
              <span className="text-xs text-fitora-charcoal/65">
                Chest {chest} · Shoulder {shoulder}
              </span>
            </div>
          ))}
        </div>

        <span className="text-xs font-medium text-fitora-dark-sage">
          Comparing actual garment dimensions
        </span>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-[#E8E2DA] p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[2px] text-fitora-charcoal/60">
          YOUR SIZE RESULT
        </span>
        <Sparkles size={20} className="text-fitora-dark-sage" />
      </div>

      <div className="text-center">
        <p className="text-xs tracking-[2px] text-fitora-charcoal/60">
          RECOMMENDED SIZE
        </p>
        <p className="mt-2 text-7xl font-semibold tracking-[-5px] text-fitora-dark-sage">
          L
        </p>
        <p className="mt-2 text-sm font-medium text-fitora-charcoal">
          Regular fit
        </p>
      </div>

      <div className="rounded-xl bg-white/70 px-4 py-3">
        <p className="text-xs font-semibold text-fitora-charcoal">
          Why this size?
        </p>
        <p className="mt-1 text-xs leading-5 text-fitora-charcoal/65">
          8 cm chest room · Based on sample garment measurements.
        </p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-fitora-offwhite px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[11px] font-bold tracking-[3px] text-fitora-sage">
              A BETTER WAY TO FIND YOUR FIT
            </p>

            <h2 className="max-w-[650px] text-4xl font-semibold leading-tight tracking-[-1.5px] text-fitora-charcoal sm:text-5xl lg:text-6xl">
              Three steps.
              <br />
              <span className="font-normal italic text-fitora-sage">
                One better fit.
              </span>
            </h2>
          </div>

          <p className="max-w-[340px] text-sm leading-7 text-fitora-charcoal/65">
            Finding your size shouldn't feel like guesswork. Here's how
            FITORA makes the process easier to understand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col"
              >
                <div className="relative mb-7 h-[280px] overflow-hidden rounded-[24px] sm:h-[320px]">
                  <StepVisual type={step.visual} />

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/60 text-xs font-semibold text-fitora-charcoal backdrop-blur-sm">
                    {step.number}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    className="text-fitora-sage"
                  />
                  <span className="text-[10px] font-bold tracking-[1.8px] text-fitora-charcoal/45">
                    {step.detail}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.7px] text-fitora-charcoal">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[360px] text-sm leading-7 text-fitora-charcoal/65">
                  {step.description}
                </p>

                {index !== 2 && (
                  <div className="mt-5 hidden text-fitora-sage md:block">
                    <ArrowDownRight size={20} strokeWidth={1.5} />
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>

        <p className="mt-12 text-center text-[11px] leading-6 text-fitora-charcoal/45">
          Illustrative interface · Sample measurements · Fictional product data
        </p>
      </div>
    </section>
  )
}
