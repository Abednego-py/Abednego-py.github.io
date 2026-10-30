import { timeline } from '../data'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'

export default function Timeline() {
  return (
    <section id="news">
      <SectionHead kicker="Dispatches" title={<>Software, data and <em>everything between</em></>} />
      <div className="list">
        {timeline.map((t, i) => (
          <Reveal key={t.title} className="li" index={i}>
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <span className="d">{t.meta}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
