import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  cta: 'btn-cta',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  className,
  children,
  ...props
}) {
  const classes = cn(variants[variant], className)

  if (to) {
    const { type: _t, ...linkProps } = props
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
