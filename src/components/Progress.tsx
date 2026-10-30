import { useEffect, useRef } from 'react'

/** Thin reading-progress bar pinned to the top of the page. */
export default function Progress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})`
    }
    update()
    addEventListener('scroll', update, { passive: true })
    addEventListener('resize', update)
    return () => {
      removeEventListener('scroll', update)
      removeEventListener('resize', update)
    }
  }, [])
  return <div id="pg" ref={ref} />
}
