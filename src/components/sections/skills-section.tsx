"use client"

import { motion } from "framer-motion"
import DataLoader from "@/lib/data-loader"
import { Card, CardContent } from "@/components/ui/card"
import { SkillBadge } from "@/components/skill-badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const categoryColors: Record<string, string> = {
  frontend: "border-blue-700",
  backend: "border-purple-700",
  ai: "border-pink-700",
  tools: "border-amber-700",
  soft: "border-green-700"
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  ai: "AI Engineering",
  tools: "Tools & Methods",
  soft: "Soft Skills"
}

export function SkillsSection() {
  const categories = DataLoader.getSkillCategories()
  
  return (
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
        {categories.map((category) => {
          const skills = DataLoader.getSkillsByCategory(category)
          const borderColor = categoryColors[category]
          const label = categoryLabels[category]
          
          return (
            <motion.div key={category} variants={fadeInUp} className="h-full">
              <Card 
                className={`h-full flex flex-col bg-white border-r-8 ${borderColor} dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <SkillBadge 
                        key={skill.id}
                        name={skill.name} 
                        className="bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}
