import { HERO_SLIDE } from '../../data/home'
import { CLINIC } from '../../constants/clinic'
import Button from '../ui/Button'
import { ROUTES } from '../../constants/routes'

export default function HeroSection() {
  const hero = HERO_SLIDE

  return (
    <section className="relative overflow-hidden">
      <article className="relative box-border flex min-h-[min(380px,72vh)] flex-col justify-end sm:min-h-[min(440px,78vh)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={CLINIC.assets.bannerVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-astha-950/55 via-astha-900/25 to-astha-900/15"
          aria-hidden
        />
        <div className="relative z-10 w-full px-4 pb-5 pt-4 sm:px-6 sm:pb-7">
          <div className="card-glass max-w-[min(100%,19rem)] sm:max-w-[22rem]">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-astha-900 sm:text-xs">
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-lg font-bold leading-snug tracking-tight text-astha-950 sm:text-xl">
              {hero.title}
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-slate-800 sm:text-sm">{hero.text}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button to={ROUTES.contact} className="min-h-9 px-3 text-xs sm:min-h-10 sm:px-4 sm:text-sm">
                {hero.cta}
              </Button>
              <Button href={CLINIC.phoneTel} variant="outline" aria-label={`Call ${CLINIC.phone}`}>
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">Call {CLINIC.phone}</span>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
