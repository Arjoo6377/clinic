import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

export default function QuickLinksGrid({ links }) {
  return (
    <section className="section-padding border-t border-astha-200 bg-astha-100/50">
      <Container>
        <SectionHeader
          eyebrow="Plan your visit"
          title="Everything you need in one place"
          subtitle="Dedicated pages for services, hours, and insurance—no repeated information."
          className="mb-8"
        />
        <ul className="grid gap-4 sm:grid-cols-3">
          {links.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="card flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-astha-800/30 hover:shadow-lg motion-reduce:transform-none"
              >
                <span className="font-display text-base font-semibold text-astha-900">{item.label}</span>
                <span className="mt-2 flex-1 text-sm text-slate-700">{item.desc}</span>
                <span className="mt-4 text-sm font-bold text-astha-800">Learn more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
