import PageMeta from '../components/ui/PageMeta'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import WhyUsGrid from '../components/sections/WhyUsGrid'
import ServicesPreview from '../components/sections/ServicesPreview'
import AboutPreview from '../components/sections/AboutPreview'
import HoursPreview from '../components/sections/HoursPreview'
import QuickLinksGrid from '../components/sections/QuickLinksGrid'
import CtaSection from '../components/sections/CtaSection'
import { CLINIC } from '../constants/clinic'
import { HOME_WHY_US, HOME_QUICK_LINKS } from '../data/home'

export default function HomePage() {
  return (
    <main id="top">
      <PageMeta
        title={`${CLINIC.name} | General Physician Badarpur, New Delhi`}
        description={`${CLINIC.name} — general physician and family healthcare in Badarpur. Book: ${CLINIC.phone}.`}
      />
      <HeroSection />
      <StatsSection />
      <WhyUsGrid
        items={HOME_WHY_US}
        title="Healthcare that fits your routine"
        subtitle="Neighborhood primary care with extended hours, insurance support, and one physician who knows your history."
      />
      <ServicesPreview />
      <AboutPreview />
      <HoursPreview />
      <QuickLinksGrid links={HOME_QUICK_LINKS} />
      <CtaSection
        title="Need a trusted doctor for your next checkup?"
        description={
          <>
            Speak with our desk at{' '}
            <a href={CLINIC.phoneTel} className="font-bold text-white underline underline-offset-4">
              {CLINIC.phone}
            </a>{' '}
            — we will find a slot that works for you.
          </>
        }
      />
    </main>
  )
}
