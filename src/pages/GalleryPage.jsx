import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Icon from '../components/ui/Icon'
import CtaSection from '../components/sections/CtaSection'
import { GALLERY_ITEMS, GALLERY_FEATURES } from '../data/gallery'
import { CLINIC } from '../constants/clinic'
import { staggerContainer, scaleIn, viewportOnce } from '../animations/presets'

export default function GalleryPage() {
  return (
    <>
      <PageMeta
        title={`Gallery | ${CLINIC.name}`}
        description="Photos of Astha Health Care clinic, consultation spaces, and our team in Badarpur."
      />
      <PageBanner
        title="Clinic gallery"
        subtitle="See our reception, exterior, and care environment—the only pages with clinic photography."
      />

      <section className="section-padding">
        <Container>
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {GALLERY_ITEMS.map((item, i) => (
              <motion.figure
                key={item.caption}
                variants={scaleIn}
                className={i === 0 ? 'card overflow-hidden md:col-span-2 md:row-span-2' : 'card overflow-hidden'}
              >
                <div
                  className={
                    item.portrait
                      ? 'flex min-h-[280px] items-center justify-center bg-astha-100 p-4 md:min-h-[360px]'
                      : 'aspect-[4/3] w-full overflow-hidden'
                  }
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={
                      item.portrait
                        ? 'max-h-[min(340px,50vh)] w-full object-contain object-center'
                        : 'h-full w-full object-cover'
                    }
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-display font-semibold text-astha-900">{item.caption}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.description}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-padding bg-astha-100">
        <Container>
          <SectionHeader
            eyebrow="Facilities"
            title="Designed for comfort"
            subtitle="Every space is maintained for hygiene, privacy, and calm waiting."
            className="mb-8"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_FEATURES.map((f) => (
              <li key={f.title} className="card flex items-center gap-4 p-5">
                <div className="icon-box m-0 h-11 w-11 shrink-0">
                  <Icon name={f.icon} size={22} />
                </div>
                <span className="text-sm font-semibold text-astha-900">{f.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection
        title="Like what you see?"
        description="Book a visit to experience our clinic in person—call for a convenient slot."
      />
    </>
  )
}
