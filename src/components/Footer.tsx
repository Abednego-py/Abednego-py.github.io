import { nav } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Abednego Ifedibachukwu Aginam</span>
      <nav>
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </footer>
  )
}
