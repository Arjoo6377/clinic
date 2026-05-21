import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import SplitSection from '../components/ui/SplitSection'
import DoctorCard from '../components/sections/DoctorCard'
import FeatureCard from '../components/sections/FeatureCard'
import CtaSection from '../components/sections/CtaSection'
import Button from '../components/ui/Button'
import { ABOUT_VALUES, ABOUT_INTRO, CLINIC_STANDARDS, DOCTOR_BIO } from '../data/about'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'
import { staggerContainer, viewportOnce } from '../animations/presets'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title={`About | ${CLINIC.name}`}
        description={`Learn about ${CLINIC.name}, ${CLINIC.doctor.name}, and our patient-first general physician practice in Badarpur.`}
      />
      <PageBanner
        title="About Astha Health Care"
        subtitle="A trusted general physician practice in Badarpur, focused on everyday health for families and individuals."
      />

      <SplitSection
        eyebrow="Our story"
        title="Care rooted in the community"
        subtitle={ABOUT_INTRO.mission}
        mediaPosition="right"
        media={<DoctorCard />}
      >
        <p className="text-body">{ABOUT_INTRO.vision}</p>
        <ul className="mt-6 space-y-3">
          {DOCTOR_BIO.map((line) => (
            <li key={line.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-astha-800" aria-hidden />
              {line}
            </li>
          ))}
        </ul>
      </SplitSection>

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
        description="Call our desk to book your first visit—we will tell you what to bring and when we have availability."
      />
    </>
  )
}
