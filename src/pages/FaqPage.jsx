import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import CtaSection from '../components/sections/CtaSection'
import { FAQ_CATEGORIES } from '../data/faq'
import { CLINIC } from '../constants/clinic'
import { ROUTES } from '../constants/routes'

export default function FaqPage() {
  const [openKey, setOpenKey] = useState('0-0')

  return (
    <>
      <PageMeta
        title={`FAQ | ${CLINIC.name}`}
        description="Frequently asked questions about appointments, insurance, chronic care, and visits at Astha Health Care."
      />
      <PageBanner
        title="Frequently asked questions"
        subtitle="Organised answers before your visit—grouped by topic for quick reading."
      />

      <section className="section-padding">
        <Container narrow>
          <div className="space-y-10">
            {FAQ_CATEGORIES.map((category, catIndex) => (
              <div key={category.name}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="icon-box m-0 h-11 w-11">
                    <Icon name={category.icon} size={22} />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-astha-900">{category.name}</h2>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const key = `${catIndex}-${itemIndex}`
                    const open = openKey === key
                    return (
                      <li key={item.q} className="card overflow-hidden">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                          onClick={() => setOpenKey(open ? '' : key)}
                          aria-expanded={open}
                        >
                          <span className="font-display font-semibold text-astha-900">{item.q}</span>
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
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-astha-200 bg-astha-100/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-slate-700">
              Need insurance or fee details? Visit our dedicated pages for full information.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to={ROUTES.insurance} variant="secondary">
                Insurance
              </Button>
              <Button href={CLINIC.phoneTel}>Call clinic</Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection title="Still have questions?" description="Our desk team can clarify appointment, insurance, or preparation queries in one short call." />
    </>
  )
}
