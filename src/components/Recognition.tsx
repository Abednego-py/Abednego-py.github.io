import { tiles } from '../data'
import CountUp from './CountUp'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'

export default function Recognition() {
  return (
    <section id="along">
      <SectionHead kicker="Along the way" title={<em>Recognition</em>} />
      <div className="tiles">
        {tiles.map((t, i) => (
          <Reveal key={t.title} className="tile" index={i}>
            <span className="d">{t.tag}</span>
            {t.count ? <CountUp {...t.count} /> : <b>{t.title}</b>}
            <span>{t.text}</span>
          </Reveal>
        ))}
      </div>
      {/* <Reveal as="p" className="intro" style={{ marginTop: 24 }}>
        Also: Website Specialist (Pluralsight), Applied Data Science (WorldQuant University) and certifications from Google and AIChE.
      </Reveal> */}
    </section>
  )
}
