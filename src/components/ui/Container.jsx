import { cn } from '../../utils/cn'

export default function Container({ children, className, narrow = false }) {
  return (
    <div className={cn('container-app', narrow && 'max-w-3xl', className)}>{children}</div>
  )
}
