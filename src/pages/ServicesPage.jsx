import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import ServiceCard from '../components/sections/ServiceCard'
import ProcessSteps from '../components/sections/ProcessSteps'
import CtaSection from '../components/sections/CtaSection'
import Icon from '../components/ui/Icon'
import { TREATMENT_SERVICES, CARE_JOURNEY, WHO_WE_SERVE } from '../data/serviceDetails'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'
import { staggerContainer, scaleIn, viewportOnce } from '../animations/presets'

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title={`Services | ${CLINIC.name}`}
        description="Fever, diabetes, hypertension, thyroid, cough, stomach, checkups, asthma, dengue, and fatigue treatment in Badarpur."
      />
      <PageBanner
        title="Our services"
        subtitle="Specialised treatment pages for common conditions—with symptoms, diagnosis, and care guidance."
      />

      <section className="section-padding bg-gradient-to-b from-astha-100 to-white">
        <Container>
          <SectionHeader
            eyebrow="Treatments"
            title="Select a condition to learn more"
            subtitle="Each service has a dedicated page with causes, types, treatment, and FAQs."
            className="mb-10"
          />
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {TREATMENT_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={{
                  id: service.slug,
                  title: service.title,
                  subtitle: service.subtitle,
                  icon: service.icon,
                }}
                index={index}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container narrow>
          <SectionHeader
            title="Quick reference"
            subtitle="Jump directly to any treatment guide."
            className="mb-6"
          />
          <ul className="divide-y divide-astha-200 rounded-2xl border border-astha-200 bg-white">
            {TREATMENT_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to={ROUTES.serviceDetail(service.slug)}
                  className="flex items-center gap-4 px-4 py-4 transition hover:bg-astha-100 sm:px-6"
                >
                  <div className="icon-box m-0 h-10 w-10 shrink-0">
                    <Icon name={service.icon} size={22} />
                  </div>
                  <span className="flex-1 font-display text-sm font-semibold text-astha-900 sm:text-base">
                    {service.title}
                  </span>
                  <span className="text-sm font-bold text-astha-800">Read →</span>
                </Link>
              </li>
            ))}
          </ul>
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
        description="Describe your symptoms when you call—we will recommend the right treatment page and visit type."
      />
    </>
  )
}
