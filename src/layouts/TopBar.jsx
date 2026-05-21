import { CLINIC } from '../constants/clinic'

export default function TopBar() {
  return (
    <header className="bg-astha-900 text-blue-50">
      <div className="container-app flex flex-wrap items-center justify-between gap-3 py-2 text-xs sm:text-sm">
        <a
          className="max-w-[min(100%,36rem)] leading-snug opacity-95 hover:opacity-100 hover:underline"
          href={CLINIC.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CLINIC.address}
        </a>
        <p className="m-0 font-semibold">
          <span className="mr-1 opacity-85">Emergency / appointments</span>
          <a className="font-bold text-white hover:underline" href={CLINIC.phoneTel}>
            {CLINIC.phone}
          </a>
        </p>
      </div>
    </header>
  )
}
