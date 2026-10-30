import { tools } from '../data'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'

export default function Toolbox() {
  return (
    <section id="tools">
      <SectionHead kicker="Toolbox" title={<>What’s in the <em>bag</em></>} />
      <div className="tg">
        {tools.map((g, i) => (
          <Reveal key={g.title} className="grp" index={i}>
            <h3 className="s">{g.title}</h3>
            <div className="chips">
              {g.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
