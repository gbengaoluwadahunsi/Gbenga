"use client"

import { motion } from "framer-motion"
import DataLoader from "@/lib/data-loader"
import { ExperienceItem } from "@/components/experience-item"

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function ExperienceSection() {
  const experience = DataLoader.getExperienceSorted()
  
  return (
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
          {experience.map((exp) => (
            <ExperienceItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
