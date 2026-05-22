import { Navigate, useParams } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import ServiceDetailContent from '../components/sections/ServiceDetailContent'
import { getServiceDetail } from '../data/serviceDetails'
import { CLINIC } from '../constants/clinic'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const detail = getServiceDetail(slug)

  if (!detail) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <PageMeta
        title={`${detail.title} | ${CLINIC.name}`}
        description={detail.intro}
      />
      <ServiceDetailContent detail={detail} />
    </>
  )
}
