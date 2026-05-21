import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

/**
 * Ready for auth — set isAuthenticated via your auth service/store.
 * @param {{ isAuthenticated?: boolean, redirectTo?: string }} props
 */
export default function ProtectedRoute({
  isAuthenticated = true,
  redirectTo = ROUTES.home,
}) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }
  return <Outlet />
}
