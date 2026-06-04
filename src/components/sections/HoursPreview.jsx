import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import HoursTable from '../ui/HoursTable'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'

/** Home: text-only hours teaser — clinic photos live on Gallery page only */
export default function HoursPreview() {
  return (
    <section id="appointment" className="section-padding bg-astha-100">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <SectionHeader
              eyebrow="Visit us"
              title="Comfortable, patient-friendly environment"
              subtitle="Thoughtful care from check-in to follow-up, in a calm and hygienic setting."
              align="left"
            />
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              See photos of our reception and consultation spaces on the{' '}
              <Link to={ROUTES.gallery} className="font-bold text-astha-800 hover:underline">
                gallery page
              </Link>
              . For insurance and fee questions, visit our dedicated insurance section.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to={ROUTES.hours}>Full schedule</Button>
              <Button to={ROUTES.insurance} variant="secondary">
                Insurance & fees
              </Button>
            </div>
          </div>
          <div className="card p-5 sm:p-6">
            <h3 className="font-display text-base font-semibold text-astha-900">OPD timing</h3>
            <div className="mt-4">
              <HoursTable compact />
            </div>
            <p className="mt-4 text-xs leading-snug text-slate-600">
              Morning 9:00–10:30 AM · Evening 5:00–9:00 PM (Mon–Sat). Sunday 5:00–7:00 PM.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
