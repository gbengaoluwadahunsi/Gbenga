import { ROLES } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" className="h2">
            <span id="exp-title">Experience</span>
          </Reveal>
          <span className="count">2021 — present</span>
        </div>
        <ol className="exp-list">
          {ROLES.map((r) => (
            <Reveal as="li" key={r.org} className="exp grid-12">
              <p className="exp-years">{r.period}</p>
              <div className="exp-role">
                <h3>
                  {r.title}
                  {r.current && <span className="now">Current</span>}
                </h3>
                <p className="company">{r.org}</p>
              </div>
              <p className="exp-desc">{r.impact}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
