import { motion } from 'framer-motion'
import { STATS } from '../../data/home'
import { staggerContainer, scaleIn, viewportOnce } from '../../animations/presets'

export default function StatsSection() {
  return (
    <section className="relative z-10 px-4 pb-8 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <motion.div
        className="container-app grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {STATS.map(([value, label]) => (
          <motion.article key={label} variants={scaleIn} className="card-stat">
            <h3 className="m-0 font-display text-2xl font-bold text-astha-800 sm:text-3xl">{value}</h3>
            <p className="mt-2 text-sm font-semibold leading-snug text-slate-700">{label}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
