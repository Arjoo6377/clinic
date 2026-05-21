import { OPENING_HOURS } from '../../data/hours'
import { cn } from '../../utils/cn'

export default function HoursTable({ compact = false, inverted = false }) {
  const thClass = inverted
    ? 'border-astha-700/80 bg-astha-950/60 text-blue-100'
    : 'border-astha-200/90 bg-astha-100/90 text-slate-900'
  const tdClass = inverted
    ? 'border-astha-700/80 bg-astha-900/40 text-white'
    : 'border-astha-200/90 bg-white/80 text-astha-800'

  return (
    <div className={cn('overflow-hidden rounded-lg border', inverted ? 'border-astha-700/80' : 'border-astha-200/90')}>
      <table className={compact ? 'w-full border-collapse text-xs' : 'w-full border-collapse text-xs sm:text-[0.8125rem]'}>
        <tbody className="[&_tr:last-child_th]:border-b-0 [&_tr:last-child_td]:border-b-0">
          {OPENING_HOURS.map(([day, time]) => (
            <tr key={day}>
              <th
                scope="row"
                className={cn(
                  'w-[44%] border-b px-2.5 py-2 text-left font-semibold sm:px-3 sm:py-2.5',
                  thClass,
                )}
              >
                {day}
              </th>
              <td
                className={cn(
                  'border-b px-2.5 py-2 text-right font-bold sm:px-3 sm:py-2.5',
                  tdClass,
                )}
              >
                {time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
