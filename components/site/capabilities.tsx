import { AppWindow, Cpu, Database, Layers, type LucideIcon } from "lucide-react"
import { CAPABILITIES } from "@/lib/portfolio"
import { Reveal } from "./reveal"

const ICONS: LucideIcon[] = [AppWindow, Database, Cpu, Layers]

export function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2" className="h2">
            <span id="cap-title">
              What I bring <em>to a team</em>
            </span>
          </Reveal>
        </div>
        <div className="caps">
          {CAPABILITIES.map((c, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal as="article" key={c.title} className="cap" delay={i % 2 ? 80 : 0}>
                <Icon className="cap-icon" size={28} strokeWidth={1.25} aria-hidden="true" />
                <h3>{c.title}</h3>
                <p className="stack">{c.stack.join(", ")}</p>
                <p>{c.summary}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
