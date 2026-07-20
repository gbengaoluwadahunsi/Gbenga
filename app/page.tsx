"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Download, Github, Linkedin, Mail, Menu, Code2, Zap, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}

const NAV_LINKS = [
  { href: "#skills", label: "Capabilities", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#projects", label: "Work", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
]

const CAPABILITIES = [
  { icon: Code2, title: "Frontend Architecture", desc: "React, Next.js, TypeScript. Engineered for 60fps performance and zero-layout-shift." },
  { icon: Zap, title: "Backend Systems", desc: "Node.js, FastAPI, Spring Boot, Postgres, AWS. Resilient APIs that handle heavy ML payloads with sub-100ms latency." },
  { icon: TrendingUp, title: "AI Engineering", desc: "Edge inference, RAG, applied NLP. Models deployed where privacy and speed mandate." },
  { icon: CheckCircle2, title: "DevOps & Scale", desc: "Docker, CI/CD, compliance-aware infrastructure. Systems that self-heal and scale predictably." },
]

const EXPERIENCE = [
  { role: "CTO, AI & Software Engineer", org: "Novate AI", time: "2025 — 2026", body: "Founding engineer & CTO — owned product, platform, and compliance-aware AI end to end. Defined the technical roadmap, shipped secure architecture, and built production ML pipelines for sensitive data at scale.", current: true },
  { role: "AI Product Engineer", org: "Automancers PTE Ltd", time: "2024 — 2025", body: "Designed reusable component library and optimized database performance resulting in 30% reduction in development time and 30% improvement in backend response times.", current: false },
  { role: "FullStack Engineer", org: "Pollecode", time: "2022 — 2024", body: "Rebuilt core app architecture across client and data access layers. Integrated 5+ third-party payment/auth systems. Led weekly code reviews across the API and components.", current: false },
  { role: "Frontend Developer", org: "100Devs", time: "2021 — 2022", body: "Delivered 4 client projects within tight timelines. Shipped pixel-accurate responsive interfaces and introduced PR review processes that significantly cut regressions.", current: false },
]

const PROJECTS = [
  { title: "LearnaOS", desc: "Turn any GitHub repo into a book-style course with one CLI command. Hosted library with curated courses, Clerk auth, Stripe subscriptions, and Pro AI learning tools.", img: "/learnaos.jpeg", link: "https://www.learnaos.com", tags: ["Next.js", "Stripe", "Clerk", "AI"], featured: true },
  { title: "Prezzence", desc: "AI-powered Android interview prep app. Practice with a real-time AI avatar, on-device whisper.cpp transcription, and MediaPipe camera presence coaching.", img: "/prezzence.jpeg", link: "https://www.prezzence.app", tags: ["Kotlin", "whisper.cpp", "MediaPipe", "FastAPI"], featured: true },
  { title: "NovateScribe", desc: "AI-Powered Notes for Medical Practitioners. Production healthcare AI with 99.9% uptime. Built with Next.js, Node.js, and HIPAA-aware ML pipelines.", img: "/novateScribe.jpeg", link: "https://www.novatescribe.com", tags: ["Healthcare AI", "RAG", "HIPAA", "AWS"], featured: false },
  { title: "ClinicDDI", desc: "An advanced Drug-Drug Interaction (DDI) checker equipped with AI to protect clinical decision-making. Built for accuracy in clinical environments.", img: "/clinicDDI.jpeg", link: "https://clinic-ddi.vercel.app/", tags: ["Clinical AI", "Next.js", "Python"], featured: false },
  { title: "Carouslk", desc: "A powerful carousel creation tool that enables users to build beautiful, responsive carousels for images and videos. Features drag-and-drop reordering.", img: "/carouslk.jpeg", link: "https://www.carouslk.com/", tags: ["Canvas API", "Dnd-kit", "Framer Motion"], featured: false },
  { title: "Audire", desc: "An open-source, AI-powered digital library featuring podcast-quality Edge neural TTS, browser OCR for scanned PDFs, and LLM-enhanced reading comprehension.", img: "/audire.jpeg", link: "https://audire-roan.vercel.app/", tags: ["Neural TTS", "OCR", "LLM"], featured: false },
  { title: "4casta", desc: "A premium, local-first business forecasting platform for enterprise branch management. Integrates a Voice-First AI assistant (Kokoro TTS) and edge analytics.", img: "/4casta.jpeg", link: "https://4casta.vercel.app", tags: ["Local-first", "Kokoro TTS", "Edge"], featured: false },
  { title: "Document Merger", desc: "Browser-based, privacy-first PDF/Word document merging utility handling sub-100ms operations solely via client-side File APIs.", img: "/docmerger.png", link: "https://document-merger-ebon.vercel.app/", tags: ["Privacy-first", "PDF-lib", "File API"], featured: false },
]

/* Decorative editorial bracket marks around the wordmark, echoing the reference */
function BracketMarks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 text-primary/70">
      {/* corners */}
      <span className="absolute -left-6 -top-6 font-mono text-2xl md:-left-10 md:-top-8 md:text-3xl">⌐</span>
      <span className="absolute -right-6 -top-6 rotate-90 font-mono text-2xl md:-right-10 md:-top-8 md:text-3xl">⌐</span>
      <span className="absolute -bottom-6 -left-6 -rotate-90 font-mono text-2xl md:-bottom-8 md:-left-10 md:text-3xl">⌐</span>
      <span className="absolute -bottom-6 -right-6 rotate-180 font-mono text-2xl md:-bottom-8 md:-right-10 md:text-3xl">⌐</span>
      {/* ticks + square accents */}
      <span className="absolute -left-4 top-1/2 hidden -translate-y-1/2 font-mono text-lg text-foreground/40 md:block">│</span>
      <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 font-mono text-lg text-foreground/40 md:block">│</span>
      <span className="absolute -top-7 left-1/3 hidden h-1.5 w-1.5 bg-primary/70 md:block" />
      <span className="absolute -bottom-7 right-1/3 hidden h-1.5 w-1.5 bg-foreground/30 md:block" />
    </div>
  )
}

