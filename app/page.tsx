"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ExternalLink, Code2, Zap, Users, TrendingUp, CheckCircle2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AIChat } from "../src/components/ai/ai-chat"
import { ProjectRecommender } from "../src/components/ai/project-recommender"
import creativePhoto from '../public/two.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceItem } from "@/components/experience-item"
import { ContactForm } from "@/components/contact-form"
import BlogSection from "@/components/blog-section"
import logo from "@/public/O.png"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Animation variants for hero
const heroImageVariant = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
}

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
        <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
          {/* Sophisticated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 z-0" />
          
          {/* Subtle accent shapes */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <motion.div 
                className="flex flex-col justify-center space-y-8"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
              >
                {/* Badge/Tagline */}
                
                {/* Main Headline */}
                <motion.div variants={heroTextVariant} className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="block text-slate-900 dark:text-white">
                      Building AI-powered
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      products at scale
                    </span>
                  </h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p 
                  variants={heroTextVariant}
                  className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-md"
                >
                  Full-stack engineer & AI architect. Designing intelligent systems that solve complex problems. Previously building at scale for enterprise teams.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  variants={heroTextVariant}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold"
                    >
                      <Link href="#contact">
                        Get in touch
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-slate-300 dark:border-slate-600"
                    >
                      <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank">
                        Download resume
                        <Download className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={heroTextVariant}
                  className="flex items-center gap-6 pt-4"
                >
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Connect</p>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="https://github.com/gbengaoluwadahunsi" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="https://www.linkedin.com/in/gbengaoluwadahunsi/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="mailto:gbengaoluwadahunsi@gmail.com">
                          <Mail className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Single Hero Image */}
              <motion.div 
                className="relative w-full h-48 md:h-96 lg:h-full flex items-start justify-center"
                variants={heroImageVariant}
              >
                <motion.div 
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={creativePhoto}
                    alt="Gbenga Oluwadahunsi - AI Engineer"
                    width={500}
                    height={600}
                    className="object-cover w-full h-full object-top"
                    priority
                  />
                  {/* Subtle border gradient */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 dark:border-white/10" />
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
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
                    <div className="h-10 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">About Me</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">
                    Full-Stack Engineer & AI Architect
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Crafting intelligent solutions at scale with enterprise-grade architecture
                  </p>
                </div>
                
                {/* Main Description */}
                <div className="space-y-4">
                  <motion.p 
                    variants={fadeInUp}
                    className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    With 4+ years of experience in full-stack development and AI architecture, I specialize in designing and building scalable systems that drive measurable business impact. My expertise spans both frontend and backend technologies, enabling me to architect holistic solutions that balance user experience with technical excellence.
                  </motion.p>

                  <motion.p 
                    variants={fadeInUp}
                    className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    Currently focused on Generative AI and Agentic systems, I'm building intelligent applications that leverage cutting-edge technologies to solve complex problems and create transformative possibilities. I'm passionate about mentoring teams and establishing best practices.
                  </motion.p>
                </div>

                {/* Key Highlights */}
                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/10 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-50/50 dark:from-purple-950/30 dark:to-purple-950/10 rounded-lg border border-purple-100 dark:border-purple-900/30">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects Built</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-50/50 dark:from-amber-950/30 dark:to-amber-950/10 rounded-lg border border-amber-100 dark:border-amber-900/30">
                    <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">500M+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Data Points Processed</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-50/50 dark:from-emerald-950/30 dark:to-emerald-950/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Client Satisfaction</p>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
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
                          },
                          {
                            title: "Bachelor's in Biochemistry",
                            school: "Adekunle Ajasin University",
                            focus: "GPA: 4.44/5.0 • Bioinformatics",
                            icon: "🔬"
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
                        "System Architecture",
                        "AI/ML Integration",
                        "Performance Optimization",
                        "Team Leadership",
                        "DevOps & Infrastructure",
                        "Product Strategy"
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
                Mastering modern full-stack development with specialized expertise in AI engineering and enterprise architecture
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
                      {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'AWS'].map((tech) => (
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
                      {['GenAI', 'Agentic AI', 'Python', 'LangChain', 'LLM APIs', 'Vector DB'].map((tech) => (
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
                      {['Agentic AI', 'LLM Ops', 'RAG Systems', 'ML Deployment', 'System Design', 'Architecture'].map((skill) => (
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
                Driving impact across leading companies and ventures
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
                  description: "Leading the technical vision and development as a founding engineer, focusing on AI-powered healthcare solutions.",
                  achievements: [
                    "Architecting scalable AI healthcare platform",
                    "Building founding engineering team",
                    "Implementing ML pipelines for medical data",
                    "Designing HIPAA-compliant infrastructure"
                  ],
                  isCurrent: true
                },
                {
                  title: "Software Engineer",
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
                  title: "Frontend Developer",
                  company: "Pollecode",
                  period: "Sep 2022 - Aug 2024",
                  location: "Nigeria",
                  isRemote: true,
                  description: "Crafted high-performance SPAs and optimized user engagement.",
                  achievements: [
                    "3% boost in user engagement",
                    "2% acceleration in performance",
                    "Integrated multiple third-party APIs",
                    "Led code review initiatives"
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
                    "3% reduction in bugs through code reviews",
                    "3% improvement in user satisfaction",
                    "Developed responsive interfaces",
                    "Collaborated with design team"
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
                Innovative solutions built with cutting-edge technologies and best practices
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
                  metrics: { performance: "<100ms", users: "50K+ monthly" }
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

        {/* Testimonials Section - Enhanced Redesigned */}
        <motion.section 
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
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Social Proof</span>
                <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                What Clients & Colleagues Say
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Trusted by leaders and teams across innovative organizations
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  quote: "Gbenga is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
                  name: "Sarah Johnson",
                  title: "CTO",
                  company: "Tech Innovations Inc.",
                  avatar: "/sarah.png" 
                },
                {
                  quote: "Working with Gbenga was a pleasure. He not only delivered the project on time but also suggested improvements that enhanced the overall user experience.",
                  name: "Michael Chen",
                  title: "Product Manager",
                  company: "Digital Solutions Ltd.",
                  avatar: "/Michael.png" 
                },
                {
                  quote: "Gbenga's technical expertise and collaborative approach made our project a success. He's not just a developer but a true problem solver.",
                  name: "Joseph James",
                  title: "Lead Designer",
                  company: "WebTech Startup",
                  avatar: "/Joseph.png" 
                }
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Top gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
                    
                    <CardContent className="p-8 space-y-5">
                      {/* Stars */}
                      <motion.div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2 }}
                            className="flex"
                          >
                            <Star className="h-5 w-5 fill-blue-600 text-blue-600 dark:fill-blue-400 dark:text-blue-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed italic text-base">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Divider */}
                      <div className="h-px bg-slate-200 dark:bg-slate-700" />

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-2">
                        <Image 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56} 
                          height={56}
                          className="rounded-full object-cover h-14 w-14 border-2 border-blue-100 dark:border-blue-900/30"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{testimonial.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
