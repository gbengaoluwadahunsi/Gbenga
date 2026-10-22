import { ArrowUpRight, Github, Linkedin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { PROFILE, SOCIALS } from "@/lib/portfolio"
import { Reveal } from "./reveal"

const SOCIAL_ICONS = { GitHub: Github, LinkedIn: Linkedin } as const

export function Contact() {
  const socials = SOCIALS.filter((s) => s.label !== "Email")

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal as="h2" className="contact-statement">
          <span id="contact-title">
            Let&apos;s build something <em>worth shipping.</em>
          </span>
        </Reveal>
        <div className="grid-12">
          <Reveal className="channels">
            <a className="email" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email} <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <div className="socials">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS]
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener">
                    <span>
                      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                      {s.label}
                    </span>
                    <span className="mono">{s.label === "GitHub" ? `@${s.handle}` : `/${s.handle}`}</span>
                  </a>
                )
              })}
            </div>
          </Reveal>
          <Reveal className="form-shell" delay={100}>
            <div className="frame">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
