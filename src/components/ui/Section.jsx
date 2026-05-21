import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../animations/presets'
import { cn } from '../../utils/cn'

export default function Section({
  id,
  children,
  className,
  bg = 'white',
  animate = true,
}) {
  const bgClass =
    bg === 'light'
      ? 'bg-astha-100'
      : bg === 'gradient-services'
        ? 'bg-gradient-to-b from-astha-100 to-white'
        : bg === 'cta'
          ? 'bg-gradient-to-br from-astha-900 to-astha-800'
          : 'bg-white'

  const content = (
    <section id={id} className={cn('section-padding', bgClass, className)}>
      {children}
    </section>
  )

  if (!animate) return content

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      {content}
    </motion.div>
  )
}
