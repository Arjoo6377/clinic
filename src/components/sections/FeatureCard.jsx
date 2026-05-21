import { motion } from 'framer-motion'
import { scaleIn } from '../../animations/presets'
import Icon from '../ui/Icon'

export default function FeatureCard({ title, text, icon }) {
  return (
    <motion.li variants={scaleIn} className="rounded-xl border border-astha-200 bg-astha-100/50 p-4 sm:p-5">
      <div className="icon-box mb-3 h-12 w-12">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="font-display text-base font-semibold text-astha-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{text}</p>
    </motion.li>
  )
}
