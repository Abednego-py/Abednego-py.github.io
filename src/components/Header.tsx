import { useEffect, useState } from 'react'
import { nav } from '../data'

type Theme = 'light' | 'dark'

export default function Header() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = () => {
    const current: Theme = theme ?? (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  return (
    <header>
      <div className="wrap">
        <a className="brand" href="#top">Abednego Aginam</a>
        <nav>
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <button id="th" type="button" onClick={toggle} aria-label="Toggle theme">◐ Theme</button>
        </nav>
      </div>
    </header>
  )
}
