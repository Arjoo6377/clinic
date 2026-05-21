import { motion } from 'framer-motion'
import { fadeIn } from '../../animations/presets'

export default function PageBanner({ title, subtitle }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gradient-to-br from-astha-900 to-astha-800 px-4 py-12 text-center sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h1>
        {subtitle ? (
          <p className="mt-3 text-base leading-relaxed text-blue-100 sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </motion.section>
  )
}
