import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import DoctorCard from './DoctorCard'
import { DOCTOR_PROFILE } from '../../data/about'
import { fadeInUp, viewportOnce } from '../../animations/presets'

export default function DoctorProfileSection() {
  const profile = DOCTOR_PROFILE

  return (
    <section id="doctor-profile" className="section-padding bg-gradient-to-b from-white to-astha-100/50">
      <Container>
        <SectionHeader
          eyebrow="Lead physician"
          title={`About ${profile.name}`}
          subtitle={`${profile.degrees} · ${profile.experienceYears} years of clinical expertise`}
          className="mb-10"
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(280px,340px)] lg:items-start lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="min-w-0 space-y-5"
          >
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-body">
                {paragraph}
              </p>
            ))}
            <p className="rounded-xl border border-astha-200 bg-astha-100/60 p-4 text-sm font-medium leading-relaxed text-slate-800 sm:p-5">
              {profile.closing}
            </p>

            <dl className="grid gap-4 rounded-2xl border border-astha-200 bg-white p-5 shadow-sm sm:grid-cols-3 sm:p-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-astha-800">Experience</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-astha-900">
                  {profile.experienceYears} Years
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-bold uppercase tracking-wider text-astha-800">Qualifications</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-800">{profile.degrees}</dd>
              </div>
              <div className="sm:col-span-3">
                <dt className="text-xs font-bold uppercase tracking-wider text-astha-800">Special focus</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {profile.specialFocus.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-astha-100 px-3 py-1.5 text-xs font-semibold text-astha-900"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </motion.div>

          <div className="lg:sticky lg:top-24">
            <DoctorCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
