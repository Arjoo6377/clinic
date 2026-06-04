import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import DoctorProfileSection from '../components/sections/DoctorProfileSection'
import FeatureCard from '../components/sections/FeatureCard'
import CtaSection from '../components/sections/CtaSection'
import Button from '../components/ui/Button'
import { ABOUT_VALUES, ABOUT_INTRO, CLINIC_STANDARDS, DOCTOR_PROFILE } from '../data/about'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'
import { staggerContainer, viewportOnce } from '../animations/presets'

export default function AboutPage() {
  const { doctor } = CLINIC

  return (
    <>
      <PageMeta
        title={`About | ${CLINIC.name}`}
        description={`${doctor.name} (${doctor.degrees}) — ${doctor.experience}. General healthcare, preventive medicine, and occupational health in Badarpur.`}
      />
      <PageBanner
        title="About Astha Health Care"
        subtitle={`Led by ${doctor.name} — patient-centered care with over ${DOCTOR_PROFILE.experienceYears} years of clinical experience.`}
      />

      <section className="section-padding">
        <Container narrow>
          <SectionHeader
            eyebrow="Our story"
            title="Care rooted in the community"
            subtitle={ABOUT_INTRO.mission}
            align="left"
          />
          <p className="mt-6 text-body">{ABOUT_INTRO.vision}</p>
        </Container>
      </section>

      <DoctorProfileSection />

      <section className="section-padding bg-astha-100">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title="What guides every consultation"
            subtitle="Principles we follow whether you visit for a fever, a checkup, or long-term condition management."
            className="mb-10"
          />
          <motion.ul
            className="grid gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {ABOUT_VALUES.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </motion.ul>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeader
            eyebrow="Facilities"
            title="Modern medical standards"
            subtitle="Evidence-based care in a calm clinic built for repeat visits and family comfort."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {CLINIC_STANDARDS.map((item) => (
              <article key={item.title} className="rounded-xl border border-astha-200 bg-white p-6 shadow-sm">
                <h3 className="font-display font-semibold text-astha-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to={ROUTES.services}>Explore services</Button>
            <Button to={ROUTES.gallery} variant="secondary">
              View clinic gallery
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Ready to register as a new patient?"
        description={`Book a consultation with ${doctor.name} — call our desk for availability and what to bring on your first visit.`}
      />
    </>
  )
}
