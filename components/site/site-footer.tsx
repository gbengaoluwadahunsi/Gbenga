import { ArrowUp } from "lucide-react"
import { PROFILE, SOCIALS } from "@/lib/portfolio"

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <nav aria-label="Social">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              className="f-link"
              href={s.href}
              {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a className="f-link" href="#top">
          Back to top <ArrowUp size={14} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
