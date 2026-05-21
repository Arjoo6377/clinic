import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import ProcessSteps from '../components/sections/ProcessSteps'
import CtaSection from '../components/sections/CtaSection'
import { INSURANCE_PLANS, INSURANCE_STEPS, INSURANCE_FAQ, FEE_GUIDE } from '../data/insurance'
import { CLINIC } from '../constants/clinic'
import { staggerContainer, scaleIn, viewportOnce } from '../animations/presets'

export default function InsurancePage() {
  return (
    <>
      <PageMeta
        title={`Insurance & Fees | ${CLINIC.name}`}
        description="Major insurers supported. Transparent consultation fees at Astha Health Care, Badarpur. Call to confirm coverage."
      />
      <PageBanner
        title="Fees & insurance"
        subtitle="Major insurers supported. Clear fees—ask at the desk or call ahead."
      />

      <section className="section-padding">
        <Container>
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {INSURANCE_PLANS.map((plan) => (
              <motion.article key={plan.name} variants={scaleIn} className="card flex flex-col p-6 sm:p-8">
                <div className="icon-box mb-4 h-12 w-12">
                  <Icon name={plan.icon} />
                </div>
                <h2 className="font-display text-lg font-semibold text-astha-900">{plan.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-astha-200 pt-5">
                  {plan.points.map((point) => (
                    <li key={point} className="text-sm text-slate-700">
                      <span className="font-semibold text-astha-800">· </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-padding bg-astha-100">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="How insurance visits work"
            subtitle="Four straightforward steps from verification to follow-up billing."
            className="mb-10"
          />
          <ProcessSteps steps={INSURANCE_STEPS} columns={4} />
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <SectionHeader
              eyebrow="Fees"
              title="Consultation fee guide"
              subtitle="Exact amounts depend on visit type—our desk quotes before treatment."
              align="left"
              className="mb-6"
            />
            <dl className="space-y-4">
              {FEE_GUIDE.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 border-b border-astha-200 pb-4 last:border-0">
                  <dt className="font-display font-semibold text-astha-900">{row.label}</dt>
                  <dd className="text-sm text-slate-700">{row.note}</dd>
                </div>
              ))}
            </dl>
            <Button href={CLINIC.phoneTel} className="mt-6">
              Call to confirm fees
            </Button>
          </div>

          <div className="rounded-2xl border border-astha-200 bg-astha-100/50 p-6 sm:p-8">
            <h2 className="heading-display text-xl">Insurance FAQ</h2>
            <dl className="mt-6 space-y-6">
              {INSURANCE_FAQ.map(({ q, a }) => (
                <div key={q}>
                  <dt className="font-display font-semibold text-astha-900">{q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-700">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Questions about your policy?"
        description="Have your policy number ready when you call—we will explain coverage and any expected co-pay."
      />
    </>
  )
}
