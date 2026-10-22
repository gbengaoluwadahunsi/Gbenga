"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowDown, Moon, Sun } from "lucide-react"
import { NAV, PROFILE } from "@/lib/portfolio"

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [indicator, setIndicator] = useState<{ x: number; visible: boolean }>({ x: 0, visible: false })
  const linksRef = useRef<HTMLDivElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Track which section is in view
  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => io.observe(s))
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive(null)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  // Move the dot under the active link
  useLayoutEffect(() => {
    const link = active ? linksRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`) : null
    if (!link) return setIndicator((s) => ({ ...s, visible: false }))
    setIndicator({ x: link.offsetLeft + link.offsetWidth / 2 - 2, visible: true })
  }, [active])

  // Mobile menu: Esc closes, lock scroll, focus first item
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = "hidden"
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const isDark = resolvedTheme !== "light"

  return (
    <>
      <div className="nav-wrap">
        <nav className="nav" aria-label="Primary">
          <a className="logo" href="#top" aria-label={`${PROFILE.name}, home`}>
            G<span>.</span>O
          </a>
          <div className="nav-links" ref={linksRef}>
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined}>
                {label}
              </a>
            ))}
            <span
              className="nav-indicator"
              aria-hidden="true"
              style={{ transform: `translateX(${indicator.x}px)`, opacity: indicator.visible ? 1 : 0 }}
            />
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn theme-toggle"
              type="button"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <Sun className="ico-sun" size={18} strokeWidth={1.5} aria-hidden="true" />
              <Moon className="ico-moon" size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <a className="btn btn--ghost btn--sm resume-link" href={PROFILE.resumeUrl} target="_blank" rel="noopener">
              Résumé
            </a>
            <button
              ref={menuBtnRef}
              className="icon-btn menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </nav>
      </div>

      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <ul>
          {NAV.map(({ id, label }, i) => (
            <li key={id}>
              <a className="big" href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label} <span className="mono">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <a className="btn btn--ghost" href={PROFILE.resumeUrl} target="_blank" rel="noopener">
            Résumé
            <span className="btn-icon">
              <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
          <span className="mono muted">{PROFILE.email}</span>
        </div>
      </div>
    </>
  )
}
