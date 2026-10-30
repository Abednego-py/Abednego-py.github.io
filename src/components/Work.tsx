import { useState } from 'react'
import { inProgress, shipped, type Kind } from '../data'
import { spot } from '../lib'
import { Reveal } from './Reveal'
import SectionHead from './SectionHead'

type Filter = 'all' | Kind
const filters: Filter[] = ['all', 'software', 'data', 'finance']
const label = (f: Filter) => f[0].toUpperCase() + f.slice(1)

export default function Work() {
  const [filter, setFilter] = useState<Filter>('all')
  const rows = shipped.filter((s) => filter === 'all' || s.kind === filter)
  const showFeatured = filter === 'all' || filter === 'software'

  return (
    <section id="build">
      <SectionHead
        kicker="What I build"
        title={<>Products people <em>pay</em> through</>}
        intro="Web for the banks, Android for the terminal and data underneath it all. Filter the route by kind of work."
      />
      <div className="fl" role="group" aria-label="Filter work">
        {filters.map((f) => (
          <button key={f} type="button" className={f === filter ? 'on' : ''} onClick={() => setFilter(f)}>
            {label(f)}
          </button>
        ))}
      </div>
      <div className={`split${showFeatured ? '' : ' one'}`}>
        {showFeatured && (
          <div className="feat">
            {inProgress.map((p, i) => (
              <Reveal key={p.title} className="card" index={i} onPointerMove={spot}>
                <span className="pill">In progress</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <small>{p.stack}</small>
              </Reveal>
            ))}
          </div>
        )}
        <div className="side">
          <Reveal className="k">Shipped</Reveal>
          {rows.map((r, i) => (
            <Reveal key={`${filter}-${r.title}`} className="sr" index={i}>
              <span className="d">{r.tag}</span>
              <b>{r.title}</b>
              <span>{r.text}</span>
              <i>{r.stack}</i>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
