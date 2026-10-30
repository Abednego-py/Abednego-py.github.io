import { links } from '../data'
import { Reveal } from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
      <div className="cta">
        <Reveal className="k">Next stop</Reveal>
        <Reveal as="h2">Collaborating, Need mentoring or  <em>building something that moves money?</em></Reveal>
        <Reveal as="p">Data, Frontend, Android or a bit of everything. Write to me and I’ll reply.</Reveal>
        <a className="btn p" href={`mailto:${links.email}`}>Email me</a>
        <div className="soc">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}
