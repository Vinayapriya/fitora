
import { Lightbulb, Ruler, UserRound } from 'lucide-react'
import { motion } from 'motion/react'

const features = [
  {
    icon: UserRound,
    title: 'One profile',
    description: 'A reusable fit profile across supported brands.',
  },
  {
    icon: Ruler,
    title: 'Garment-level matching',
    description: 'Recommendations based on individual garment measurements.',
  },
  {
    icon: Lightbulb,
    title: 'Clear explanations',
    description: 'Understand why a particular size is recommended.',
  },
]

export default function FeatureStrip() {
  return (
    <section className="border-y border-fitora-grey/70 bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-fitora-grey/70 md:grid-cols-3 md:divide-x md:divide-y-0">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex items-center gap-5 px-5 py-7 md:justify-center md:px-7 lg:px-10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fitora-sage/10 text-fitora-dark-sage">
                <Icon size={21} strokeWidth={1.6} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-fitora-charcoal">
                  {feature.title}
                </h3>

                <p className="mt-1 max-w-[260px] text-xs leading-6 text-fitora-charcoal/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
