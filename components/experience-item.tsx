"use client"

import { SkillBadge } from "@/components/skill-badge"
import { motion } from "framer-motion"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
  return (
    <motion.div 
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary before:ring-4 before:ring-primary/20"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <motion.div 
        className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-muted-foreground">
          {company} | {period}
        </div>
      </motion.div>
      <motion.p 
        className="mt-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <motion.div 
        className="flex flex-wrap gap-1 mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillBadge name={tech} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
