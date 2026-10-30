import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/** Returns a ref and whether the element has scrolled into view (once). */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen] as const
}

type Props = {
  as?: string
  className?: string
  index?: number
  children?: ReactNode
  [key: string]: unknown
}

/** Fades an element up when it enters the viewport. */
export function Reveal({ as = 'div', className = '', index = 0, children, ...rest }: Props) {
  const [ref, seen] = useInView<HTMLElement>()
  const style = { '--d': Math.min(index, 6) } as CSSProperties
  const cls = `rv ${seen ? 'in' : ''} ${className}`.replace(/\s+/g, ' ').trim()
  return createElement(as, { ref, className: cls, style, ...rest } as Record<string, unknown>, children)
}
