import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import CtaSection from '../components/sections/CtaSection'
import { CONTACT_CHANNELS, DIRECTIONS, FIRST_VISIT_CHECKLIST } from '../data/contact'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title={`Contact | ${CLINIC.name}`}
        description={`Contact Astha Health Care, Badarpur. Phone ${CLINIC.phone}. Book appointments and get directions.`}
      />
      <PageBanner
        title="Contact us"
        subtitle="Call, visit, or email—we respond quickly for appointments and urgent queries."
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {CONTACT_CHANNELS.map((channel) => (
              <article key={channel.title} className="card flex flex-col p-6 text-center sm:p-8">
                <div className="icon-box mx-auto mb-4 h-14 w-14">
                  <Icon name={channel.icon} size={28} />
                </div>
                <h2 className="font-display text-lg font-semibold text-astha-900">{channel.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{channel.text}</p>
                {channel.action === 'phone' && (
                  <Button href={CLINIC.phoneTel} className="mt-5 w-full justify-center">
                    {CLINIC.phone}
                  </Button>
                )}
                {channel.action === 'maps' && (
                  <Button href={CLINIC.mapsUrl} variant="secondary" className="mt-5 w-full justify-center">
                    Directions
                  </Button>
                )}
                {channel.action === 'insurance' && (
                  <Button to={ROUTES.insurance} variant="secondary" className="mt-5 w-full justify-center">
                    Insurance info
                  </Button>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-astha-100">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Location"
              title="Find us in Badarpur"
              subtitle="South Delhi—accessible by auto, cab, and local buses."
              align="left"
              className="mb-6"
            />
            <address className="not-italic text-sm leading-relaxed text-slate-700">
              <strong className="block font-display text-astha-900">{CLINIC.name}</strong>
              {CLINIC.address}
            </address>
            <ul className="mt-6 space-y-3">
              {DIRECTIONS.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-astha-800" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={CLINIC.mapsUrl}>Open in Google Maps</Button>
              <a href={`mailto:${CLINIC.email}`} className="btn-secondary">
                Email us
              </a>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <SectionHeader
              eyebrow="First visit"
              title="What to bring"
              subtitle="Helps us register you faster and avoid repeat questions."
              align="left"
              className="mb-6"
            />
            <ul className="space-y-3">
              {FIRST_VISIT_CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-astha-200 bg-white px-4 py-3 text-sm text-slate-700"
                >
                  <span className="font-bold text-astha-800" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Prefer to speak with someone now?"
        description={
          <>
            Our front desk answers at{' '}
            <a href={CLINIC.phoneTel} className="font-bold text-white underline underline-offset-4">
              {CLINIC.phone}
            </a>{' '}
            during clinic hours.
          </>
        }
      />
    </>
  )
}
