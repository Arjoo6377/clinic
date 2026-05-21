import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CLINIC } from '../constants/clinic'
import { NAV_ITEMS, ROUTES } from '../constants/routes'
import { useNavigationStore } from '../store'
import { cn } from '../utils/cn'

function navLinkClass({ isActive }) {
  return cn('nav-link', isActive && 'nav-link-active')
}

export default function Navbar() {
  const { mobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useNavigationStore()

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="sticky top-0 z-40 border-b border-astha-200 bg-white shadow-sm">
      <nav className="container-app flex min-h-[4rem] items-center justify-between gap-3 sm:min-h-[4.5rem]" aria-label="Primary">
        <Link to={ROUTES.home} className="inline-flex shrink-0 items-center leading-none" aria-label={`${CLINIC.name} home`}>
          <img
            src={CLINIC.assets.logo}
            alt=""
            className="h-[calc(2.25rem*1.44)] w-auto max-w-[min(360px,60vw)] object-contain object-left sm:h-[calc(2.5rem*1.44)]"
            width={216}
            height={80}
            decoding="async"
          />
          <span className="sr-only">{CLINIC.name}</span>
        </Link>

        <ul className="m-0 hidden list-none flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1 px-2 lg:flex xl:gap-x-6">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <li key={to} className="flex items-center">
              <NavLink to={to} end={end} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link to={ROUTES.contact} className="btn-primary px-3 text-xs sm:px-4 sm:text-sm lg:text-sm">
            <span className="lg:hidden">Book</span>
            <span className="hidden lg:inline">Book appointment</span>
          </Link>
          <button
            type="button"
            className="btn-ghost inline-flex h-11 w-11 items-center justify-center p-0 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
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

      {mobileMenuOpen ? (
        <div className="border-t border-astha-200 bg-white px-4 py-4 lg:hidden">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-3 text-base font-semibold',
                      isActive ? 'bg-astha-100 text-astha-800' : 'text-astha-900 hover:bg-astha-100',
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to={ROUTES.contact}
            onClick={closeMobileMenu}
            className="btn-primary mt-3 flex min-h-12 w-full justify-center"
          >
            Book appointment
          </Link>
        </div>
      ) : null}
    </div>
  )
}
