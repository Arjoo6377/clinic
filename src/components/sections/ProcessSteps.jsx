import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import { staggerContainer, scaleIn, viewportOnce } from '../../animations/presets'

export default function ProcessSteps({ steps, columns = 4 }) {
  const colClass =
    columns === 3
      ? 'sm:grid-cols-3'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <motion.ol
      className={`grid grid-cols-1 gap-4 ${colClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          variants={scaleIn}
          className="relative flex flex-col rounded-2xl border border-astha-200 bg-white p-5 shadow-md"
        >
          <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-astha-800 text-sm font-bold text-white">
            {index + 1}
          </span>
          <div className="icon-box mb-3 h-11 w-11">
            <Icon name={step.icon} size={22} />
          </div>
          <h3 className="font-display text-base font-semibold text-astha-900">{step.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{step.text}</p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
