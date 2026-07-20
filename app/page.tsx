"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, Menu, Code2, Zap, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import logo from "@/public/O.png"
import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.06 }
  }
}

const NAV_LINKS = [
  { href: "#skills", label: "Capabilities", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#projects", label: "Products", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
]

const CAPABILITIES = [
  { icon: Code2, title: "Frontend Architecture", desc: "React, Next.js, TypeScript. Engineered for 60fps performance and zero-layout-shift." },
  { icon: Zap, title: "Backend Systems", desc: "Node.js, FastAPI, Spring Boot, Postgres, AWS. Resilient APIs that handle heavy ML payloads with sub-100ms latency." },
  { icon: TrendingUp, title: "AI Engineering", desc: "Edge inference, RAG, applied NLP. Models deployed where privacy and speed mandate." },
  { icon: CheckCircle2, title: "DevOps & Scale", desc: "Docker, CI/CD, compliance-aware infrastructure. Systems that self-heal and scale predictably." },
]

const EXPERIENCE = [
  {
    role: "CTO, AI & Software Engineer",
    org: "Novate AI",
    time: "2025 — 2026",
    body: "Founding engineer & CTO — owned product, platform, and compliance-aware AI end to end. Defined the technical roadmap, shipped secure architecture, and built production ML pipelines for sensitive data at scale.",
    current: true,
  },
  {
    role: "AI Product Engineer",
    org: "Automancers PTE Ltd",
    time: "2024 — 2025",
    body: "Designed reusable component library and optimized database performance resulting in 30% reduction in development time and 30% improvement in backend response times.",
    current: false,
  },
  {
    role: "FullStack Engineer",
    org: "Pollecode",
    time: "2022 — 2024",
    body: "Rebuilt core app architecture across client and data access layers. Integrated 5+ third-party payment/auth systems. Led weekly code reviews across the API and components.",
    current: false,
  },
  {
    role: "Frontend Developer",
    org: "100Devs",
    time: "2021 — 2022",
    body: "Delivered 4 client projects within tight timelines. Shipped pixel-accurate responsive interfaces and introduced PR review processes that significantly cut regressions.",
    current: false,
  },
]

const PROJECTS = [
  {
    title: "LearnaOS",
    desc: "Turn any GitHub repo into a book-style course with one CLI command. Hosted library with curated courses, Clerk auth, Stripe subscriptions, and Pro AI learning tools.",
    img: "/learnaos.jpeg",
    link: "https://www.learnaos.com",
    tags: ["Next.js", "Stripe", "Clerk", "AI"],
    featured: true,
  },
  {
    title: "Prezzence",
    desc: "AI-powered Android interview prep app. Practice with a real-time AI avatar, on-device whisper.cpp transcription, and MediaPipe camera presence coaching.",
    img: "/prezzence.jpeg",
    link: "https://www.prezzence.app",
    tags: ["Kotlin", "whisper.cpp", "MediaPipe", "FastAPI"],
    featured: true,
  },
  {
    title: "NovateScribe",
    desc: "AI-Powered Notes for Medical Practitioners. Production healthcare AI with 99.9% uptime. Built with Next.js, Node.js, and HIPAA-aware ML pipelines.",
    img: "/novateScribe.jpeg",
    link: "https://www.novatescribe.com",
    tags: ["Healthcare AI", "RAG", "HIPAA", "AWS"],
    featured: false,
  },
  {
    title: "ClinicDDI",
    desc: "An advanced Drug-Drug Interaction (DDI) checker equipped with AI to protect clinical decision-making. Built for accuracy in clinical environments.",
    img: "/clinicDDI.jpeg",
    link: "https://clinic-ddi.vercel.app/",
    tags: ["Clinical AI", "Next.js", "Python"],
    featured: false,
  },
  {
    title: "Carouslk",
    desc: "A powerful carousel creation tool that enables users to build beautiful, responsive carousels for images and videos. Features drag-and-drop reordering.",
    img: "/carouslk.jpeg",
    link: "https://www.carouslk.com/",
    tags: ["Canvas API", "Dnd-kit", "Framer Motion"],
    featured: false,
  },
  {
    title: "Audire",
    desc: "An open-source, AI-powered digital library featuring podcast-quality Edge neural TTS, browser OCR for scanned PDFs, and LLM-enhanced reading comprehension.",
    img: "/audire.jpeg",
    link: "https://audire-roan.vercel.app/",
    tags: ["Neural TTS", "OCR", "LLM"],
    featured: false,
  },
  {
    title: "4casta",
    desc: "A premium, local-first business forecasting platform for enterprise branch management. Integrates a Voice-First AI assistant (Kokoro TTS) and edge analytics.",
    img: "/4casta.jpeg",
    link: "https://4casta.vercel.app",
    tags: ["Local-first", "Kokoro TTS", "Edge"],
    featured: false,
  },
  {
    title: "Document Merger",
    desc: "Browser-based, privacy-first PDF/Word document merging utility handling sub-100ms operations solely via client-side File APIs.",
    img: "/docmerger.png",
    link: "https://document-merger-ebon.vercel.app/",
    tags: ["Privacy-first", "PDF-lib", "File API"],
    featured: false,
  },
]

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="eyebrow text-xs font-semibold text-primary">{num}</span>
      <span className="h-px w-8 bg-primary/40" />
      <span className="eyebrow text-xs font-semibold text-muted-foreground">{children}</span>
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary/25 selection:text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={36} height={36} className="dark:invert dark:brightness-0" />
            <span className="eyebrow hidden text-xs font-semibold text-muted-foreground sm:inline">Gbenga.O</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label, num }) => (
              <Link key={href} href={href} className="group flex items-baseline gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <span className="eyebrow text-[10px] text-primary/70">{num}</span>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/gbengaoluwadahunsi"
              target="_blank"
              aria-label="GitHub Profile"
              className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground md:flex"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l bg-background">
                <SheetHeader>
                  <SheetTitle className="eyebrow text-left text-xs text-muted-foreground">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-5">
                  {NAV_LINKS.map(({ href, label, num }) => (
                    <SheetClose key={href} asChild>
                      <Link href={href} className="flex items-baseline gap-3 text-lg font-semibold text-foreground transition-colors hover:text-primary">
                        <span className="eyebrow text-xs text-primary/70">{num}</span>
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Link
                    href="https://github.com/gbengaoluwadahunsi"
                    target="_blank"
                    className="mt-2 flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          {/* Blueprint grid + emerald glow backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-70" />
          <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />

          <div className="container relative px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <motion.div
              initial="initial" animate="animate" variants={stagger}
              className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
            >
              <div className="space-y-8">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="eyebrow text-[11px] font-semibold text-primary">Engineering Leader · Available</span>
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl">
                  Gbenga <br className="hidden md:block" />
                  <span className="text-gradient">Oluwadahunsi</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
                  Fullstack &amp; AI Engineer. I build high-performance,
                  <span className="text-foreground"> privacy-first AI products</span> from the infrastructure up — across web, mobile, and edge.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="group px-7 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30">
                    <Link href="#projects">
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-7 py-6 text-base font-semibold">
                    <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" /> Resume
                    </Link>
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
                  <Link
                    href="https://github.com/gbengaoluwadahunsi"
                    target="_blank"
                    className="eyebrow group flex items-center gap-2 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    github.com/gbengaoluwadahunsi
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gbengaoluwadahunsi/"
                    target="_blank"
                    className="eyebrow group flex items-center gap-2 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </motion.div>
              </div>

              {/* Portrait + stat rail */}
              <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-md lg:ml-auto">
                <div className="relative aspect-[4/5] w-full">
                  {/* accent frame */}
                  <div aria-hidden className="absolute -inset-3 rounded-[1.75rem] border border-primary/20" />
                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-secondary shadow-2xl ring-1 ring-border">
                    <Image src="/hero.png" alt="Gbenga Oluwadahunsi" fill priority className="object-cover" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>

                  {/* stat card */}
                  <div className="absolute -bottom-6 -left-6 z-10 w-60 rounded-xl border bg-card/90 p-5 shadow-xl backdrop-blur-md">
                    <div className="grid grid-cols-2 divide-x divide-border">
                      <div className="pr-4">
                        <p className="text-3xl font-bold text-foreground">4<span className="text-primary">+</span></p>
                        <p className="eyebrow mt-1 text-[10px] text-muted-foreground">Yrs Shipping AI</p>
                      </div>
                      <div className="pl-4">
                        <p className="text-3xl font-bold text-foreground">8</p>
                        <p className="eyebrow mt-1 text-[10px] text-muted-foreground">Products Live</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="skills" className="border-b border-border/60 bg-secondary/20">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-14 max-w-2xl space-y-5">
                <SectionLabel num="01">Capabilities</SectionLabel>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Engineered for production scale
                </h2>
                <p className="text-lg text-muted-foreground">
                  Absolute performance, security, and scalability — from the browser down to the inference layer.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {CAPABILITIES.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group relative bg-card p-8 transition-colors hover:bg-secondary/40"
                  >
                    <span className="eyebrow absolute right-5 top-5 text-[10px] text-muted-foreground/50">
                      0{i + 1}
                    </span>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border/60 bg-background">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl">
              <motion.div variants={fadeUp} className="mb-14 space-y-5">
                <SectionLabel num="02">Experience</SectionLabel>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Professional trajectory</h2>
              </motion.div>

              <div className="relative space-y-10 border-l border-border pl-8 md:pl-12">
                {EXPERIENCE.map((job, i) => (
                  <motion.div key={i} variants={fadeUp} className="group relative">
                    <div className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-4 border-background ring-1 -left-[38px] md:-left-[54px] ${job.current ? "bg-primary ring-primary/40" : "bg-muted-foreground ring-transparent"}`} />
                    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-4">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">{job.role}</h3>
                      <span className="text-sm font-semibold text-primary">{job.org}</span>
                      <span className="eyebrow text-[11px] text-muted-foreground md:ml-auto">{job.time}</span>
                    </div>
                    <p className="max-w-2xl leading-relaxed text-muted-foreground">{job.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border/60 bg-secondary/20">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl space-y-5">
                  <SectionLabel num="03">Products</SectionLabel>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Engineered for humans. Deployed for scale.</h2>
                </div>
                <Button asChild variant="outline">
                  <Link href="https://github.com/gbengaoluwadahunsi" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View GitHub
                  </Link>
                </Button>
              </motion.div>

              {/* Featured — large */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {featured.map((prod, i) => (
                  <motion.div key={prod.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <Link href={prod.link} target="_blank" className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <Image src={prod.img} alt={prod.title} fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                        <span className="eyebrow absolute left-4 top-4 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-[10px] font-semibold text-primary backdrop-blur">
                          Featured
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-foreground">{prod.title}</h3>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                        <p className="mb-4 flex-1 leading-relaxed text-muted-foreground">{prod.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {prod.tags.map((t) => (
                            <span key={t} className="eyebrow rounded-md border border-border bg-secondary/50 px-2 py-1 text-[10px] font-medium text-muted-foreground">{t}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Secondary — compact grid */}
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((prod) => (
                  <motion.div key={prod.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Link href={prod.link} target="_blank" className="flex h-full flex-col">
                      <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                        <Image src={prod.img} alt={prod.title} fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-foreground">{prod.title}</h3>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{prod.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {prod.tags.slice(0, 3).map((t) => (
                            <span key={t} className="eyebrow rounded-md border border-border bg-secondary/50 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">{t}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-background">
          <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
          <div className="container relative px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 gap-16 md:grid-cols-2">
              <div>
                <motion.div variants={fadeUp} className="mb-6">
                  <SectionLabel num="04">Contact</SectionLabel>
                </motion.div>
                <motion.h2 variants={fadeUp} className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Let&apos;s build something<br />
                  <span className="text-gradient">worth shipping.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="mb-10 max-w-md text-lg text-muted-foreground">
                  Ready to architect your next scale problem or ship an AI product from zero? I&apos;m available for advisory and contract architectures.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="shadow-md shadow-primary/20">
                    <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                      <Mail className="mr-2 h-5 w-5" /> Email Me
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background py-10">
        <div className="container flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="eyebrow text-[11px] text-muted-foreground">© {new Date().getFullYear()} Gbenga Oluwadahunsi</p>
          <div className="flex gap-3">
            <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:gbengaoluwadahunsi@gmail.com" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
