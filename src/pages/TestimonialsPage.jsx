import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import CtaSection from '../components/sections/CtaSection'
import { TESTIMONIALS, TRUST_METRICS } from '../data/testimonials'
import { CLINIC } from '../constants/clinic'
import { staggerContainer, scaleIn, viewportOnce } from '../animations/presets'

export default function TestimonialsPage() {
  return (
    <>
      <PageMeta
        title={`Testimonials | ${CLINIC.name}`}
        description="Patient experiences at Astha Health Care, Badarpur—trusted general physician care."
      />
      <PageBanner
        title="What patients say"
        subtitle="Feedback from families and individuals who rely on us for everyday healthcare."
      />

      <section className="section-padding bg-astha-100">
        <Container>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-3xl lg:mx-auto">
            {TRUST_METRICS.map((m) => (
              <li key={m.label} className="card-stat">
                <p className="font-display text-2xl font-bold text-astha-800">{m.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-700 sm:text-sm">{m.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeader
            eyebrow="Reviews"
            title="Experiences that matter"
            subtitle="Illustrative patient feedback—names shortened for privacy."
            className="mb-10"
          />
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map((item) => (
              <motion.blockquote key={item.author} variants={scaleIn} className="card flex flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="icon-box m-0 h-10 w-10">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <span className="text-sm font-bold text-astha-800" aria-label={`${item.rating} out of 5 stars`}>
                    {'★'.repeat(item.rating)}
                  </span>
                </div>
                <p className="flex-1 text-body">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 border-t border-astha-200 pt-4">
                  <cite className="not-italic font-display font-semibold text-astha-900">{item.author}</cite>
                  <p className="text-xs text-slate-600">{item.detail}</p>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </Container>
      </section>

      <CtaSection
        title="Experience care that listens first"
        description="New patients are welcome—call to book and mention how you heard about us."
      />
    </>
  )
}
