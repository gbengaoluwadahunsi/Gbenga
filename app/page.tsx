"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ExternalLink, Code2, Zap, Users, TrendingUp, CheckCircle2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ProjectRecommender } from "../src/components/ai/project-recommender"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceItem } from "@/components/experience-item"
import { ContactForm } from "@/components/contact-form"
import BlogSection from "@/components/blog-section"
import logo from "@/public/O.png"
import { ThemeSwitcher } from "@/components/theme-switcher"

const heroTextVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const badgeVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 }
}

// Animation variants for other sections
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <motion.div className="flex min-h-screen flex-col">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Gbenga Oluwadahunsi" width={80} height={80} />
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6"> 
            
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Mail</span>
              </Link>
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
          {/* Background photo: visible; light scrim keeps type readable */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <Image
              src="/me.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_22%_center] brightness-[0.98] saturate-[0.92] dark:brightness-[0.88] dark:saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/58 via-white/52 to-violet-100/38 dark:from-slate-950/45 dark:via-slate-900/48 dark:to-violet-950/30" />
          </div>

          <motion.div
            className="absolute top-0 right-0 z-[1] w-96 h-96 bg-violet-100/30 dark:bg-violet-900/10 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 z-[1] w-80 h-80 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl"
            animate={{ x: [0, -36, 0], y: [0, -20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div
                className="lg:col-span-7 flex flex-col justify-center space-y-8"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
              >
                <motion.div variants={heroTextVariant} className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                    Available for work
                  </span>
                  <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-100/90 px-3 py-1.5 text-xs font-semibold text-violet-900 dark:border-violet-800 dark:bg-violet-950/60 dark:text-violet-100">
                    Antler-backed founder
                  </span>
                </motion.div>

                <motion.div variants={heroTextVariant} className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] text-slate-900 dark:text-white dark:[text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
                    Biochemist turned{" "}
                    <span className="font-serif italic text-violet-600 dark:text-violet-400">AI architect</span>
                    {" — "}building systems that matter.
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-200 dark:[text-shadow:0_1px_16px_rgba(0,0,0,0.45)] leading-relaxed max-w-2xl font-medium">
                    I build AI systems at the intersection of healthcare and engineering — from architecture to deployment. Private, decentralized, and edge AI are where I spend my deepest technical focus.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 dark:[text-shadow:0_1px_12px_rgba(0,0,0,0.4)] leading-relaxed max-w-2xl">
                    CTO at Novate AI, co-building AI tools for healthcare practitioners. AI Engineer with 4+ years shipping production software and AI products.
                  </p>
                </motion.div>

                <motion.div
                  variants={heroTextVariant}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold shadow-md"
                  >
                    <Link href="#projects">
                      See my work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-300 bg-white/80 dark:bg-slate-950/40 dark:border-slate-600"
                  >
                    <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank" rel="noopener noreferrer">
                      Download resume
                      <Download className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-300 bg-white/80 dark:bg-slate-950/40 dark:border-slate-600"
                  >
                    <Link href="#contact">
                      Get in touch
                    </Link>
                  </Button>
                </motion.div>

                <motion.div variants={heroTextVariant} className="space-y-3 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Who are you?
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                    {[
                      { label: "Investor — Novate AI story", href: "https://www.novatescribe.com", external: true },
                      { label: "Company — see my work", href: "#projects", external: false },
                      { label: "Collaborator — let's talk", href: "#contact", external: false },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-violet-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-violet-700 dark:hover:bg-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={heroTextVariant} className="flex items-center gap-6 pt-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Connect</p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                      <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                      <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                      <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                        <Mail className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-5 flex flex-col gap-4 lg:pt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {[
                  { value: "500+", label: "Practitioners (NovateScribe)" },
                  { value: "3", label: "Products in production" },
                  { value: "4+", label: "Years experience" },
                  { value: "1 of 1,300+", label: "Selected by Antler" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-slate-200/80 bg-slate-100/60 px-6 py-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50"
                  >
                    <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{m.value}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{m.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section - Enterprise Redesigned */}
        <motion.section 
          id="about" 
          className="relative py-24 md:py-32 lg:py-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Sophisticated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 z-0" />
          
          <div className="container relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {/* Left Content */}
              <motion.div className="space-y-8 pt-2" variants={fadeInLeft}>
                {/* Section Label & Title */}
                <div className="space-y-3">
                  <motion.div variants={fadeInUp} className="flex items-center gap-3">
                    <div className="h-10 w-1 bg-gradient-to-b from-violet-600 to-purple-600 rounded-full" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">About Me</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
                    From Biochemistry to AI architecture
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Healthcare AI, engineered end-to-end — with privacy, decentralization, and edge deployment in mind.
                  </p>
                </div>
                
                {/* Main Description */}
                <div className="space-y-4">
                  <motion.p 
                    variants={fadeInUp}
                    className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    My path started in Biochemistry, moved into full-stack engineering, and converged on AI systems for real clinical workflows. Today I lead engineering at Novate AI (Antler-backed), shipping tools practitioners actually use — not slide-deck demos.
                  </motion.p>

                  <motion.p 
                    variants={fadeInUp}
                    className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    I care deeply about where models run: on-device and at the edge when latency and privacy matter, and architectures that stay maintainable as products grow. I still mentor, review code, and keep one foot in delivery — because credibility comes from shipping.
                  </motion.p>
                </div>

                {/* Key Highlights */}
                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years experience</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-50/50 dark:from-purple-950/30 dark:to-purple-950/10 rounded-lg border border-purple-100 dark:border-purple-900/30">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects shipped</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-50/50 dark:from-amber-950/30 dark:to-amber-950/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                    <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">500+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Practitioners (NovateScribe)</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-50/50 dark:from-emerald-950/30 dark:to-emerald-950/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">3</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Products in production</p>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4">
                  <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="#contact">
                      Let's Collaborate
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right - Education & Achievements */}
              <motion.div variants={fadeInRight} className="space-y-6">
                {/* Education Card */}
                <div className="group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                  
                  <Card className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">🎓</span>
                        </div>
                        Education
                      </h3>
                      
                      <div className="space-y-5">
                        {[
                          {
                            title: "PhD Candidate, Biomedical Sciences (Pharmacology)",
                            school: "University of Science, Malaysia",
                            focus: "Viva pending",
                            icon: "🎓"
                          },
                          {
                            title: "Master's in Industrial Biochemistry",
                            school: "University of Ibadan",
                            focus: "Graduate studies — Industrial Biochemistry",
                            icon: "🧪"
                          },
                          {
                            title: "Bachelor's in Biochemistry",
                            school: "Adekunle Ajasin University",
                            focus: "GPA: 4.44/5.0 • Biochemistry",
                            icon: "🔬"
                          },
                          {
                            title: "Diploma in Software Engineering",
                            school: "Alt School",
                            focus: "React, Vue, Node.js, Modern Web Stack",
                            icon: "🚀"
                          },
                          {
                            title: "Fullstack Development Certification",
                            school: "University of Helsinki",
                            focus: "MERN Stack, GraphQL, TypeScript",
                            icon: "💻"
                          }
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            variants={fadeInUp}
                            className="pb-5 border-b border-slate-200 dark:border-slate-700 last:pb-0 last:border-0"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-2xl">{item.icon}</div>
                              <div className="flex-1">
                                <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">{item.title}</h4>
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">{item.school}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{item.focus}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Certifications Badge */}
                      <div className="pt-2 space-y-3 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Professional Certifications</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Agentic AI • LinkedIn",
                            "AI Developer • IBM",
                            "AI Engineering • Scrimba"
                          ].map((cert, i) => (
                            <motion.div
                              key={i}
                              variants={fadeInUp}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-amber-50 dark:from-amber-950/20 dark:to-amber-950/10 rounded-full border border-amber-200 dark:border-amber-800/30"
                            >
                              <Star className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                              <span className="text-xs font-medium text-amber-900 dark:text-amber-200">{cert}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Expertise Areas */}
                <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-cyan-600" />
                  
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-lg flex items-center justify-center text-white text-sm">⚡</div>
                      Core Competencies
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Healthcare AI architecture",
                        "Privacy-first & edge patterns",
                        "AI/ML integration",
                        "Performance & reliability",
                        "Team leadership",
                        "Product strategy"
                      ].map((skill, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          className="px-3 py-2 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800/30"
                        >
                          <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">✓ {skill}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section - Interactive Enterprise Redesign */}
        <motion.section 
          id="skills" 
          className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-slate-50/50 dark:from-slate-900/50 dark:via-blue-950/20 dark:to-slate-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-16">
            {/* Section Header */}
            <motion.div 
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Expertise</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Skills & Technologies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Full-stack delivery with a bias toward healthcare AI: retrieval, agents, and production hardening — including private, decentralized, and edge deployments when the problem demands it.
              </p>
            </motion.div>

            {/* Skills Grid with Enhanced Design */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {/* Frontend Skills */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Frontend</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">User Interfaces</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion'].map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Expert</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend Skills */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Backend</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">APIs & Databases</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'AWS', 'FastAPI'].map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Expert</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Engineering Skills */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <TrendingUp className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Engineering</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">ML & LLMs</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Healthcare AI', 'RAG & evals', 'Python', 'LangChain', 'Edge / on-device', 'Privacy-first design'].map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Advanced</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tools & DevOps Skills */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tools & DevOps</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Infrastructure</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS', 'CI/CD', 'Jira', 'Jest'].map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-green-600 dark:text-green-400">Advanced</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-gradient-to-r from-green-600 to-green-400 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Soft Skills */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 to-rose-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl group-hover:bg-rose-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Users className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Soft Skills</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Leadership</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Leadership', 'Communication', 'Problem Solving', 'Mentoring', 'Adaptability', 'Teamwork'].map((skill) => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Expert</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Professional Development */}
              <motion.div variants={fadeInUp} className="group">
                <Card className="h-full bg-white dark:bg-slate-800/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-colors duration-300" />
                  
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-800/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Sparkles className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Latest Focus</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Current Learning</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Federated & decentralized patterns', 'LLM ops', 'Edge inference', 'System design', 'Secure data flows', 'Architecture'].map((skill) => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Growth Track</span>
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">Accelerating</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full w-3/4 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                          animate={{ width: ['60%', '85%', '60%'] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section - Timeline Redesigned */}
        <motion.section 
          id="experience" 
          className="relative py-24 md:py-32 lg:py-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-16">
            {/* Section Header */}
            <motion.div 
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Journey</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Professional Experience
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                From early-career delivery to founding-team leadership — with outcomes you can trace in code and products.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div 
              className="space-y-0"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "CTO, AI & Software Engineer",
                  company: "Novate AI",
                  period: "May 2025 - Present",
                  location: "Malaysia",
                  isRemote: false,
                  description: "Founding engineer & CTO for an Antler-backed healthtech company — product, platform, and compliance-aware AI for clinical workflows.",
                  achievements: [
                    "Defined technical roadmap for NovateScribe and related healthcare AI products",
                    "Shipped HIPAA-aware architecture with pragmatic security reviews",
                    "Built ML/data pipelines for real-world medical notes and document workflows",
                    "Hired and mentored engineers while staying hands-on in the codebase"
                  ],
                  isCurrent: true
                },
                {
                  title: "AI Product Engineer",
                  company: "Automancers PTE Ltd",
                  period: "Oct 2024 - Jan 2025",
                  location: "Singapore",
                  isRemote: true,
                  description: "Designed reusable component library and optimized database performance.",
                  achievements: [
                    "30% reduction in development time",
                    "20% increase in user task completion",
                    "30% improvement in backend response times",
                    "Mentored junior developers"
                  ],
                  isCurrent: false
                },
                {
                  title: "Fullstack Engineer",
                  company: "Pollecode",
                  period: "Sep 2022 - Aug 2024",
                  location: "Nigeria",
                  isRemote: true,
                  description:
                    "Full-stack product delivery: React UIs, REST integrations, and server-side boundaries—owning features from API usage and data flows through to shipped interfaces.",
                  achievements: [
                    "Rebuilt core app architecture across client and data access layers, improving load time and retention on major product surfaces",
                    "Integrated 5+ third-party systems (payments, auth, APIs)—wiring secure flows end-to-end, not only in the browser",
                    "Led weekly code reviews spanning UI and integration code, aligning the team on quality for APIs and components",
                    "Partnered with product to ship full-stack increments: contracts, integrations, and UX—without regressions",
                  ],
                  isCurrent: false
                },
                {
                  title: "Frontend Developer",
                  company: "100Devs",
                  period: "Aug 2021 - May 2022",
                  location: "USA",
                  isRemote: true,
                  description: "Collaborated on responsive interfaces and code quality improvements.",
                  achievements: [
                    "Delivered 4 client projects end-to-end within tight timelines",
                    "Collaborated with designers to ship pixel-accurate responsive interfaces",
                    "Introduced a PR review process that cut regression bugs significantly",
                    "Documented patterns so the team could reuse components consistently"
                  ],
                  isCurrent: false
                }
              ].map((exp, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative mb-16 pb-8 last:mb-0 last:pb-0">
                  {/* Timeline line */}
                  {index !== 3 && (
                    <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-600/30 to-transparent dark:from-blue-400/30" />
                  )}
                  
                  <div className="flex gap-8 md:gap-12">
                    {/* Timeline dot and period - Left side */}
                    <div className="flex flex-col items-center gap-4 flex-shrink-0">
                      <motion.div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${exp.isCurrent ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{exp.period}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                          📍 {exp.isRemote ? `Remote - ${exp.location}` : exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Experience content - Right side */}
                    <div className="flex-1 pt-2">
                      <div className="space-y-4">
                        {/* Badge for current role */}
                        {exp.isCurrent && (
                          <motion.div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/40 dark:to-purple-950/40 rounded-full border border-blue-300 dark:border-blue-700">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
                            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Current Role</span>
                          </motion.div>
                        )}

                        {/* Title and company */}
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Key Achievements</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section - Advanced Filtering Redesigned */}
        <motion.section 
          id="projects" 
          className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-slate-50/50 dark:from-slate-900/50 dark:via-blue-950/20 dark:to-slate-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-16">
            {/* Section Header */}
            <motion.div 
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Portfolio</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Live demos, real user numbers, and stacks chosen for maintainability — not hype.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "AI-Powered Notes for Medical Practitioners",
                  description: "A web application that allows medical practitioners to take notes, generate summaries, and extract key information using AI.",
                  technologies: ["Next.js", "TypeScript", "OpenAI API", "Node.js", "PostgreSQL", "AWS"],
                  imageUrl: "/novateScribe.png",
                  githubUrl: "https://github.com/gbengaoluwadahunsi/Novate",
                  liveUrl: "https://www.novatescribe.com",
                  category: "AI/Healthcare",
                  metrics: { performance: "99.9% uptime", users: "500+ practitioners" }
                },
                {
                  title: "Document Merger",
                  description: "A powerful browser-based tool that merges PDFs, Word documents, and images with drag & drop functionality.",
                  technologies: ["React", "Next.js", "TypeScript", "PDF-lib", "File API"],
                  imageUrl: "/docmerger.png",
                  githubUrl: "https://github.com/gbengaoluwadahunsi/document-merger",
                  liveUrl: "https://document-merger-ebon.vercel.app/",
                  category: "Productivity",
                  metrics: { performance: "<100ms", users: "Browser-based (privacy-first)" }
                },
                {
                  title: "Catalystar Environmental Services",
                  description: "Professional environmental consulting platform with service booking and impact assessment tools.",
                  technologies: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"],
                  imageUrl: "/catalystar.png",
                  githubUrl: "https://github.com/gbengaoluwadahunsi/Catalystar",
                  liveUrl: "https://catalystar.vercel.app/",
                  category: "Environmental",
                  metrics: { performance: "SEO Optimized", users: "B2B SaaS" }
                },
                {
                  title: "PrepGuide",
                  description: "Comprehensive exam preparation platform for Nigerian entrance exams with personalized learning paths.",
                  technologies: ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"],
                  imageUrl: "/prepguide.png",
                  githubUrl: "",
                  liveUrl: "https://www.prepguide.com.ng",
                  category: "Education",
                  metrics: { performance: "Real-time", users: "1000+ daily" }
                },
                {
                  title: "Krad Apparel",
                  description: "Fashion design platform with AI-powered garment visualization using Groq API integration.",
                  technologies: ["React", "Next.js", "Groq API", "TailwindCSS"],
                  imageUrl: "/krad.png",
                  githubUrl: "https://github.com/gbengaoluwadahunsi/krad-apparel",
                  liveUrl: "https://krad-apparel.vercel.app/",
                  category: "Fashion/AI",
                  metrics: { performance: "Fast", users: "Fashion enthusiasts" }
                },
                {
                  title: "Astonish Designs Fashion",
                  description: "Fashion portfolio showcasing design collections with AI-powered design suggestions.",
                  technologies: ["React", "TailwindCSS", "Hugging Face API"],
                  imageUrl: "/astonish.png",
                  githubUrl: "https://github.com/gbengaoluwadahunsi/Astonish-Designs",
                  liveUrl: "https://astonish-designs.com.ng/",
                  category: "Fashion",
                  metrics: { performance: "Responsive", users: "Global audience" }
                }
              ].map((project, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <Card className="h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    {/* Image container */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 dark:border-slate-700">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-xs">
                            <p className="font-semibold text-slate-600 dark:text-slate-400 capitalize">{key}</p>
                            <p className="text-blue-600 dark:text-blue-400 font-bold">{value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-2 pt-2">
                        {project.liveUrl && (
                          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold flex-1">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Visit Website
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild size="sm" variant="outline" className="flex-1">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* View All CTA */}
            <motion.div className="flex justify-center pt-8" variants={fadeInUp}>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30 font-semibold">
                <Link href="#projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* References & credibility */}
        <motion.section 
          className="relative py-24 md:py-32 lg:py-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-12">
            <motion.div 
              className="space-y-4 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-violet-600 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">References</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-violet-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Verifiable credibility
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                I don&apos;t rely on anonymous quotes. The fastest way to validate my work is public: products, users, and a traceable professional history on LinkedIn.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-slate-200 dark:border-slate-700 shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">LinkedIn</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Recommendations, endorsements, and a full timeline of roles — including Novate AI and Antler — are on my profile. If we&apos;ve worked together, I&apos;m happy to connect you for a direct reference.
                    </p>
                    <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white">
                      <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" rel="noopener noreferrer">
                        View LinkedIn profile
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-slate-200 dark:border-slate-700 shadow-lg">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-semibold uppercase tracking-wider">What you can verify today</span>
                    </div>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">→</span>
                        <span>
                          <Link href="https://www.novatescribe.com" className="font-medium text-violet-600 dark:text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">NovateScribe</Link> — live product for medical practitioners
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">→</span>
                        <span>
                          <Link href="https://document-merger-ebon.vercel.app/" className="font-medium text-violet-600 dark:text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">Document Merger</Link> — public app with real usage metrics
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">→</span>
                        <span>Antler selection and cohort context are reflected across my public founder story and LinkedIn.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section - Premium Redesigned */}
        <motion.section 
          id="contact" 
          className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-purple-50/30 to-blue-50 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-blue-950/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
            {/* Section Header */}
            <motion.div 
              className="space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center justify-center gap-3">
                <div className="h-10 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Get In Touch</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Let's Start Something Great
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left - Form */}
              <div className="flex flex-col justify-center order-2 md:order-1">
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Send Me a Message</h3>
                  <p className="text-slate-600 dark:text-slate-400">Fill out the form and I'll get back to you as soon as possible.</p>
                </div>
                <ContactForm />
              </div>

              {/* Right - Image & CTA */}
              <div className="space-y-6 order-1 md:order-2">
                <div className="relative h-96 md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl group">
                  <Image 
                    src="/connection.jpeg"
                    alt="Let's Connect"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Overlay CTA */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-6">
                    <div className="space-y-2 text-center">
                      <h4 className="text-2xl md:text-3xl font-bold text-white">Available for Work</h4>
                      <p className="text-white/80 text-lg">Let's build something amazing together</p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="flex flex-wrap gap-3 justify-center pt-4">
                      <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-blue-600 font-semibold shadow-lg">
                        <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                          <Mail className="mr-2 h-5 w-5" />
                          Email Me
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                        <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank">
                          <Linkedin className="mr-2 h-5 w-5" />
                          LinkedIn
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section 
          id="blog" 
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <BlogSection />
        </motion.section>

        {/* AI Project Recommender Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container">
            <ProjectRecommender />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Gbenga Oluwadahunsi. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/gbengaoluwadahunsi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gbengaoluwadahunsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contact@gbengaoluwadahunsi.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      {/* AI Chat Widget */}
      
    </motion.div>
  )
}
