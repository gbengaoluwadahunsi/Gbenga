import Image from "next/image"
import { ArrowDownRight, FileText } from "lucide-react"
import { PROFILE } from "@/lib/portfolio"
import { HeroAsk } from "./hero-ask"

export function Hero() {
  return (
    <header className="hero">
      <div className="wrap grid-12">
        <div className="hero-copy">
          <p className="pill">
            <span className="live" aria-hidden="true" />
            {PROFILE.availability}
          </p>
          <h1 className="hero-name">
            <span>{PROFILE.firstName}</span>
            <span className="last">{PROFILE.lastName}</span>
          </h1>
          <p className="hero-role">{PROFILE.role}</p>
          <p className="hero-lead">{PROFILE.positioning}</p>
          <div className="hero-ctas">
            <a className="btn btn--primary" href="#work">
              View work
              <span className="btn-icon">
                <ArrowDownRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </a>
            <a className="btn btn--ghost" href={PROFILE.resumeUrl} target="_blank" rel="noopener">
              Résumé
              <span className="btn-icon">
                <FileText size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </a>
          </div>
          <HeroAsk />
        </div>

        <figure className="hero-figure">
          <div className="frame">
            <div className="frame-core">
              <span className="ph" aria-hidden="true">
                G.O
              </span>
              <Image
                src={PROFILE.portrait}
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 767px) 50vw, (max-width: 1320px) 33vw, 420px"
              />
            </div>
          </div>
          <figcaption className="mono">
            <span>{PROFILE.name}</span>
            <span>Fullstack &amp; AI</span>
          </figcaption>
        </figure>
      </div>
    </header>
  )
}
