import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TREATMENT_SERVICES } from '../../data/serviceDetails'
import { ROUTES } from '../../constants/routes'
import { staggerContainer, viewportOnce } from '../../animations/presets'
import ServiceCard from './ServiceCard'
import Container from '../ui/Container'

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-astha-100 to-white">
      <Container>
        <h2 className="text-center font-display text-2xl font-bold text-astha-900 sm:text-3xl">Our services</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-base leading-relaxed text-slate-700">
          Focused primary care to keep you and your family well.
        </p>
        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
            {TREATMENT_SERVICES.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={{
                  id: service.slug,
                  title: service.title,
                  subtitle: service.subtitle,
                  icon: service.icon,
                }}
                index={index}
              />
            ))}
        </motion.div>
        <p className="mt-6 text-center">
          <Link to={ROUTES.services} className="font-bold text-astha-800 hover:underline">
            View all services
          </Link>
        </p>
      </Container>
    </section>
  )
}
