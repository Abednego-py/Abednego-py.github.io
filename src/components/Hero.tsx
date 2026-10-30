import { useEffect, useState, type CSSProperties } from 'react'
import portrait from '../assets/portrait.jpg'
import portraitMobile from '../assets/portrait-mobile.jpg'
import { heroNotes, rotating, where } from '../data'
import { prefersReducedMotion } from '../lib'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

export default function Hero() {
  const [i, setI] = useState(0)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleMediaChange = (event: MediaQueryListEvent) => setIsMobile(event.matches)

    setIsMobile(mediaQuery.matches)
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMediaChange)
      return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }

    mediaQuery.addListener(handleMediaChange)
    return () => mediaQuery.removeListener(handleMediaChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => setI((n) => (n + 1) % rotating.length), 2300)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <div className="where">
        {where.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hd">
            <span style={delay(0)}>Hi,</span> <span style={delay(1)}>I’m</span>{' '}
            <span style={delay(2)}><em>Abednego</em></span> <span style={delay(3)}>Aginam</span>
          </h1>
          <p className="lead">
            I build the solutions that solve real problems including{' '}
            <span className="rot"><b key={rotating[i]}>{rotating[i]}</b></span>, from bank dashboards to the POS terminal in a shop.
          </p>
          <p className="sub">
            Frontend and Android engineer with 4+ years in fintech and payments, grounded in data science and analytics. Today I build value added solutions using React and Kotlin at Interswitch.
          </p>
          <a className="btn p" href="#build">See my work</a>
          <a className="btn" href="#contact">Hire me</a>
          <ul className="notes">
            {heroNotes.map((n) => (
              <li key={n.title}><b>{n.title}</b>{n.text}</li>
            ))}
          </ul>
        </div>
        <div className="pic">
          <span className="orb" />
          {/* <span className="badge">✓ Approved</span> */}
          <img
            src={isMobile ? portraitMobile : portrait}
            alt="Portrait of Abednego Aginam in a plaid shirt, smiling"
            width={640}
            height={796}
          />
        </div>
      </div>
    </>
  )
}
