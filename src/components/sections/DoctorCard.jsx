import { motion } from 'framer-motion'
import { scaleIn } from '../../animations/presets'
import { CLINIC, PAGE_IMAGES } from '../../constants/clinic'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'

export default function DoctorCard() {
  const { doctor } = CLINIC

  return (
    <motion.div variants={scaleIn} className="card overflow-hidden">
      <img
        src={PAGE_IMAGES.about}
        alt={doctor.name}
        className="h-60 w-full object-cover object-center sm:h-72"
        width={400}
        height={320}
        loading="lazy"
        decoding="async"
      />
      <div className="p-6 text-center sm:p-8">
        <h3 className="font-display text-xl font-semibold text-astha-900">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-astha-800">{doctor.role}</p>
        <p className="mt-2 text-sm text-slate-600">{doctor.experience}</p>
        <Button to={ROUTES.contact} className="mt-5">
          Book visit
        </Button>
      </div>
    </motion.div>
  )
}
