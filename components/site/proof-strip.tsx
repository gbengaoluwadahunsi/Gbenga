import { STACK, STATS } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export function ProofStrip() {
  return (
    <section className="proof" aria-label="Highlights">
      <div className="wrap">
        <ul className="stats">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} className="stat" delay={i * 60}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <ul aria-label="Stack">
            {STACK.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ul aria-hidden="true">
            {STACK.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
