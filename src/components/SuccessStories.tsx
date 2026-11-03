import { stories } from "../data";
import { Reveal } from "./Reveal";
import SectionHead from "./SectionHead";

export default function SuccessStories() {
  return (
    <section id="along">
      <SectionHead
        kicker="What students have said"
        title={<em>Success Stories</em>}
      />
      <div className="stories">
        {stories.map((s, i) => (
          <Reveal key={s.name} className="tile" index={i}>
            <b>{s.name}</b>
            <p>{s.text}</p>
             <p> <i>{s.role} at {s.company}</i></p>
          </Reveal>
        ))} 
      </div>
    </section>
  );
}
