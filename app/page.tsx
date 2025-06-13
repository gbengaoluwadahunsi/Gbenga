"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import photo from '../public/photo2.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ExperienceItem } from "@/components/experience-item"
import { ContactForm } from "@/components/contact-form"
import BlogSection from "@/components/blog-section"
import logo from "@/public/O.png"
import { ThemeSwitcher } from "@/components/theme-switcher"; // Added import for ThemeSwitcher

// Animation variants
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
            <ThemeSwitcher /> {/* Added ThemeSwitcher component */}
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tech-room.jpeg')" }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
          
          {/* Content container */}
          <div className="container relative z-10 space-y-8"> {/* Ensure content is above overlay */}
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="flex-1 space-y-4" variants={fadeInLeft}>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tight text-white" // Added text-white
                variants={fadeInUp}
              >
                AI Engineer & <span className="text-primary">Full Stack Software Developer</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground text-white" // Added text-white
                variants={fadeInUp}
              >
                I build exceptional digital experiences with modern web technologies.
              </motion.p>
              <motion.div className="flex gap-4 pt-4" variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild>
                    <Link href="#contact">
                      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" asChild>
                    <Link href="/Gbenga_Oluwadahunsi.pdf" target="_blank">
                      Download CV <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex-shrink-0"
              variants={fadeInRight}
            >
              <motion.div 
                className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background bg-background shadow-xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={photo}
                  alt="Gbenga Oluwadahunsi"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="bg-muted/40 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div className="space-y-4" variants={fadeInLeft}>
                <p className="text-lg">
                  I'm a passionate Software Engineer with expertise in building modern web applications. With a strong
                  foundation in both frontend and backend technologies, I create scalable, efficient, and user-friendly
                  solutions.
                </p>
                <p className="text-lg">
                  My journey in software development has equipped me with a deep understanding of JavaScript ecosystems,
                  particularly React and Node.js. I'm committed to writing clean, maintainable code and staying updated
                  with the latest industry trends.
                </p>
                <p className="text-lg">
                  Driven by the transformative potential of Artificial Intelligence, I am increasingly focusing on Generative AI and Agentic AI. I'm actively exploring and developing intelligent agents and systems that can learn, reason, and interact in more human-like ways. My goal is to leverage these cutting-edge technologies to build innovative solutions that solve complex problems and create new possibilities.
                </p>
                <p className="text-lg">
                  When I'm not coding, I enjoy contributing to open-source projects and mentoring aspiring developers. I
                  believe in continuous learning and pushing the boundaries of what's possible with technology.
                </p>
              </motion.div>
              {/* Updated Education & Certifications Card section for height and content */}
              <motion.div className="space-y-4 h-full" variants={fadeInRight}> {/* Added h-full */}
                <div className="bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark p-1 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 h-full"> {/* Added h-full */}
                  {/* Removed min-h-[300px], added h-full, flex, flex-col */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg relative h-full flex flex-col"> 
                    {/* Decorative Border/Elements (Optional) */}
                    <div className="absolute top-2 right-2 bottom-2 left-2 border-2 border-dashed border-primary/50 dark:border-primary-dark/50 rounded-md"></div>
                    
                    {/* Gold Seal/Emblem (Optional) */}
                    <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>

                    {/* Added flex flex-col flex-grow */}
                    <div className="relative z-10 pt-20 md:pt-24 text-center flex flex-col flex-grow"> 
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Education & Certifications</h3>
                      
                      <div className="mb-6 text-left space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-primary dark:text-primary-dark">Diploma in Software Engineering</h4>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">Alt School</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Courses: React Js, Vue Js, Javascript, Css3, HTML5, Node Js, Express Js.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary dark:text-primary-dark">The Fullstack Development Certification</h4>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">University of Helsinki</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Courses: React, Redux, Node.js, MongoDB, GraphQL, and TypeScript, Unit testing.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary dark:text-primary-dark">Bachelor's Degree in Biochemistry</h4>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">Adekunle Ajasin University</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">GPA: 4.44/5.0</p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">Courses: BioTechnology, Genetics Engineering and Bioinformatics.</p>
                        </div>
                      </div>
                      
                      {/* Updated Certifications list */}
                      <div className="space-y-3 text-left mt-6">
                        <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-3">Certifications</h4>
                        <div>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">Agentic AI Fundamentals: Architectures, Frameworks, and Applications by LinkedIn</p>
                        </div>
                        <div>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">AI Developer Professional Certificate by IBM</p>
                        </div>
                        <div>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">AI Engineering Specialization by Scrimba (Credential ID: UFLATER4LBV0)</p>
                        </div>
                        <div>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">Full Stack Web Development Certificate by Coursera</p>
                        </div>
                        <div>
                          {/* Date removed */}
                          <p className="text-sm text-slate-600 dark:text-slate-400">Machine Learning by Stanford University (Coursera)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="container py-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-r-8 border-blue-700 dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="JavaScript" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="TypeScript" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="React" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Next.js" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Redux" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Tailwind CSS" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="HTML5" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="CSS3" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="SASS" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Material UI" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Framer Motion" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-r-8 border-blue-700 dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Node.js" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Express.js" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="MongoDB" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="PostgreSQL" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Firebase" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="REST API" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="GraphQL" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="AWS" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Docker" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="CI/CD" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* AI Engineering Skills Card */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-r-8 border-blue-700 dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">AI Engineering</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Generative AI" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Agentic AI" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Python" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="LangChain" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="LLM APIs" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Vector DBs" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-r-8 border-blue-700 dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Tools & Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Git" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="GitHub" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="VS Code" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Agile" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Scrum" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Jira" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Figma" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Jest" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Testing Library" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-r-8 border-blue-700 dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Problem Solving" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Communication" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Teamwork" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Leadership" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Time Management" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Adaptability" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Critical Thinking" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                    <SkillBadge name="Mentoring" className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="bg-muted/40 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>
            <motion.div 
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <ExperienceItem
                title="CTO, AI & Software Engineer (Founding Engineer)"
                company="Novate AI"
                period="May 2025 - Present"
                description="Leading the technical vision and development as a founding engineer, focusing on AI and software engineering. For more information, visit our LinkedIn page."
                technologies={[]} // Add relevant technologies here if needed
              />
              <ExperienceItem
                title="Software Engineer"
                company="Automancers PTE Ltd"
                period="Oct 2024 - Jan 2025"
                description="Designed and developed a reusable React component library, reducing development time for subsequent projects by an average of 30%. Demonstrated strong problem-solving skills by resolving complex UI issues, leading to a 20% increase in user task completion rates. Developed and optimized database queries, reducing backend response times by 30%, leading to a smoother user experience."
                technologies={[]} // Assuming no specific technologies to list here, adjust if needed
              />
              <ExperienceItem
                title="Frontend Developer"
                company="Pollecode"
                period="Sep 2022 - Aug 2024"
                description="I crafted single-page applications for brands, resulting in a 3% boost in user engagement and conversion rate. I conducted performance profiling and optimizations, culminating in a 2% acceleration in application stability. Integrated third-party APIs, expanding the application's service offerings, and broadening the customer base."
                technologies={[]} // Assuming no specific technologies to list here, adjust if needed
              />
              <ExperienceItem
                title="Frontend Developer"
                company="100Devs"
                period="Aug 2021 - May 2022"
                description="Collaborated with cross-functional teams to produce streamlined workflows and improvements in project delivery time. After conducting thorough code reviews and refactoring existing projects, the outcome was a 3% drop in bugs and errors. Produced responsive and user-friendly interfaces for web applications, leading to a 3% increase in user satisfaction."
                technologies={[]} // Assuming no specific technologies to list here, adjust if needed
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="container py-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects that showcase my technical skills and creativity.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {[
              {
                title: "AI-Powered notes for medical practitioners",
                description: "A web application that allows medical practitioners to take notes, generate summaries, and extract key information using AI. It features a user-friendly interface and secure data storage.",
                technologies: ["Next.js", "TypeScript", "OpenAI API", "Node.js", "Postgresql", "AWS", "Express.js", "TailwindCSS"],
                imageUrl: "/novateScribe.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/Novate",
                liveUrl: "https://novate.vercel.app/"
              },
              {
                title: "ClemaChem Tutor",
                description: "An AI-powered web application that provides personalized chemistry tutoring, helping students understand complex concepts through interactive lessons and quizzes.",
                technologies: ["React", "PostgreSQL", "Supabase", "Groq API", "TailwindCSS"],
                imageUrl: "/clem.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/clemachem-ai-tutor-8ef05676",
                liveUrl: "https://clemachemtutor.vercel.app"
              },
              {
                title: "Krad Apparel",
                description: "Fashion design and Taloring brand with custom feature that converts prompts to client's sketch or simulated garments.",
                technologies: ["React",  "Next.js", "TailwindCSS", "Groq API"],
                imageUrl: "/krad.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/krad-apparel",
                liveUrl: "https://krad-apparel.vercel.app/"
              },
              {
                title: "Crypto learning Platform",
                description: "A crypto learning App where users can have 360 degrees training about the crypto sapce",
                technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
                imageUrl: "/crypto.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/CryptoLearner",
                liveUrl: "https://crypto-learner.vercel.app/"
              },
              {
                title: "Fashion Design Web App",
                description: "A fashion design web app showing different attires and styles to intending and current clients",
                technologies: ["React", "TailwindCSS", "Hugging Face API"],
                imageUrl: "/astonish.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/Astonish-Designs",
                liveUrl: "https://astonish-designs.com.ng/"
              },
              {
                title: "Blockchain Portfolio Tracker",
                description: "A cryptocurrency portfolio tracker with real-time price updates, AI-driven market analysis, and automated trading suggestions.",
                technologies: ["React", "Web3.js", "Node.js", "TensorFlow", "GraphQL"],
                imageUrl: "/coinsight.png",
                githubUrl: "https://github.com/gbengaoluwadahunsi/coinSight",
                liveUrl: "https://gbengaoluwadahunsi.github.io/coinSight/"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="bg-muted/40 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container space-y-10">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Others Say
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {[ // Array of testimonial data
                {
                  quote: "Gbenga is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
                  name: "Sarah Johnson",
                  title: "CTO, Tech Innovations Inc.",
                  avatar: "/sarah.png" 
                },
                {
                  quote: "Working with Gbenga was a pleasure. He not only delivered the project on time but also suggested improvements that enhanced the overall user experience.",
                  name: "Michael Chen",
                  title: "Product Manager, Digital Solutions Ltd.",
                  avatar: "/Michael.png" 
                },
                {
                  quote: "Gbenga's technical expertise and collaborative approach made our project a success. He's not just a developer but a true problem solver.",
                  name: "Joseph James", // Changed from Lisa Rodriguez
                  title: "Lead Designer, WebTech Startup", // Kept title, user can advise if it needs to change
                  avatar: "/Joseph.png" 
                }
              ].map((testimonial, index) => (
                <motion.div variants={fadeInUp} key={index} className="h-full">
                  {/* Applying new styling based on the user-provided image, adjusted to primary blue shades */}
                  <Card className="h-full flex flex-col bg-primary/10 dark:bg-primary-dark/10 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-primary/20 dark:border-primary-dark/20">
                    <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                      <div className="flex items-center gap-3">
                        <Image 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40} 
                          height={40}
                          className="rounded-full object-cover object-top h-40 w-40"
                        />
                        <div>
                          <div className="font-semibold text-sm text-slate-800 dark:text-slate-100">{testimonial.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{testimonial.title}</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-16 bg-muted/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-stretch"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Send me a message</h3> {/* Added text color for heading */}
                <ContactForm />
              </div>
              <div className="mt-8 md:mt-0 h-full flex items-center"> {/* Added flex items-center to vertically center image if it's shorter */}
                <Image 
                  src="/connection.jpeg"
                  alt="Abstract network connections"
                  width={600}
                  height={450} // Reduced height from 600 to 450
                  className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[450px] md:max-h-[450px]" // Adjusted max-h and h-auto
                />
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
    </motion.div>
  )
}
