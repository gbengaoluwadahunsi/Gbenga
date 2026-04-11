"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail, Menu, ExternalLink, Code2, Zap, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import BlogSection from "@/components/blog-section"
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
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.05 }
  }
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Products" },
  { href: "#contact", label: "Contact" },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={40} height={40} className="dark:invert dark:brightness-0" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l">
                <SheetHeader>
                  <SheetTitle className="text-foreground text-left">Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {NAV_LINKS.map(({ href, label }) => (
                    <SheetClose key={href} asChild>
                      <Link href={href} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Architect/Hero Section */}
        <section className="container px-6 pt-16 pb-24 md:pt-32 md:pb-32">
          <motion.div
            initial="initial" animate="animate" variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <div className="space-y-8">
              <motion.div variants={fadeUp} className="flex gap-4 items-center">
                <span className="h-[2px] w-8 bg-primary rounded-full" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Engineering Leader</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Gbenga <br className="hidden md:block" /> Oluwadahunsi
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Fullstack and AI Engineer. CTO at Novate AI. I build high-performance, privacy-first healthcare AI systems from the infrastructure up.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="px-8 py-6 text-base font-semibold shadow-lg hover:shadow-primary/25 transition-all">
                  <Link href="#projects">Explore Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base font-semibold shadow-sm">
                  <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank">
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-secondary rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                <Image
                  src="/two.png"
                  alt="Portrait"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* Technical stat overlay */}
              <div className="absolute -bottom-6 -left-6 bg-card border shadow-xl rounded-xl p-6 z-10 w-64">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold text-foreground">4+</p>
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-4">Years Shipping AI</p>
                <div className="h-[1px] w-full bg-border mb-4" />
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-foreground">3</p>
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-muted-foreground mt-1">Products in Production</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Capabilities Section */}
        <section id="skills" className="border-t bg-secondary/30">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Core Capabilities</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl text-lg">Engineered for absolute performance, security, and scalability in clinical environments.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Code2, title: "Frontend Architecture", desc: "React, Next.js, TypeScript. Engineered for 60fps performance and zero-layout-shift." },
                  { icon: Zap, title: "Backend Systems", desc: "Node.js, FastAPI, Postgres, AWS. Resilient APIs that handle heavy ML payloads with sub-100ms latency." },
                  { icon: TrendingUp, title: "AI Engineering", desc: "Edge inference, RAG, Clinical NLP. Models deployed where privacy and speed mandate." },
                  { icon: CheckCircle2, title: "DevOps & Scale", desc: "Docker, CI/CD, HIPAA-aware infrastructure. Systems that self-heal and scale predictably." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t bg-background">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-16">Professional Trajectory</motion.h2>

              <div className="space-y-12 border-l-2 border-border pl-6 md:pl-10 relative">
                {[
                  {
                    role: "CTO, AI & Software Engineer",
                    org: "Novate AI",
                    time: "May 2025 - Present",
                    body: "Founding engineer & CTO for a healthtech company — product, platform, and compliance-aware AI for clinical workflows. Defined technical roadmap, shipped HIPAA-aware architecture, built ML pipelines for medical datasets.",
                    current: true
                  },
                  {
                    role: "AI Product Engineer",
                    org: "Automancers PTE Ltd",
                    time: "Oct 2024 - Jan 2025",
                    body: "Designed reusable component library and optimized database performance resulting in 30% reduction in development time and 30% improvement in backend response times.",
                    current: false
                  },
                  {
                    role: "FullStack Engineer",
                    org: "Pollecode",
                    time: "Sep 2022 - Aug 2024",
                    body: "Rebuilt core app architecture across client and data access layers. Integrated 5+ third-party payment/auth systems. Led weekly code reviews across the API and components.",
                    current: false
                  },
                  {
                    role: "Frontend Developer",
                    org: "100Devs",
                    time: "Aug 2021 - May 2022",
                    body: "Delivered 4 client projects within tight timelines. Shipped pixel-accurate responsive interfaces and introduced PR review processes that significantly cut regressions.",
                    current: false
                  }
                ].map((job, i) => (
                  <motion.div key={i} variants={fadeUp} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute -left-[35px] md:-left-[51px] top-1.5 h-4 w-4 rounded-full border-4 border-background ${job.current ? 'bg-primary' : 'bg-muted-foreground'}`} />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                      <span className="text-base font-medium text-primary">{job.org}</span>
                      <span className="text-sm font-semibold text-muted-foreground md:ml-auto bg-secondary px-3 py-1 rounded-full">{job.time}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{job.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t bg-secondary/30">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Shipped Products</h2>
                  <p className="mt-4 text-muted-foreground text-lg">Engineered for humans. Deployed for scale.</p>
                </div>
                <Button asChild variant="outline" className="shadow-sm">
                  <Link href="https://github.com/gbengaoluwadahunsi" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View GitHub
                  </Link>
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "NovateScribe",
                    desc: "AI-Powered Notes for Medical Practitioners. Production healthcare AI with 99.9% uptime. Built with Next.js, Node.js, and HIPAA-aware ML pipelines.",
                    img: "/novateScribe.jpeg",
                    link: "https://www.novatescribe.com"
                  },
                  {
                    title: "ClinicDDI",
                    desc: "An advanced Drug-Drug Interaction (DDI) checker equipped with AI to protect clinical decision-making. Built for accuracy in clinical environments.",
                    img: "/clinicDDI.jpeg",
                    link: "https://clinic-ddi.vercel.app/"
                  },
                  {
                    title: "Carouslk",
                    desc: "A powerful carousel creation tool that enables users to build beautiful, responsive carousels for images and videos. Features drag-and-drop reordering.",
                    img: "/carouslk.jpeg",
                    link: "https://www.carouslk.com/"
                  },
                  {
                    title: "Audire",
                    desc: "An open-source, AI-powered digital library featuring podcast-quality Edge neural TTS, browser OCR for scanned PDFs, and LLM-enhanced reading comprehension.",
                    img: "/audire.jpeg",
                    link: "https://audire-roan.vercel.app/"
                  },
                  {
                    title: "4casta",
                    desc: "A premium, local-first business forecasting platform for enterprise branch management. Integrates a Voice-First AI assistant (Kokoro TTS) and high-performance edge analytics.",
                    img: "/4casta.jpeg",
                    link: "https://4casta.vercel.app"
                  },
                  {
                    title: "Document Merger",
                    desc: "Browser-based, privacy-first PDF/Word document merging utility handling sub-100ms operations solely via client-side File APIs.",
                    img: "/docmerger.png",
                    link: "https://document-merger-ebon.vercel.app/"
                  }
                ].map((prod, i) => (
                  <motion.div key={i} variants={fadeUp} className="group cursor-pointer bg-card rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                    <Link href={prod.link} target="_blank" className="flex flex-col h-full">
                      <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                        <Image src={prod.img} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-foreground">{prod.title}</h3>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed flex-1">{prod.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t bg-background">
          <div className="container px-6 py-24 md:py-32">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Let's Connect</motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-12 max-w-md">Ready to architect your next scale problem or healthcare AI solution? I am available for advisory and contract architectures.</motion.p>
                <motion.div variants={fadeUp} className="flex gap-4">
                  <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                    <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                      <Mail className="mr-2 h-5 w-5" /> Email Me
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="shadow-sm">
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

        {/* 
        <section id="blog" className="border-t bg-secondary/30">
          <BlogSection />
        </section>
        */}

      </main>

      <footer className="border-t bg-background py-12">
        <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-muted-foreground">© {new Date().getFullYear()} Gbenga Oluwadahunsi</p>
          <div className="flex gap-4">
            <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
