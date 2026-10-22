// Single source of truth for portfolio content (spec FR-004, data-model.md).

export type Social = { label: "GitHub" | "LinkedIn" | "Email"; href: string; handle: string }
export type Stat = { value: string; label: string }
export type Capability = { title: string; summary: string; stack: string[] }
export type Role = { title: string; org: string; period: string; impact: string; current?: boolean }
export type Product = {
  title: string
  summary: string
  image: string
  href: string
  tags: string[]
  featured: boolean
  kicker?: string
}

export const PROFILE = {
  name: "Gbenga Oluwadahunsi",
  firstName: "Gbenga",
  lastName: "Oluwadahunsi",
  role: "Fullstack & AI Engineer",
  positioning:
    "I build high-performance, privacy-first AI products from the infrastructure up — across web, mobile, and edge.",
  availability: "Available for advisory & contract work",
  email: "gbengaoluwadahunsi@gmail.com",
  resumeUrl: "/Gbenga_Oluwadahunsi.pdf",
  portrait: "/hero.png",
}

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/gbengaoluwadahunsi", handle: "gbengaoluwadahunsi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gbengaoluwadahunsi/", handle: "in/gbengaoluwadahunsi" },
  { label: "Email", href: "mailto:gbengaoluwadahunsi@gmail.com", handle: "gbengaoluwadahunsi@gmail.com" },
]

export const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
] as const

export const STATS: Stat[] = [
  { value: "4+", label: "Years shipping AI" },
  { value: "8", label: "Products live" },
  { value: "Ex-CTO", label: "Novate AI" },
  { value: "99.9%", label: "Uptime, healthcare AI" },
]

export const STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Golang", "FastAPI",
  "Python", "Postgres", "AWS", "Docker", "RAG", "Edge inference",
]

export const CAPABILITIES: Capability[] = [
  {
    title: "Frontend Architecture",
    summary: "Interfaces engineered for 60fps and zero layout shift.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend Systems",
    summary: "Resilient APIs that move heavy ML payloads in under 100ms.",
    stack: ["Node.js", "FastAPI", "Golang", "Postgres", "AWS"],
  },
  {
    title: "AI Engineering",
    summary: "Models deployed where privacy and speed demand it.",
    stack: ["Edge inference", "RAG", "Applied NLP", "TTS / OCR"],
  },
  {
    title: "DevOps & Scale",
    summary: "Compliance-aware infrastructure that scales predictably.",
    stack: ["Docker", "CI/CD", "Observability", "HIPAA-aware infra"],
  },
]

export const ROLES: Role[] = [
  {
    title: "CTO, AI & Software Engineer",
    org: "Novate AI",
    period: "2025 — 2026",
    impact:
      "Founding engineer and CTO. Owned product, platform and compliance-aware AI end to end — set the technical roadmap, shipped a secure architecture and built production ML pipelines for sensitive data.",
    current: true,
  },
  {
    title: "AI Product Engineer",
    org: "Automancers PTE Ltd",
    period: "2024 — 2025",
    impact:
      "Designed a reusable component library and tuned database performance: 30% faster development and 30% faster backend responses.",
  },
  {
    title: "Fullstack Engineer",
    org: "Pollecode",
    period: "2022 — 2024",
    impact:
      "Rebuilt the core app architecture across client and data layers, integrated 5+ payment and auth systems, and led weekly code reviews.",
  },
  {
    title: "Frontend Developer",
    org: "100Devs",
    period: "2021 — 2022",
    impact:
      "Delivered 4 client projects on tight timelines with pixel-accurate responsive interfaces, and introduced a PR review process that cut regressions.",
  },
]

export const PRODUCTS: Product[] = [
  {
    title: "CodeCampi",
    kicker: "Developer education",
    summary:
      "Multi-language programming education that helps engineers transfer what they already know. Compare, learn, practise, and get layered AI code review across Python, JavaScript, TypeScript, Go and Rust.",
    image: "/codecampi.png",
    href: "https://code-campi-4ygh-dusky.vercel.app/",
    tags: ["Next.js", "TypeScript", "Golang"],
    featured: true,
  },
  {
    title: "NovateScribe",
    kicker: "Healthcare AI",
    summary:
      "AI-powered notes for medical practitioners. Production healthcare AI with 99.9% uptime, built on Next.js, Node.js and HIPAA-aware ML pipelines.",
    image: "/novateScribe.jpeg",
    href: "https://www.novatescribe.com",
    tags: ["Healthcare AI", "RAG", "HIPAA", "AWS"],
    featured: true,
  },
  {
    title: "ClinicDDI",
    summary: "An AI drug-drug interaction checker that protects clinical decision-making.",
    image: "/clinicDDI.jpeg",
    href: "https://clinic-ddi.vercel.app/",
    tags: ["Clinical AI", "Next.js", "Python"],
    featured: false,
  },
  {
    title: "Audire",
    summary: "Open-source AI library with edge neural TTS, browser OCR for scanned PDFs and LLM-assisted reading.",
    image: "/audire.jpeg",
    href: "https://audire-roan.vercel.app/",
    tags: ["Neural TTS", "OCR", "LLM"],
    featured: false,
  },
  {
    title: "4casta",
    summary: "Local-first business forecasting for enterprise branches, with a voice-first AI assistant.",
    image: "/4casta.jpeg",
    href: "https://4casta.vercel.app",
    tags: ["Local-first", "Kokoro TTS", "Edge"],
    featured: false,
  },
  {
    title: "Document Merger",
    summary: "Privacy-first PDF and Word merging in the browser — sub-100ms, nothing leaves your device.",
    image: "/docmerger.png",
    href: "https://document-merger-ebon.vercel.app/",
    tags: ["Privacy-first", "PDF-lib", "File API"],
    featured: false,
  },
]
