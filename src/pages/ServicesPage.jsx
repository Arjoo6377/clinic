import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import ServiceCard from '../components/sections/ServiceCard'
import ProcessSteps from '../components/sections/ProcessSteps'
import CtaSection from '../components/sections/CtaSection'
import Icon from '../components/ui/Icon'
import { SERVICES, CARE_JOURNEY, WHO_WE_SERVE } from '../data/services'
import { CLINIC } from '../constants/clinic'
import { staggerContainer, scaleIn, viewportOnce } from '../animations/presets'

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title={`Services | ${CLINIC.name}`}
        description="General consultation, preventive checkups, chronic disease care, and appointments at Astha Health Care, Badarpur."
      />
      <PageBanner
        title="Our services"
        subtitle="Focused primary care to keep you and your family well—with clear explanations at every step."
      />

      <section className="section-padding bg-gradient-to-b from-astha-100 to-white">
        <Container>
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeader
            eyebrow="In detail"
            title="What each service includes"
            subtitle="Expand your understanding before you book—every consultation is tailored to your symptoms and history."
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <article key={service.id} className="card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="icon-box m-0 h-12 w-12 shrink-0">
                    <Icon name={service.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-astha-900">{service.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-astha-200 pt-5">
                  {service.details.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-slate-700">
                      <span className="font-bold text-astha-800" aria-hidden>
                        ·
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-astha-100">
        <Container>
          <SectionHeader
            eyebrow="Your visit"
            title="How care progresses"
            subtitle="A predictable flow so you always know what happens next."
            className="mb-10"
          />
          <ProcessSteps steps={CARE_JOURNEY} />
        </Container>
      </section>

      <section className="section-padding">
        <Container narrow>
          <SectionHeader
            title="Who we commonly see"
            subtitle="General physician care for a wide range of everyday health needs."
            className="mb-6"
          />
          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {WHO_WE_SERVE.map((line) => (
              <motion.li
                key={line}
                variants={scaleIn}
                className="flex items-center gap-3 rounded-xl border border-astha-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
              >
                <span className="h-2 w-2 rounded-full bg-astha-800" aria-hidden />
                {line}
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      <CtaSection
        title="Not sure which service fits?"
        description="Describe your symptoms when you call—we will recommend the right type of visit and duration."
      />
    </>
  )
}
