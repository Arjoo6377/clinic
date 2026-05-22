import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import CtaSection from './CtaSection'
import { CLINIC } from '../../constants/clinic'
import { ROUTES } from '../../constants/routes'
import { fadeInUp, viewportOnce } from '../../animations/presets'

function ContentSection({ id, title, children, className = 'section-padding' }) {
  return (
    <section id={id} className={className}>
      <Container narrow>
        <h2 className="heading-display text-xl sm:text-2xl">{title}</h2>
        <div className="mt-5 space-y-4 text-body">{children}</div>
      </Container>
    </section>
  )
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-astha-800" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <ul className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <li key={item.q} className="card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
            >
              <span className="font-display text-sm font-semibold text-astha-900 sm:text-base">{item.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-astha-100 text-lg font-bold text-astha-800">
                {open ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-astha-200 px-4 pb-4 text-sm leading-relaxed text-slate-700 sm:px-5 sm:pb-5">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

export default function ServiceDetailContent({ detail }) {
  const { title, shortTitle, icon, sections, cta } = detail
  const s = sections

  return (
    <>
      <section className="border-b border-astha-200 bg-astha-100/60 px-4 py-3 sm:px-6">
        <Container className="flex flex-wrap items-center gap-2 text-sm">
          <Link to={ROUTES.services} className="font-semibold text-astha-800 hover:underline">
            Services
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <span className="text-slate-700">{title}</span>
        </Container>
      </section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-br from-astha-900 to-astha-800 px-4 py-12 text-center sm:px-6 sm:py-14"
      >
        <Container narrow>
          <div className="icon-box mx-auto mb-4 h-14 w-14 bg-white/20">
            <Icon name={icon} size={28} />
          </div>
          <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-blue-100">{detail.intro}</p>
          <Button to={ROUTES.contact} className="mt-6 border-white bg-white text-astha-900 hover:bg-astha-100">
            Book consultation
          </Button>
        </Container>
      </motion.section>

      <nav
        className="sticky top-[calc(4rem+1px)] z-30 border-b border-astha-200 bg-white/95 backdrop-blur-sm lg:top-[4.5rem]"
        aria-label="On this page"
      >
        <Container className="flex gap-1 overflow-x-auto py-2 text-xs font-semibold sm:text-sm">
          {[
            ['overview', 'Overview'],
            ['symptoms', 'Symptoms'],
            ['causes', 'Causes'],
            ['types', 'Types'],
            ['diagnosis', 'Diagnosis'],
            ['treatment', 'Treatment'],
            ['we-provide', 'We provide'],
            ['visit', 'When to visit'],
            ['prevention', 'Prevention'],
            ['faq', 'FAQs'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-lg px-3 py-2 text-astha-800 transition hover:bg-astha-100"
            >
              {label}
            </a>
          ))}
        </Container>
      </nav>

      <ContentSection id="overview" title={s.whatIs.title} className="section-padding">
        <p>{s.whatIs.content}</p>
        {s.whatIs.note ? <p className="text-sm text-slate-600">{s.whatIs.note}</p> : null}
      </ContentSection>

      <ContentSection id="symptoms" title={s.symptoms.title} className="section-padding bg-astha-100/50">
        <p>{s.symptoms.intro}</p>
        <BulletList items={s.symptoms.items} />
      </ContentSection>

      <ContentSection id="causes" title={s.causes.title} className="section-padding">
        <p>{s.causes.intro}</p>
        <BulletList items={s.causes.items} />
      </ContentSection>

      <ContentSection id="types" title={s.types.title} className="section-padding bg-astha-100/50">
        <div className="grid gap-4 sm:grid-cols-2">
          {s.types.items.map((item) => (
            <article key={item.name} className="card p-5">
              <h3 className="font-display font-semibold text-astha-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="diagnosis" title={s.diagnosis.title} className="section-padding">
        <p>{s.diagnosis.intro}</p>
        <BulletList items={s.diagnosis.items} />
      </ContentSection>

      <ContentSection id="treatment" title={s.treatment.title} className="section-padding bg-gradient-to-b from-astha-100 to-white">
        <p>{s.treatment.intro}</p>
        <BulletList items={s.treatment.items} />
      </ContentSection>

      <section id="we-provide" className="section-padding">
        <Container>
          <SectionHeader title={s.weProvide.title} subtitle={s.weProvide.intro} align="left" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2">
            {s.weProvide.items.map((item) => (
              <article key={item.title} className="card flex gap-4 p-5">
                <div className="icon-box m-0 h-11 w-11 shrink-0">
                  <Icon name={item.icon || icon} size={22} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-astha-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContentSection id="visit" title={s.whenToVisit.title} className="section-padding bg-astha-100">
        <BulletList items={s.whenToVisit.items} />
        <p className="mt-4 rounded-lg border border-astha-200 bg-white p-4 text-sm font-semibold text-astha-900">
          Emergency / appointments:{' '}
          <a href={CLINIC.phoneTel} className="underline hover:no-underline">
            {CLINIC.phone}
          </a>
        </p>
      </ContentSection>

      <ContentSection id="prevention" title={s.prevention.title} className="section-padding">
        <BulletList items={s.prevention.items} />
      </ContentSection>

      <section id="why-us" className="section-padding bg-astha-100/50">
        <Container narrow>
          <SectionHeader title={s.whyChooseUs.title} className="mb-6" />
          <ul className="space-y-4">
            {s.whyChooseUs.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-astha-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
                <span className="font-bold text-astha-800" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="faq" className="section-padding">
        <Container narrow>
          <h2 className="heading-display text-xl sm:text-2xl">FAQs</h2>
          <p className="mt-2 text-body">Common questions about {shortTitle.toLowerCase()} care at {CLINIC.name}.</p>
          <div className="mt-6">
            <FaqAccordion items={s.faq} />
          </div>
        </Container>
      </section>

      <CtaSection title={cta.title} description={cta.description} />
    </>
  )
}
