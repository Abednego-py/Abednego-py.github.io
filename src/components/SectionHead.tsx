import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { kicker: string; title: ReactNode; intro?: string }

export default function SectionHead({ kicker, title, intro }: Props) {
  return (
    <>
      <Reveal className="k">{kicker}</Reveal>
      <Reveal as="h2">{title}</Reveal>
      {intro && <Reveal as="p" className="intro">{intro}</Reveal>}
    </>
  )
}
