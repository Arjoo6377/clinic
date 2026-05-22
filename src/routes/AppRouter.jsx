import { lazy, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import ScrollToTop from '../components/ScrollToTop'
import { ROUTES } from '../constants/routes'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'))
const InsurancePage = lazy(() => import('../pages/InsurancePage'))
const HoursPage = lazy(() => import('../pages/HoursPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'))
const FaqPage = lazy(() => import('../pages/FaqPage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-pulse rounded-full bg-astha-200" aria-hidden />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

const routes = [
  {
    element: <AppLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: `${ROUTES.services}/:slug`, element: <ServiceDetailPage /> },
      { path: ROUTES.insurance, element: <InsurancePage /> },
      { path: ROUTES.hours, element: <HoursPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.testimonials, element: <TestimonialsPage /> },
      { path: ROUTES.faq, element: <FaqPage /> },
      { path: ROUTES.gallery, element: <GalleryPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

function RoutesTree() {
  const element = useRoutes(routes)
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutesTree />
    </BrowserRouter>
  )
}
