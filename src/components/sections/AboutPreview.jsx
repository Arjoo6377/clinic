import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { ROUTES } from '../../constants/routes'
import { CLINIC } from '../../constants/clinic'

/** Home: no doctor photo — portrait appears only on About page */
export default function AboutPreview() {
  return (
    <section id="about" className="section-padding">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <SectionHeader
            eyebrow="Our practice"
            title="Comprehensive care for everyday health"
            subtitle="A modern general physician practice focused on prevention, early diagnosis, and long-term wellness."
            align="left"
          />
          <p className="mt-6 text-body">
            We treat common infections, fever, cough, digestive issues, and seasonal illnesses—with clear plans you can
            follow at home.
          </p>
          <Link to={ROUTES.about} className="mt-5 inline-flex items-center gap-2 font-bold text-astha-800 hover:underline">
            Meet {CLINIC.doctor.name}
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="card flex flex-col items-center p-8 text-center sm:p-10">
          <div className="icon-box mb-4 h-16 w-16">
            <Icon name="stethoscope" size={32} />
          </div>
          <h3 className="font-display text-lg font-semibold text-astha-900">{CLINIC.doctor.name}</h3>
          <p className="mt-1 text-sm text-slate-700">{CLINIC.doctor.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{CLINIC.doctor.experience}</p>
          <Link to={ROUTES.about} className="btn-secondary mt-6">
            Read full profile
          </Link>
        </div>
      </Container>
    </section>
  )
}
