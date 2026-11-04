
import { useState } from 'react'
import { motion } from 'motion/react'
import { Ruler, Shirt, Sparkles } from 'lucide-react'

type FitPreference = 'Slim' | 'Regular' | 'Relaxed'

const shopper = {
  chest: 96,
  shoulder: 44,
  preferredLength: 70,
}

const fitRanges: Record<FitPreference, [number, number]> = {
  Slim: [2, 6],
  Regular: [6, 10],
  Relaxed: [10, 16],
}

const garmentSizes = [
  { size: 'S', chest: 48, shoulder: 42, length: 68, order: 1 },
  { size: 'M', chest: 50, shoulder: 44, length: 70, order: 2 },
  { size: 'L', chest: 52, shoulder: 46, length: 72, order: 3 },
]

function getRecommendation(preference: FitPreference) {
  const [minimum, maximum] = fitRanges[preference]
  const target = (minimum + maximum) / 2

  const evaluatedSizes = garmentSizes.map((garment) => {
    const chestRoom = garment.chest * 2 - shopper.chest
    const shoulderDifference = garment.shoulder - shopper.shoulder
    const lengthDifference = garment.length - shopper.preferredLength

    const score =
      0.5 * (Math.abs(chestRoom - target) / ((maximum - minimum) / 2)) +
      0.3 * (Math.abs(shoulderDifference) / 2) +
      0.2 * (Math.abs(lengthDifference) / 3)

    return {
      ...garment,
      chestRoom,
      shoulderDifference,
      lengthDifference,
      score,
      eligible: chestRoom >= minimum && chestRoom <= maximum,
    }
  })

  const eligibleSizes = evaluatedSizes
    .filter((size) => size.eligible)
    .sort(
      (a, b) =>
        a.score - b.score ||
        Math.abs(a.lengthDifference) - Math.abs(b.lengthDifference) ||
        Math.abs(a.shoulderDifference) - Math.abs(b.shoulderDifference) ||
        a.order - b.order,
    )

  return {
    recommendation: eligibleSizes[0] ?? null,
    evaluatedSizes,
  }
}

