# Feature Specification: Portfolio Redesign

**Feature Branch**: `001-portfolio-redesign`

**Created**: 2026-10-23

**Status**: Draft

**Input**: User description: "Remodernise this portfolio, redesign the UI to be world class using OpenDesign AI."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter grasps who Gbenga is in five seconds (Priority: P1)

A recruiter or founder lands on the home page from LinkedIn or a job application. Before they
scroll they see his name, his role (Fullstack & AI Engineer), a one-line positioning statement,
proof that he ships (years of experience, products live), and two clear actions: see the work, get
the résumé.

**Why this priority**: The first screen decides whether the visitor keeps reading. Everything else
depends on it.

**Independent Test**: Load the home page on a phone and on a laptop; without scrolling, the
name, role, positioning line, proof stats and both calls to action are visible and legible.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on a 390px-wide phone, **When** the page loads, **Then** name,
   role, positioning line and the "View work" action are visible above the fold.
2. **Given** a visitor with JavaScript disabled, **When** the page loads, **Then** all hero text,
   experience, products and contact links are present in the HTML.
3. **Given** a visitor who clicks "Résumé", **When** the click completes, **Then** the PDF opens in
   a new tab.

---

### User Story 2 - Hiring manager evaluates the products (Priority: P1)

A hiring manager wants evidence. They scroll to the products section and see featured products
(CodeCampi, NovateScribe) presented large with screenshot, problem/outcome summary and stack, and
the remaining products (ClinicDDI, Audire, 4casta, Document Merger) in a scannable grid. Every card
links to the live product.

**Why this priority**: The work is the main thing a portfolio is judged on.

**Independent Test**: Scroll to the products section; each of the six products shows its image,
name, one-paragraph description, tags and a working outbound link.

**Acceptance Scenarios**:

1. **Given** the products section, **When** a visitor hovers or focuses a card, **Then** the card
   shows a clear affordance that it links out, and keyboard focus is visible.
2. **Given** a product card, **When** activated, **Then** the live product opens in a new tab.

---

### User Story 3 - Visitor reads the career trajectory and capabilities (Priority: P2)

The visitor scans four roles (Novate AI CTO → Automancers → Pollecode → 100Devs) as a timeline with
dates, organisation and one-line impact, and four capability areas (Frontend, Backend, AI
Engineering, DevOps) with the concrete technologies behind each.

**Why this priority**: Supports the products with credibility, but is secondary to them.

**Independent Test**: The experience section lists all four roles in reverse-chronological order
with the current role visually marked.

**Acceptance Scenarios**:

1. **Given** the experience section, **When** viewed on mobile, **Then** the timeline reads top to
   bottom with no overlapping text.

---

### User Story 4 - Visitor gets in touch (Priority: P2)

A visitor who is interested sends a message through the contact form, or uses the email / LinkedIn
links directly.

**Why this priority**: Converts interest into a conversation.

**Independent Test**: Submit the form with valid data and receive a success message; submit with
an empty field and see an inline validation message.

**Acceptance Scenarios**:

1. **Given** the form, **When** submitted with a missing or invalid email, **Then** the field shows an
   error and nothing is sent.
2. **Given** the email service fails, **When** the form is submitted, **Then** the visitor sees an
   error and a fallback mailto link.

---

### User Story 5 - Visitor asks the AI assistant (Priority: P3)

The visitor opens the portfolio assistant from the hero prompt bar or a floating launcher and asks
about Gbenga's work; the assistant answers from portfolio data.

**Why this priority**: A differentiator for an AI engineer, but optional to the core journey.

**Independent Test**: Click the hero prompt bar; the assistant opens, a suggested question can be
sent, and an answer appears.

**Acceptance Scenarios**:

1. **Given** the assistant panel is open, **When** the visitor presses Escape, **Then** it closes and
   focus returns to the launcher.

---

### Edge Cases

- Product image fails to load → the card keeps its aspect ratio and shows the product name.
- Visitor prefers reduced motion → no parallax, marquee or entrance animations; content appears
  immediately.
- Very long product descriptions → clamp gracefully without breaking the grid.
- Theme toggle → both light and dark themes meet contrast; the choice persists between visits.
- AI route errors or no LLM key → assistant falls back to the built-in rule-based responder.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The home page MUST present, in order: navigation, hero, proof/metrics strip,
  capabilities, experience, products, contact, footer.
- **FR-002**: The hero MUST show name, role, positioning statement, availability status,
  portrait, two calls to action (View work, Résumé) and the AI prompt bar.
- **FR-003**: Core content MUST be rendered server-side (no "render nothing until mounted" gate).
- **FR-004**: Portfolio content (capabilities, experience, products, links) MUST come from a single
  typed data module.
- **FR-005**: Navigation MUST be sticky, show the active section, and collapse to an accessible
  menu on mobile.
- **FR-006**: The site MUST offer light and dark themes with dark as default.
- **FR-007**: Products MUST be split into featured (large) and secondary (grid) presentations.
- **FR-008**: The contact form MUST validate name, email and message on the client before sending.
- **FR-009**: All animations MUST be disabled or reduced when `prefers-reduced-motion` is set.
- **FR-010**: The visual design MUST be produced in OpenDesign and the implementation MUST match
  the approved design's layout, type scale, colour tokens and section rhythm.
- **FR-011**: Existing SEO metadata, Open Graph image, sitemap and structured data MUST be kept.

### Key Entities

- **Capability**: title, description, list of technologies.
- **Role**: title, organisation, period, impact summary, current flag.
- **Product**: title, description, image, live URL, tags, featured flag.
- **Profile**: name, role, positioning line, stats, social links, résumé URL.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On a 390×844 viewport, name, role, positioning line and primary action are all
  visible without scrolling.
- **SC-002**: Lighthouse mobile scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- **SC-003**: Zero horizontal scroll from 320px to 1920px wide.
- **SC-004**: Every interactive element is reachable and operable by keyboard alone, with a visible
  focus indicator.
- **SC-005**: Home page HTML (no JS) contains all six product names and all four roles.
- **SC-006**: `next build` completes with no type errors.

## Assumptions

- Content (roles, products, copy) stays as in the current site; this feature changes presentation,
  not facts. Copy may be tightened for clarity.
- The existing stack (Next.js 15, Tailwind 3, shadcn/ui, framer-motion) is kept.
- The AI assistant's back-end routes are unchanged; only its UI is restyled.
- The blog and testimonials components are out of scope (not currently rendered).