function SectionHead({ num, kicker, title }: { num: string; kicker: string; title: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="eyebrow text-[10px] text-primary">{num}</span>
        <span className="h-px w-12 bg-border" />
        <span className="eyebrow text-[10px] text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="display text-4xl font-medium tracking-tight text-foreground md:text-6xl">{title}</h2>
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary/25">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full">
        <div className="container flex h-20 items-center justify-between px-6">
          <Link href="/" className="eyebrow text-xs font-medium tracking-editorial text-foreground">
            GBENGA<span className="text-primary">.O</span>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map(({ href, label, num }) => (
              <Link key={href} href={href} className="group flex items-baseline gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="eyebrow text-[9px] text-primary/60">{num}</span>
                <span className="tracking-wide">{label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l bg-background">
                <SheetHeader>
                  <SheetTitle className="eyebrow text-left text-[10px] text-muted-foreground">Index</SheetTitle>
                </SheetHeader>
                <div className="mt-10 flex flex-col gap-6">
                  {NAV_LINKS.map(({ href, label, num }) => (
                    <SheetClose key={href} asChild>
                      <Link href={href} className="flex items-baseline gap-3 text-2xl text-foreground transition-colors hover:text-primary display">
                        <span className="eyebrow text-[10px] text-primary/70">{num}</span>
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero — atmospheric bracket-framed wordmark */}
        <section className="grain relative flex min-h-screen items-center overflow-hidden bg-atmosphere">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />

          <div className="container relative z-[2] px-6 py-32">
            <motion.div initial="initial" animate="animate" variants={stagger} className="flex flex-col items-center text-center">
              <motion.div variants={fadeUp} className="mb-14 flex items-center gap-4">
                <span className="eyebrow text-[10px] text-foreground/60">Fullstack · AI Engineer</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="eyebrow text-[10px] text-foreground/60">Available 2026</span>
              </motion.div>

              <motion.div variants={fadeUp} className="relative px-8 py-4 md:px-14">
                <BracketMarks />
                <h1 className="display text-[13vw] font-medium leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                  Gbenga
                  <br />
                  <span className="text-primary/90">Oluwadahunsi</span>
                </h1>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-14 max-w-md text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                Privacy-first, high-performance products — engineered from the infrastructure up, across web, mobile, and edge.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/30 px-8 py-6 text-sm tracking-wide hover:border-primary hover:bg-primary/5">
                  <Link href="#projects">Explore the work</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full px-8 py-6 text-sm tracking-wide text-muted-foreground hover:text-foreground">
                  <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" /> Download résumé
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* corner meta, editorial style */}
          <div className="absolute bottom-8 left-0 right-0 z-[2] hidden md:block">
            <div className="container flex items-end justify-between px-6">
              <div className="flex items-center gap-3">
                <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" className="eyebrow flex items-center gap-2 text-[10px] text-muted-foreground transition-colors hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </Link>
                <span className="h-3 w-px bg-border" />
                <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" className="eyebrow flex items-center gap-2 text-[10px] text-muted-foreground transition-colors hover:text-foreground">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </Link>
              </div>
              <span className="eyebrow text-[10px] text-muted-foreground">Scroll to decode ↓</span>
            </div>
          </div>
        </section>

        {/* Capabilities — editorial index */}
        <section id="skills" className="border-t border-border bg-background">
          <div className="container px-6 py-28 md:py-36">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16 max-w-3xl">
                <SectionHead num="01" kicker="Capabilities" title="Engineered for production scale." />
              </motion.div>

              <div className="border-t border-border">
                {CAPABILITIES.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group grid grid-cols-1 items-start gap-6 border-b border-border py-8 transition-colors hover:bg-secondary/30 md:grid-cols-[auto_1fr_2fr] md:gap-12 md:px-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="eyebrow text-[10px] text-muted-foreground">0{i + 1}</span>
                      <item.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="display text-2xl font-medium text-foreground md:text-3xl">{item.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience — editorial ledger */}
        <section id="experience" className="grain relative overflow-hidden border-t border-border bg-atmosphere">
          <div className="container relative z-[2] px-6 py-28 md:py-36">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl">
              <motion.div variants={fadeUp} className="mb-16">
                <SectionHead num="02" kicker="Experience" title="A trajectory, decoded." />
              </motion.div>

              <div className="border-t border-border/70">
                {EXPERIENCE.map((job, i) => (
                  <motion.div key={i} variants={fadeUp} className="grid grid-cols-1 gap-4 border-b border-border/70 py-8 md:grid-cols-[1fr_2fr] md:gap-12">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        {job.current && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                        <span className="eyebrow text-[10px] text-muted-foreground">{job.time}</span>
                      </div>
                      <h3 className="display text-2xl font-medium text-foreground">{job.role}</h3>
                      <p className="mt-1 text-sm text-primary">{job.org}</p>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:pt-1">{job.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work — editorial gallery */}
        <section id="projects" className="border-t border-border bg-background">
          <div className="container px-6 py-28 md:py-36">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <SectionHead num="03" kicker="Selected Work" title="Shipped, at scale." />
                <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" className="eyebrow flex items-center gap-2 text-[10px] text-muted-foreground transition-colors hover:text-foreground">
                  All repositories <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>

              {/* Featured */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {featured.map((prod) => (
                  <motion.div key={prod.title} variants={fadeUp} className="group">
                    <Link href={prod.link} target="_blank" className="block">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-secondary">
                        <Image src={prod.img} alt={prod.title} fill className="object-contain opacity-90 grayscale transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0" />
                        <span className="eyebrow absolute left-4 top-4 text-[9px] text-foreground/70 mix-blend-difference">Featured</span>
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="display text-3xl font-medium text-foreground transition-colors group-hover:text-primary">{prod.title}</h3>
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{prod.desc}</p>
                        </div>
                        <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                        {prod.tags.map((t) => (
                          <span key={t} className="eyebrow text-[9px] text-muted-foreground/70">{t}</span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Secondary */}
              <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((prod) => (
                  <motion.div key={prod.title} variants={fadeUp} className="group">
                    <Link href={prod.link} target="_blank" className="block">
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-secondary">
                        <Image src={prod.img} alt={prod.title} fill className="object-contain opacity-90 grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0" />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <h3 className="display text-xl font-medium text-foreground transition-colors group-hover:text-primary">{prod.title}</h3>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{prod.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                        {prod.tags.slice(0, 3).map((t) => (
                          <span key={t} className="eyebrow text-[9px] text-muted-foreground/70">{t}</span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact — atmospheric close */}
        <section id="contact" className="grain relative overflow-hidden border-t border-border bg-atmosphere">
          <div className="container relative z-[2] px-6 py-28 md:py-36">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 gap-16 md:grid-cols-2">
              <div>
                <motion.div variants={fadeUp} className="mb-8">
                  <SectionHead num="04" kicker="Contact" title="Let's decode your next build." />
                </motion.div>
                <motion.p variants={fadeUp} className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
                  Ready to architect your next scale problem or ship an AI product from zero? Available for advisory and contract architectures.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/30 px-7 py-6 text-sm tracking-wide hover:border-primary hover:bg-primary/5">
                    <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Email me
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full px-7 py-6 text-sm tracking-wide text-muted-foreground hover:text-foreground">
                    <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
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

      <footer className="border-t border-border bg-background py-10">
        <div className="container flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="eyebrow text-[10px] text-muted-foreground">© {new Date().getFullYear()} Gbenga Oluwadahunsi</p>
          <div className="flex gap-5">
            <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:gbengaoluwadahunsi@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
