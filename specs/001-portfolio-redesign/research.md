# Research: Portfolio Redesign

## R1 — Rendering model
- **Decision**: Server Component page with client islands.
- **Rationale**: The current page is `"use client"` and returns `null` until mounted, so crawlers and
  no-JS visitors get an empty body (violates Constitution I, SC-005). Hydration-mismatch concerns
  came from theme; `next-themes` + `suppressHydrationWarning` on `<html>` already handles that.
- **Alternatives**: Keep client page and drop the mount gate — rejected; ships all content as JS.

## R2 — Scroll reveal
- **Decision**: A tiny `Reveal` client component using IntersectionObserver that toggles a
  `data-revealed` attribute; CSS does the transition. Under `prefers-reduced-motion` CSS shows content
  immediately. Content is visible by default when JS is off (attribute applied only after hydration).
- **Alternatives**: framer-motion `whileInView` everywhere — rejected; forces every section to be a
  client component.

## R3 — Design tokens
- **Decision**: Translate the OpenDesign artifact's CSS custom properties into the existing shadcn
  HSL variable scheme in `globals.css` (`--background`, `--foreground`, `--primary`, …) and add
  extra tokens the design needs (`--accent-ink`, `--hairline`, `--surface-2`). Tailwind keeps reading them.
- **Rationale**: Keeps shadcn primitives (Sheet, Toast, Button) themed with zero extra work.

## R4 — Fonts
- **Decision**: Use the families chosen in the OpenDesign artifact through `next/font/google`
  (self-hosted, `display: swap`), exposed as `--font-sans`, `--font-display`, `--font-mono`.

## R5 — Contact form
- **Decision**: react-hook-form + zod resolver (both already installed) for inline errors; EmailJS
  send unchanged; on failure show toast plus mailto fallback. Remove debug `console.log`s.

## R6 — Active-section nav
- **Decision**: IntersectionObserver over section ids in the header; `aria-current="true"` on the
  active link.
