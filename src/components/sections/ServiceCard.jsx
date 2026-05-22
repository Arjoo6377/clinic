import { motion } from 'framer-motion'
import { scaleIn } from '../../animations/presets'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'
import { cn } from '../../utils/cn'

export default function ServiceCard({ service, index }) {
  const filled = index % 2 === 1

  return (
    <motion.article variants={scaleIn} className="card-service">
      <div className="icon-box">
        <Icon name={service.icon} />
      </div>
      <h3 className="font-display text-lg font-semibold text-astha-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{service.subtitle}</p>
      <Button
        to={ROUTES.serviceDetail(service.id)}
        variant={filled ? 'primary' : 'secondary'}
        className={cn('mt-4 w-full justify-center', !filled && 'min-h-10')}
      >
        View details
      </Button>
    </motion.article>
  )
}
