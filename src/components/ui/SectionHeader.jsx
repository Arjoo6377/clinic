import { cn } from '../../utils/cn'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <header className={cn('max-w-3xl', align === 'center' && 'mx-auto', alignClass, className)}>
      {eyebrow ? (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-astha-800 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-xl font-bold text-astha-900 sm:text-2xl lg:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{subtitle}</p>
      ) : null}
    </header>
  )
}
