import { Link } from 'react-router-dom'
import { nav } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Abednego Ifedibachukwu Aginam</span>
      <nav>
        {nav.map(([label, href]) => (
          <Link key={href} to={href}>{label}</Link>
        ))}
      </nav>
    </footer>
  )
}
