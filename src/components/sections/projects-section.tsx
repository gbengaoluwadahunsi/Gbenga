"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import DataLoader from "@/lib/data-loader"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

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

export function ProjectsSection() {
  const allProjects = DataLoader.getProjects()
  const categories = DataLoader.getProjectCategories()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const filteredProjects = selectedCategory 
    ? allProjects.filter(project => project.category === selectedCategory)
    : allProjects
  
  return (
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
      
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap gap-2 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="transition-all"
        >
          All Projects
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8"
        initial="initial"
        whileInView="animate"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground">
            No projects found in this category. Try selecting a different filter.
          </p>
        </motion.div>
      )}
    </motion.section>
  )
}
