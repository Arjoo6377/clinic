import { Link } from 'react-router-dom'
import { CLINIC } from '../constants/clinic'
import { FOOTER_COLUMNS } from '../constants/footer'
import { ROUTES } from '../constants/routes'
import HoursTable from '../components/ui/HoursTable'
import Button from '../components/ui/Button'

export default function SiteFooter() {
  return (
    <footer className="border-t border-astha-800 bg-astha-900 text-blue-50">
      {/* Main grid */}
      <div className="container-app grid gap-10 py-12 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Brand — spans 4 cols */}
        <div className="flex flex-col lg:col-span-4">
          <Link to={ROUTES.home} className="inline-flex w-fit items-center">
            <img
              src={CLINIC.assets.logo}
              alt={CLINIC.name}
              className="h-14 w-auto max-w-[240px] object-contain brightness-0 invert"
              width={200}
              height={72}
              decoding="async"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/90">{CLINIC.tagline}</p>
          <p className="mt-3 text-xs leading-relaxed text-blue-100/75">
            General physician care for families in Badarpur and South Delhi—with clear advice, consistent follow-ups,
            and a calm clinic environment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={CLINIC.phoneTel} className="min-h-10 border-white bg-white text-astha-900 hover:bg-astha-100">
              Call {CLINIC.phone}
            </Button>
            <Link
              to={ROUTES.contact}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border-2 border-blue-100/50 px-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Link columns — 6 cols */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-blue-100/90 transition hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Hours card — 3 cols */}
        <div className="lg:col-span-3">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            Today&apos;s access
          </h3>
          <div className="overflow-hidden rounded-xl border border-astha-700/80 bg-astha-950/40 p-3">
            <HoursTable compact inverted />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-blue-100/75">
            OPD: Morning 9:00–10:30 AM, Evening 5:00–9:00 PM (Mon–Sat). Sunday 5:00–7:00 PM.
          </p>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-semibold text-white underline decoration-astha-200/80 underline-offset-2 hover:decoration-white"
          >
            Get directions
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-astha-800/80 bg-astha-950/50">
        <div className="container-app flex flex-col items-center justify-between gap-4 py-5 sm:flex-row sm:gap-6">
          <p className="m-0 text-center text-xs text-blue-100/80 sm:text-left sm:text-sm">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p className="m-0 max-w-xl text-center text-xs leading-relaxed text-blue-100/70 sm:text-right">
            {CLINIC.address}
          </p>
        </div>
      </div>
    </footer>
  )
}
