# Implementation Plan: Portfolio Redesign

**Branch**: `001-portfolio-redesign` | **Date**: 2026-10-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-redesign/spec.md`

## Summary

Re-skin and re-structure the single-page portfolio to match a new OpenDesign artifact (the visual
source of truth, saved in [design/](./design/)). The page moves from a client-only component that
renders nothing until mounted to a server-rendered page assembled from small section components,
fed by one typed content module. Only the interactive pieces (nav, theme toggle, reveal-on-scroll,
contact form, AI assistant) are client components.

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 15 (App Router)

**Primary Dependencies**: Tailwind CSS 3, shadcn/ui primitives (Sheet, Button, Toast), next-themes,
framer-motion, react-hook-form + zod, lucide-react, @emailjs/browser. No new dependencies.

**Storage**: N/A (content in `lib/portfolio.ts`)

**Testing**: `next build` type-check, manual browser checks at 390px and 1440px in both themes,
Lighthouse mobile run.

**Target Platform**: Vercel, evergreen browsers

**Project Type**: Web application (single Next.js app)

**Performance Goals**: Lighthouse mobile Perf ≥ 90, LCP < 2.5s, CLS < 0.1

**Constraints**: Server-rendered core content; reduced-motion respected; WCAG AA in both themes

**Scale/Scope**: One page, eight sections, six products, four roles

## Constitution Check

| Principle | Gate | Status |
|---|---|---|
| I. Content-First Next.js | Home page is a Server Component; no mount gate | PASS (planned) |
| II. Simplicity | No new deps; single typed content module | PASS |
| III. Accessibility | Semantic landmarks, focus rings, AA tokens, reduced motion | PASS (planned) |
| IV. Performance | `next/image` with sizes, priority only on hero portrait, fonts via `next/font` | PASS (planned) |
| V. Verification | Build + manual checks recorded in tasks.md | PASS (planned) |
| Design Tooling | Design produced in OpenDesign, stored under `design/` | PASS |

Re-checked after design: PASS. No violations, so Complexity Tracking is empty.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-redesign/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── design/index.html     # OpenDesign artifact (visual source of truth)
├── checklists/requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx            # fonts, metadata (kept), ThemeProvider, skip link
├── page.tsx              # Server Component: composes sections
└── globals.css           # design tokens (light + dark), utilities
lib/
└── portfolio.ts          # typed content: profile, stats, stack, capabilities, roles, products
components/site/
├── site-header.tsx       # client: sticky nav, active section, mobile Sheet, theme toggle
├── hero.tsx              # server + <AskAiButton/> client island
├── proof-strip.tsx       # stats + stack marquee (CSS-only animation)
├── work.tsx              # featured rows + secondary grid
├── experience.tsx
├── capabilities.tsx
├── contact.tsx           # server wrapper + <ContactForm/> client
├── site-footer.tsx
├── reveal.tsx            # client: IntersectionObserver reveal, no-op on reduced motion
└── section-heading.tsx
components/contact-form.tsx      # rewritten: zod validation, fallback mailto
src/components/ai/ai-chat.tsx    # restyled; Escape to close, focus return
```

**Structure Decision**: Keep the single Next.js app. New presentational components go in
`components/site/`; the unused legacy components (`blog-section`, `project-card`, `src/components/sections/*`)
are left untouched and out of scope.

## Complexity Tracking

None.
