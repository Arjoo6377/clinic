import { useEffect, useState } from 'react'
import asthaLogo from './assets/astha-logo.png'
import { icons } from './assets/icons'

const clinic = {
  name: 'Astha Health Care',
  phone: '92115 95888',
  phoneTel: 'tel:+919211595888',
  address: 'C 25, 40 Feet Rd, Block G, Molar band Extension, Badarpur, New Delhi, Delhi 110044',
}

const MOSAIC_URL =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80'

const slides = [
  {
    eyebrow: 'Family healthcare',
    title: 'Care you can trust—every visit',
    text: 'Primary care for checkups, illness, and follow-ups. Clear plans, same clinic.',
    cta: 'Book',
  },
]

const services = [
  {
    title: 'General consultation',
    subtitle: 'Diagnosis and treatment for common illnesses and symptoms.',
    icon: 'stethoscope',
  },
  {
    title: 'Preventive checkups',
    subtitle: 'Routine screenings, vitals, and wellness monitoring.',
    icon: 'shieldCheck',
  },
  {
    title: 'Chronic disease care',
    subtitle: 'Plans for diabetes, blood pressure, thyroid, and more.',
    icon: 'heartPulse',
  },
  {
    title: 'Request an appointment',
    subtitle: 'Choose a slot that works for you—we will confirm quickly.',
    icon: 'calendar',
  },
]

const hours = [
  ['Monday', '09:00 – 20:00'],
  ['Tuesday', '09:00 – 21:00'],
  ['Wednesday', '09:00 – 20:00'],
  ['Thursday', '24-hour shift'],
  ['Friday', '09:00 – 21:00'],
  ['Saturday', '09:00 – 18:00'],
  ['Sunday', '11:00 – 19:00'],
]

const stats = [
  ['12+', 'Years experience'],
  ['10k+', 'Patients served'],
  ['24/7', 'Emergency line'],
  ['4.9', 'Average rating'],
]

const navItems = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#appointment', label: 'Hours' },
  { href: '#insurance', label: 'Insurance' },
]