export default function RecommendationDemo() {
  const [preference, setPreference] =
    useState<FitPreference>('Regular')

  const { recommendation, evaluatedSizes } =
    getRecommendation(preference)

  return (
    <section
      id="demo"
      className="bg-fitora-offwhite px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-[650px] text-center"
        >
          <p className="mb-4 text-[11px] font-bold tracking-[3px] text-fitora-sage">
            SEE THE DIFFERENCE
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-fitora-charcoal sm:text-5xl">
            Fit is personal.
            <br />
            <span className="font-normal italic text-fitora-sage">
              Your size should be too.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-fitora-charcoal/60 sm:text-base">
            Explore how FITORA compares your measurements with individual
            garment data to find a suitable size.
          </p>
        </motion.div>

        {/* Demo card */}
        <div className="grid overflow-hidden rounded-[28px] border border-fitora-grey/70 bg-white shadow-[0_15px_50px_rgba(46,43,41,0.05)] lg:grid-cols-2">

          {/* Product information */}
          <div className="bg-fitora-beige/40 p-8 sm:p-12">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[2px] text-fitora-sage">
                PRODUCT PREVIEW
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-fitora-charcoal/60">
                SAMPLE PRODUCT
              </span>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-[22px] bg-fitora-beige">
              <div className="flex h-44 w-40 items-center justify-center rounded-t-[55px] rounded-b-[18px] bg-fitora-sage shadow-lg">
                <Shirt
                  size={65}
                  strokeWidth={1}
                  className="text-white/80"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium text-fitora-charcoal/50">
                URBANWEAR · EVERYDAY COLLECTION
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-fitora-charcoal">
                Classic Cotton Tee
              </h3>

              <p className="mt-3 text-sm leading-6 text-fitora-charcoal/60">
                A fictional product used to demonstrate FITORA's
                garment-level size recommendation.
              </p>
            </div>
          </div>

          {/* Recommendation information */}
          <div className="p-8 sm:p-12">

            {/* Profile heading */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-fitora-dark-sage">
                <Ruler size={17} />
                <span className="text-[10px] font-bold tracking-[2px]">
                  YOUR FIT PROFILE
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-fitora-charcoal">
                Your measurements
              </h3>

              {/* Fit preference selector */}
              <div className="mt-5">
                <p className="mb-3 text-xs font-medium text-fitora-charcoal/60">
                  Choose your preferred fit
                </p>

                <div className="flex flex-wrap gap-2">
                  {(
                    ['Slim', 'Regular', 'Relaxed'] as FitPreference[]
                  ).map((fit) => (
                    <button
                      key={fit}
                      type="button"
                      onClick={() => setPreference(fit)}
                      aria-pressed={preference === fit}
                      className={`rounded-full border px-5 py-2 text-xs font-semibold transition-colors ${
                        preference === fit
                          ? 'border-fitora-dark-sage bg-fitora-dark-sage text-white'
                          : 'border-fitora-grey bg-white text-fitora-charcoal hover:border-fitora-sage'
                      }`}
                    >
                      {fit}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample measurements */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-fitora-offwhite p-4">
                <p className="text-xs text-fitora-charcoal/50">
                  Chest
                </p>
                <p className="mt-2 text-xl font-semibold">96 cm</p>
              </div>

              <div className="rounded-2xl bg-fitora-offwhite p-4">
                <p className="text-xs text-fitora-charcoal/50">
                  Shoulder
                </p>
                <p className="mt-2 text-xl font-semibold">44 cm</p>
              </div>

              <div className="rounded-2xl bg-fitora-offwhite p-4">
                <p className="text-xs text-fitora-charcoal/50">
                  Preferred length
                </p>
                <p className="mt-2 text-xl font-semibold">70 cm</p>
              </div>

              <div className="rounded-2xl bg-fitora-offwhite p-4">
                <p className="text-xs text-fitora-charcoal/50">
                  Fit preference
                </p>
                <p className="mt-2 text-xl font-semibold">
                  {preference}
                </p>
              </div>
            </div>

            {/* Dynamic recommendation */}
            <div className="mt-8 rounded-[22px] border border-fitora-sage/30 bg-fitora-sage/10 p-6">
              <div className="flex items-center gap-2 text-fitora-dark-sage">
                <Sparkles size={17} />
                <span className="text-[10px] font-bold tracking-[2px]">
                  FITORA RECOMMENDS
                </span>
              </div>

              {recommendation ? (
                <>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-fitora-charcoal/60">
                        Your suggested size
                      </p>

                      <p className="mt-1 text-5xl font-semibold text-fitora-dark-sage">
                        {recommendation.size}
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-fitora-dark-sage">
                      {preference} fit
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-fitora-charcoal/70">
                    This size provides {recommendation.chestRoom} cm
                    of chest room. Its shoulder measurement is{' '}
                    {Math.abs(recommendation.shoulderDifference)} cm{' '}
                    {recommendation.shoulderDifference > 0
                      ? 'wider'
                      : recommendation.shoulderDifference < 0
                        ? 'narrower'
                        : 'equal'}{' '}
                    to yours, and its length differs by{' '}
                    {Math.abs(recommendation.lengthDifference)} cm
                    from your preference.
                  </p>
                </>
              ) : (
                <div className="mt-5">
                  <p className="font-semibold text-fitora-charcoal">
                    No matching size found
                  </p>

                  <p className="mt-2 text-sm leading-6 text-fitora-charcoal/70">
                    None of the available sizes falls within your
                    selected chest-room range.
                  </p>
                </div>
              )}
            </div>

            {/* Size comparison */}
            <div className="mt-7">
              <h4 className="mb-3 text-sm font-semibold text-fitora-charcoal">
                Available size comparison
              </h4>

              <div className="space-y-2">
                {evaluatedSizes.map((size) => (
                  <div
                    key={size.size}
                    className={`flex items-center justify-between gap-2 rounded-xl border p-3 text-xs ${
                      recommendation?.size === size.size
                        ? 'border-fitora-sage bg-fitora-sage/10'
                        : 'border-fitora-grey/70 bg-white'
                    }`}
                  >
                    <span className="font-semibold">{size.size}</span>

                    <span className="text-fitora-charcoal/60">
                      {size.chestRoom} cm chest room
                    </span>

                    <span className="text-fitora-charcoal/60">
                      {size.eligible ? 'Within range' : 'Outside range'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-[10px] leading-5 text-fitora-charcoal/40">
              Demonstration only · Fictional brand · Synthetic measurements ·
              Prototype recommendation rules
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
