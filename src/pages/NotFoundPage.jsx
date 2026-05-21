import PageBanner from '../components/ui/PageBanner'
import PageMeta from '../components/ui/PageMeta'
import Button from '../components/ui/Button'
import { ROUTES } from '../constants/routes'
import { CLINIC } from '../constants/clinic'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title={`Page not found | ${CLINIC.name}`} description="The page you requested could not be found." />
      <PageBanner title="Page not found" subtitle="The page you are looking for does not exist." />
      <div className="section-padding text-center">
        <Button to={ROUTES.home}>Back to home</Button>
      </div>
    </>
  )
}
