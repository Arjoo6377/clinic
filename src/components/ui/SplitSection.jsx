import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../animations/presets'
import Container from './Container'
import SectionHeader from './SectionHeader'
import { cn } from '../../utils/cn'

export default function SplitSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  media,
  mediaPosition = 'right',
  bg = 'white',
  className,
}) {
  const bgClass =
    bg === 'light' ? 'bg-astha-100' : bg === 'gradient' ? 'bg-gradient-to-b from-astha-100 to-white' : 'bg-white'

  return (
    <section id={id} className={cn('section-padding', bgClass, className)}>
      <Container>
        {(title || subtitle) && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="left"
            className="mb-8 lg:mb-10"
          />
        )}
        <motion.div
          className={cn(
            'grid items-center gap-8 lg:gap-12',
            media && 'lg:grid-cols-2',
            media && mediaPosition === 'left' && 'lg:[&>*:first-child]:order-2',
          )}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="min-w-0">{children}</div>
          {media ? <div className="min-w-0 overflow-hidden rounded-2xl border border-astha-200 shadow-lg">{media}</div> : null}
        </motion.div>
      </Container>
    </section>
  )
}
