import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import HoursTable from '../components/ui/HoursTable'
import Button from '../components/ui/Button'
import CtaSection from '../components/sections/CtaSection'
import { HOURS_HIGHLIGHTS, VISIT_TIPS } from '../data/hours'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'

export default function HoursPage() {
  return (
    <>
      <PageMeta
        title={`Opening Hours | ${CLINIC.name}`}
        description="OPD timing at Astha Health Care, Badarpur: morning 9:00–10:30 AM, evening 5:00–9:00 PM. Sunday 5:00–7:00 PM."
      />
      <PageBanner
        title="OPD timing"
        subtitle="Dr. Praveer Kumar — morning and evening consultations, with Sunday evening hours."
      />

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="card p-6 sm:p-8">
            <SectionHeader
              eyebrow="Weekly schedule"
              title="When we are open"
              subtitle="Walk-ins welcome when capacity allows. Call to book morning or evening OPD slots."
              align="left"
              className="mb-6"
            />
            <HoursTable />
            <p className="mt-6 rounded-lg bg-astha-100 px-4 py-3 text-sm font-semibold text-astha-900">
              Emergency line:{' '}
              <a href={CLINIC.phoneTel} className="underline hover:no-underline">
                {CLINIC.phone}
              </a>
            </p>
            <Button to={ROUTES.contact} className="mt-6">
              Book appointment
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {HOURS_HIGHLIGHTS.map((item) => (
              <article key={item.title} className="card flex gap-4 p-5">
                <div className="icon-box m-0 h-11 w-11 shrink-0">
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-astha-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-astha-100">
        <Container narrow>
          <SectionHeader
            eyebrow="Before you arrive"
            title="Tips for a smooth visit"
            subtitle="Small preparations help us serve you faster—especially during peak hours."
            className="mb-8"
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {VISIT_TIPS.map((tip) => (
              <li
                key={tip}
                className="flex gap-3 rounded-xl border border-astha-200 bg-white p-4 text-sm leading-relaxed text-slate-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-astha-800" aria-hidden />
                {tip}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        title="Need an evening or weekend slot?"
        description="Mention morning or evening OPD when you call—we will confirm availability for your preferred day."
      />
    </>
  )
}
