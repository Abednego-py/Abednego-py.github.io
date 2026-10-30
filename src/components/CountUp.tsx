import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib'
import { useInView } from './Reveal'

type Props = { to: number; decimals?: number; suffix?: string }

/** Counts from 0 to a number when it scrolls into view. */
export default function CountUp({ to, decimals = 0, suffix = '' }: Props) {
  const [ref, seen] = useInView<HTMLElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!seen) return
    if (prefersReducedMotion()) {
      setValue(to)
      return
    }
    let raf = 0
    let start = 0
    const step = (t: number) => {
      start = start || t
      const p = Math.min((t - start) / 1400, 1)
      setValue(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])

  return (
    <b ref={ref}>
      {(seen ? value : to).toFixed(decimals)}
      {suffix}
    </b>
  )
}
