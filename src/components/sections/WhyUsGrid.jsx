import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { staggerContainer, scaleIn, viewportOnce } from '../../animations/presets'

export default function WhyUsGrid({ items, title, subtitle, eyebrow = 'Why choose us' }) {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-10" />
        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item) => (
            <motion.li key={item.title} variants={scaleIn} className="card flex flex-col p-6">
              <div className="icon-box mb-3 h-12 w-12">
                <Icon name={item.icon} size={24} />
              </div>
              <h3 className="font-display text-base font-semibold text-astha-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
