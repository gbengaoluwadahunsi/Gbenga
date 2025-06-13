"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
      className="h-full rounded-lg overflow-hidden group" // Added group for hover effects on children
    >
      <Card className="overflow-hidden flex flex-col h-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
        <motion.div 
          className="relative h-52 w-full overflow-hidden" // Increased height and added overflow-hidden
        >
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-300" // Added group-hover effect
          />
           
        </motion.div>
        <CardContent className="p-5 flex-grow flex flex-col"> {/* Adjusted padding */}
          <motion.h3 
            className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100" // Adjusted font size and color
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow" // Adjusted font size, color, and added flex-grow
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-200 dark:border-slate-700" // Added border-t for separation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {technologies.map((tech) => (
              <SkillBadge key={tech} name={tech} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full" /> // Custom styling for badges
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700"> {/* Adjusted padding and added background */}
          <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full h-9 rounded-md px-3 text-sm font-medium border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Github className="h-3.5 w-3.5 mr-1.5" /> {/* Adjusted icon size and added margin */}
              Code
            </Link>
          </motion.div>
          <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full h-9 rounded-md px-3 text-sm font-medium bg-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> {/* Adjusted icon size and added margin */}
              Demo
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
