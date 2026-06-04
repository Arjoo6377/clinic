import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import DoctorCard from './DoctorCard'
import { ROUTES } from '../../constants/routes'
import { CLINIC } from '../../constants/clinic'

export default function AboutPreview() {
  return (
    <section id="about" className="section-padding">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <SectionHeader
            eyebrow="Our practice"
            title="Comprehensive care for everyday health"
            subtitle="Led by Dr. Praveer Kumar — family physician with over 25 years of clinical expertise."
            align="left"
          />
          <p className="mt-6 text-body">
            We treat common infections, fever, cough, digestive issues, and seasonal illnesses—with clear plans you can
            follow at home.
          </p>
          <Link to={ROUTES.about} className="mt-5 inline-flex items-center gap-2 font-bold text-astha-800 hover:underline">
            Read full profile of {CLINIC.doctor.name}
            <span aria-hidden>→</span>
          </Link>
        </div>
        <DoctorCard compact />
      </Container>
    </section>
  )
}
