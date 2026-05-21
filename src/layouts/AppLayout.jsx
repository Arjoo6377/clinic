import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <TopBar />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
