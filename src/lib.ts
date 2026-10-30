import type { PointerEvent } from 'react'

/** Moves the soft glow on a card to follow the pointer. */
export function spot(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const b = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - b.left}px`)
  el.style.setProperty('--my', `${e.clientY - b.top}px`)
}

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches
