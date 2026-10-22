<!--
Sync Impact Report
- Version change: (specProject 1.1.0 baseline) → 1.0.0 (Gbenga portfolio)
- Modified principles: I. Static-First → I. Content-First Next.js; II. Simplicity reworded for the
  existing Next.js + Tailwind stack
- Added sections: none
- Removed sections: none
- Templates requiring updates: none (plan/spec/tasks templates remain compatible)
- Follow-up TODOs: none
-->

# Gbenga Portfolio Constitution

## Core Principles

### I. Content-First Next.js
The portfolio is a Next.js (App Router) site deployed on Vercel. The home page MUST render its
core content (name, role, experience, products, contact) server-side so it is visible without
JavaScript and indexable by search engines. Optional server routes (the AI assistant) are allowed
but the page MUST remain fully usable when they fail.

### II. Simplicity
Use the existing stack (React, TypeScript, Tailwind CSS, shadcn/ui, framer-motion) before adding
anything. New dependencies MUST be justified by a concrete need in the feature spec. Portfolio
content lives in typed data modules, not scattered through markup.

### III. Accessibility
Semantic HTML, alt text for meaningful images, full keyboard navigation with visible focus,
WCAG 2.1 AA colour contrast in both light and dark themes, and `prefers-reduced-motion` respected
for every animation.

### IV. Performance
Responsive from 320px to wide desktop with no horizontal scroll. Target Lighthouse Performance
≥ 90 on mobile, LCP < 2.5s, CLS < 0.1. Images sized and lazy-loaded below the fold; no
render-blocking third-party scripts.

### V. Verification
Every change MUST pass `next build` with no type errors, produce no console errors, and be
checked at mobile and desktop widths in light and dark themes before it is considered done.

## Technical Constraints

- No secrets in source; client-exposed keys only via `NEXT_PUBLIC_*` env vars.
- External resources (fonts, images, scripts) over HTTPS only.
- Browser support: latest two versions of major evergreen browsers.

## Design Tooling

- OpenDesign is the default tool for all UI/UX design work (mockups, layouts, components,
  design assets). The approved OpenDesign artifact is the visual source of truth for a feature.
- Claude Design MUST NOT be used by default; it may be used only when explicitly requested.

## Development Workflow

- Each feature starts with a spec, then a design (OpenDesign), then a plan, then tasks.
- Work happens on a numbered feature branch (e.g. `001-portfolio-redesign`).
- Keep commits small and descriptive.

## Governance

This constitution supersedes other project practices. Amendments require updating this file,
bumping the version (MAJOR for removed/redefined principles, MINOR for additions, PATCH for
clarifications), and noting the change in the Sync Impact Report.

**Version**: 1.0.0 | **Ratified**: 2026-10-23 | **Last Amended**: 2026-10-23
