import { motion } from 'framer-motion'
import { scaleIn } from '../../animations/presets'
import { CLINIC } from '../../constants/clinic'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'
import { cn } from '../../utils/cn'

export default function DoctorCard({ compact = false }) {
  const { doctor } = CLINIC

  return (
    <motion.div variants={scaleIn} className="card overflow-hidden">
      <div
        className={cn(
          'flex w-full items-center justify-center bg-gradient-to-b from-astha-100 to-white',
          compact ? 'min-h-[280px] px-3 py-4 sm:min-h-[300px]' : 'min-h-[320px] px-4 py-5 sm:min-h-[360px]',
        )}
      >
        <img
          src={doctor.image}
          alt={doctor.name}
          className={cn(
            'w-full object-contain object-center',
            compact ? 'max-h-[260px] sm:max-h-[280px]' : 'max-h-[300px] sm:max-h-[340px]',
          )}
          width={400}
          height={500}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={compact ? 'p-5 text-center sm:p-6' : 'p-6 text-center sm:p-8'}>
        <h3 className="font-display text-xl font-semibold text-astha-900">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-astha-800">{doctor.degrees}</p>
        <p className="mt-1 text-sm text-slate-700">{doctor.role}</p>
        <p className="mt-2 text-sm text-slate-600">{doctor.experience}</p>
        {!compact ? (
          <p className="mt-2 text-xs leading-relaxed text-slate-600">{doctor.specialFocus}</p>
        ) : null}
        <Button to={ROUTES.contact} className="mt-4">
          Book visit
        </Button>
      </div>
    </motion.div>
  )
}
