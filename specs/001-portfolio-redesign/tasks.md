# Tasks: Portfolio Redesign

**Input**: [spec.md](./spec.md), [plan.md](./plan.md), [design/index.html](./design/index.html) (OpenDesign artifact)

Format: `[ID] [P?] [Story] Description` — `[P]` = parallelisable (different files).

## Phase 1: Setup

- [x] T001 Install Spec Kit into the repo and write the portfolio constitution (`.specify/memory/constitution.md`)
- [x] T002 Generate the visual design in OpenDesign and save it to `specs/001-portfolio-redesign/design/index.html`

## Phase 2: Foundational

- [x] T003 Create typed content module `lib/portfolio.ts` (Profile, Stats, Stack, Capabilities, Roles, Products)
- [x] T004 Port design tokens and component styles to `app/site.css`; keep shadcn HSL variables in `app/globals.css` aligned with the new palette
- [x] T005 Load Bricolage Grotesque, Geist and Geist Mono via `next/font` in `app/layout.tsx`; theme on both `class` and `data-theme`; add skip link
- [x] T006 [P] `components/site/reveal.tsx` scroll-reveal (no-op under reduced motion, visible without JS)

## Phase 3: US1 — Recruiter grasps who Gbenga is (P1)

- [x] T007 [US1] `components/site/site-header.tsx` floating nav, active-section indicator, theme toggle, Résumé, full-screen mobile menu (Esc closes)
- [x] T008 [US1] `components/site/hero.tsx` pill, name, role, positioning, CTAs, portrait frame, AI ask bar
- [x] T009 [P] [US1] `components/site/proof-strip.tsx` stats + stack marquee
- [x] T010 [US1] `app/page.tsx` as a Server Component composing all sections (remove mount gate)

## Phase 4: US2 — Hiring manager evaluates the products (P1)

- [x] T011 [US2] `components/site/work.tsx` featured alternating rows + bento grid, real live URLs, `next/image`

## Phase 5: US3 — Trajectory and capabilities (P2)

- [x] T012 [P] [US3] `components/site/experience.tsx`
- [x] T013 [P] [US3] `components/site/capabilities.tsx`

## Phase 6: US4 — Get in touch (P2)

- [x] T014 [US4] `components/site/contact.tsx` statement, email, socials
- [x] T015 [US4] Rewrite `components/contact-form.tsx`: inline validation, EmailJS send, error + mailto fallback
- [x] T016 [P] [US4] `components/site/site-footer.tsx`

## Phase 7: US5 — AI assistant (P3)

- [x] T017 [US5] Restyle `src/components/ai/ai-chat.tsx` to the design's launcher + panel; accept a question from the hero bar; Esc closes and returns focus

## Phase 8: Polish & Verification

- [x] T018 `next build` passes; `tsc --noEmit` clean for all files touched by this feature
  (6 pre-existing errors remain in unused legacy files: `src/components/sections/*`, `src/lib/data-loader.ts`)
- [ ] T019 Manual check (quickstart.md). Done: dark theme at 1440px and 390px (headless Chrome), no horizontal
  overflow, SSR HTML contains all products/roles (SC-005). Remaining: light theme, keyboard-only pass,
  reduced motion, Firefox.
- [ ] T020 Lighthouse mobile run against SC-002
