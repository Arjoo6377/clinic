import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../animations/presets'
import { CLINIC } from '../../constants/clinic'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'

export default function CtaSection({
  title = 'Need a trusted doctor for your next checkup?',
  description,
  showAddress = true,
}) {
  return (
    <motion.section
      id="cta"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="section-padding-lg bg-gradient-to-br from-astha-900 to-astha-800 text-center"
    >
      <div className="mx-auto max-w-3xl px-0">
        <h2 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
          {description ?? (
            <>
              Call{' '}
              <a
                href={CLINIC.phoneTel}
                className="font-bold text-white underline decoration-2 underline-offset-4 hover:text-white"
              >
                {CLINIC.phone}
              </a>{' '}
              or book your consultation today.
            </>
          )}
        </p>
        {showAddress ? (
          <p className="mt-3 text-sm leading-relaxed text-blue-100/95 sm:text-base">{CLINIC.address}</p>
        ) : null}
        <Button to={ROUTES.contact} variant="cta" className="mt-8">
          Request an appointment
        </Button>
      </div>
    </motion.section>
  )
}
