import { teachAll, teachFeatured } from '../data'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'

export default function Classroom() {
  return (
    <section id="teach">
      <SectionHead
        kicker="Out loud"
        title={<>In the <em>classroom</em></>}
        intro="I like explaining things. I’ve designed curricula, produced video courses and mentored aspiring data professionals."
      />
      <div className="split">
        <div className="list">
          {teachFeatured.map((t, i) => (
            <Reveal key={t.title} className="li" index={i}>
              <span className="n">{t.n}</span>
              <div>
                <span className="d">{t.meta}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="side">
          {teachAll.map((t, i) => (
            <Reveal key={t.name} className="sr" index={i}>
              <span className="d">{t.date}</span>
              <b>{t.name}</b>
              <span>{t.role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
