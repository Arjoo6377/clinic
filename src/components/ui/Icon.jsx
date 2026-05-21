import { icons } from '../../assets/icons'

/** Only homepage icon set: stethoscope | shieldCheck | heartPulse | calendar */
export default function Icon({ name, size = 28, className = '' }) {
  const src = icons[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
      decoding="async"
    />
  )
}