function App() {
  const hero = slides[0]
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <header className="bg-astha-900 text-blue-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <a
            className="max-w-[min(100%,36rem)] leading-snug opacity-95 hover:opacity-100 hover:underline"
            href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {clinic.address}
          </a>
          <p className="m-0 font-semibold">
            <span className="mr-1 opacity-85">Emergency / appointments</span>
            <a className="font-bold text-white hover:underline" href={clinic.phoneTel}>
              {clinic.phone}
            </a>
          </p>
        </div>
      </header>

      <div className="sticky top-0 z-40 border-b border-astha-200 bg-white shadow-sm">
        <nav
          className="mx-auto flex min-h-[4rem] max-w-6xl items-center justify-between gap-3 px-4 sm:min-h-[4.5rem] sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <a href="#top" className="inline-flex shrink-0 items-center leading-none" aria-label={`${clinic.name} home`}>
            <img
              src={asthaLogo}
              alt=""
              className="h-[calc(2.25rem*1.44)] w-auto max-w-[min(360px,60vw)] object-contain object-left sm:h-[calc(2.5rem*1.44)]"
              width={216}
              height={80}
              decoding="async"
            />
            <span className="sr-only">{clinic.name}</span>
          </a>

          <ul className="m-0 hidden list-none flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1 px-2 lg:flex xl:gap-x-6">
            {navItems.map(({ href, label }) => (
              <li key={href} className="flex items-center">
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center border-b-2 border-transparent px-0.5 text-sm font-semibold text-astha-900 transition-colors hover:border-astha-800/35 hover:text-astha-800"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#appointment"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-astha-800 bg-astha-800 px-3 text-xs font-bold text-white shadow-sm transition hover:border-astha-900 hover:bg-astha-900 sm:px-4 sm:text-sm lg:text-sm"
            >
              <span className="lg:hidden">Book</span>
              <span className="hidden lg:inline">Book appointment</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-astha-200 bg-astha-100 text-astha-900 lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <span className="text-lg leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1.5" aria-hidden>
                  <span className="block h-0.5 w-5 rounded-full bg-astha-900" />
                  <span className="block h-0.5 w-5 rounded-full bg-astha-900" />
                  <span className="block h-0.5 w-5 rounded-full bg-astha-900" />
                </span>
              )}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-astha-200 bg-white px-4 py-4 lg:hidden">
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-astha-900 hover:bg-astha-100"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#appointment"
              onClick={closeMenu}
              className="mt-3 flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-astha-800 bg-astha-800 font-bold text-white hover:bg-astha-900"
            >
              Book appointment
            </a>
          </div>
        ) : null}
      </div>

      <main id="top">
        {/* Hero — card bottom-left on video, glass so video stays visible */}
        <section className="relative overflow-hidden">
          <article className="relative box-border flex min-h-[min(380px,72vh)] flex-col justify-end sm:min-h-[min(440px,78vh)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            
            >
              <source src="/banner.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 bg-gradient-to-t from-astha-950/55 via-astha-900/25 to-astha-900/15"
              aria-hidden
            />
            <div className="relative z-10 w-full px-4 pb-5 pt-4 sm:px-6 sm:pb-7">
              <div className="max-w-[min(100%,19rem)] rounded-xl border border-white/50 bg-white/60 p-4 shadow-lg backdrop-blur-md sm:max-w-[22rem] sm:p-4">
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-astha-900 sm:text-xs">{hero.eyebrow}</p>
                <h1 className="font-display text-lg font-bold leading-snug tracking-tight text-astha-950 sm:text-xl">
                  {hero.title}
                </h1>
                <p className="mt-2 text-xs leading-relaxed text-slate-800 sm:text-sm">{hero.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="#appointment"
                    className="inline-flex min-h-9 items-center justify-center rounded-lg border border-astha-800 bg-astha-800 px-3 text-xs font-bold text-white shadow-sm transition hover:bg-astha-900 sm:min-h-10 sm:px-4 sm:text-sm"
                  >
                    {hero.cta}
                  </a>
                  <a
                    href={clinic.phoneTel}
                    className="inline-flex min-h-9 items-center justify-center rounded-lg border border-astha-800 bg-white/90 px-3 text-xs font-bold text-astha-900 backdrop-blur-sm transition hover:bg-white sm:min-h-10 sm:px-4 sm:text-sm"
                    aria-label={`Call ${clinic.phone}`}
                  >
                    <span className="sm:hidden">Call</span>
                    <span className="hidden sm:inline">Call {clinic.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Stats */}
        <section className="relative z-10 px-4 pb-8 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <article
                key={label}
                className="rounded-2xl border border-astha-200 bg-white p-5 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
              >
                <h3 className="m-0 font-display text-2xl font-bold text-astha-800 sm:text-3xl">{value}</h3>
                <p className="mt-2 text-sm font-semibold leading-snug text-slate-700">{label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-gradient-to-b from-astha-100 to-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-2xl font-bold text-astha-900 sm:text-3xl">Our services</h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-base leading-relaxed text-slate-700">
              Focused primary care to keep you and your family well.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-astha-200 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:border-astha-800/25 hover:shadow-lg motion-reduce:transform-none"
                >
                  <div className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-astha-100">
                    <img src={icons[service.icon]} alt="" width={28} height={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-astha-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{service.subtitle}</p>
                  <a
                    href="#appointment"
                    className={
                      index % 2
                        ? 'mt-4 inline-flex justify-center rounded-lg border-2 border-astha-800 bg-astha-800 px-4 py-2 text-sm font-bold text-white hover:bg-astha-900'
                        : 'mt-4 inline-flex justify-center rounded-lg border-2 border-astha-800 bg-transparent px-4 py-2 text-sm font-bold text-astha-800 hover:bg-astha-100'
                    }
                  >
                    Schedule
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[2fr_1fr] lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <h2 className="font-display text-xl font-bold text-astha-900 sm:text-2xl">Comprehensive care for everyday health</h2>
            <p className="mt-2 text-slate-700">A modern general physician practice focused on prevention, early diagnosis, and long-term wellness.</p>
            <p className="mt-4 leading-relaxed text-slate-700">
              We treat common infections, fever, cough, digestive issues, body pain, and seasonal illnesses while guiding
              patients with clear treatment plans and practical lifestyle advice.
            </p>
            <h2 className="mt-8 font-display text-xl font-bold text-astha-900 sm:text-2xl">Modern medical facilities</h2>
            <p className="mt-2 leading-relaxed text-slate-700">
              Our clinic offers evidence-based care with digital health records, preventive screening, and referral support for
              specialist treatment whenever needed.
            </p>
            <a href="#services" className="mt-4 inline-block font-bold text-astha-800 hover:underline">
              View all services
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-astha-200 bg-white shadow-md">
            <div
              className="h-60 bg-cover bg-center sm:h-64"
              style={{ backgroundImage: "url('/logo.jpeg')" }}
              role="img"
              aria-label="Dr. Praveer Kumar"
            />
            <div className="p-5 text-center sm:p-6">
              <h3 className="font-display text-lg font-semibold text-astha-900">Dr. Praveer Kumar</h3>
              <p className="mt-1 text-sm text-slate-700">General physician</p>
              <a
                href="#appointment"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-astha-800 bg-astha-800 px-4 text-sm font-bold text-white hover:bg-astha-900"
              >
                Book visit
              </a>
            </div>
          </div>
        </section>

        {/* Schedule — working hours on static clinic image (no video here) */}
        <section id="appointment" className="bg-astha-100 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl space-y-4">
            <h2 className="font-display text-xl font-bold text-astha-900 sm:text-2xl">Comfortable, patient-friendly environment</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Thoughtful care from check-in to follow-up, in a calm and hygienic setting.
            </p>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-astha-200 shadow-lg sm:min-h-[340px] lg:min-h-[380px]">
              <img
                src={MOSAIC_URL}
                alt="Clinic reception and waiting area"
                className="absolute inset-0 h-full w-full object-cover"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-astha-950/45 via-astha-900/12 to-transparent" aria-hidden />
              <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-4 sm:min-h-[340px] sm:p-5 lg:min-h-[380px] lg:p-6">
                <div className="max-w-[min(100%,20rem)] rounded-xl border border-white/45 bg-white/65 p-4 shadow-xl backdrop-blur-md sm:max-w-[22rem] sm:p-4">
                  <h3 className="m-0 font-display text-base font-semibold text-astha-900">Working hours</h3>
                  <div className="mt-3 overflow-hidden rounded-lg border border-astha-200/90">
                    <table className="w-full border-collapse text-xs sm:text-[0.8125rem]">
                      <tbody className="[&_tr:last-child_th]:border-b-0 [&_tr:last-child_td]:border-b-0">
                        {hours.map(([day, time]) => (
                          <tr key={day}>
                            <th
                              scope="row"
                              className="w-[44%] border-b border-astha-200/90 bg-astha-100/90 px-2.5 py-2 text-left font-semibold text-slate-900 sm:px-3 sm:py-2.5"
                            >
                              {day}
                            </th>
                            <td className="border-b border-astha-200/90 bg-white/80 px-2.5 py-2 text-right font-bold text-astha-800 sm:px-3 sm:py-2.5">
                              {time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h3 id="insurance" className="mb-1 mt-4 font-display text-sm font-semibold text-astha-900 sm:text-base">
                    Fees &amp; insurance
                  </h3>
                  <p className="m-0 text-xs leading-snug text-slate-800 sm:text-sm">
                    Major insurers supported. Clear fees—ask at the desk.
                  </p>
                  <a
                    href={clinic.phoneTel}
                    className="mt-3 flex min-h-10 w-full items-center justify-center rounded-lg border border-astha-800 bg-astha-800 text-xs font-bold text-white hover:bg-astha-900 sm:text-sm"
                  >
                    Call to confirm fees
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — button text must stay dark on white (avoid .cta a inheritance) */}
        <section id="cta" className="bg-gradient-to-br from-astha-900 to-astha-800 px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              Need a trusted doctor for your next checkup?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              Call{' '}
              <a
                href={clinic.phoneTel}
                className="font-bold text-white underline decoration-2 underline-offset-4 hover:text-white"
              >
                {clinic.phone}
              </a>{' '}
              or book your consultation today.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/95 sm:text-base">{clinic.address}</p>
            <a
              href="#appointment"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white bg-white px-8 text-base font-bold text-astha-900 shadow-lg transition hover:bg-astha-100 hover:text-astha-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request an appointment
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-astha-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6">
          <img
            src={asthaLogo}
            alt="Astha Health Care"
            className="h-12 w-auto max-w-[min(280px,85vw)] object-contain sm:h-14"
            width={180}
            height={62}
            decoding="async"
          />
          <p className="m-0 text-center text-sm font-semibold leading-relaxed text-red-600 sm:text-right sm:text-base">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
