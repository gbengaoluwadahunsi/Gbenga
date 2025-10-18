"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types"

export function ProjectRecommender() {
  const [userInterests, setUserInterests] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<Project[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [allSkills, setAllSkills] = useState<any[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load skills and projects on mount - only on client
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/portfolio/data")
        const data = await response.json()
        setAllSkills(data.skills || [])
        setProjects(data.projects || [])
      } catch (error) {
        console.error("Failed to load data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const handleSkillToggle = (skillName: string) => {
    setUserInterests((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    )
  }

  const handleGetRecommendations = async () => {
    if (userInterests.length === 0) return

    setIsAnalyzing(true)

    try {
      const response = await fetch("/api/ai/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          interests: userInterests,
          projects: projects
        })
      })

      const data = await response.json()
      setRecommendations(data.recommendations || [])
    } catch (error) {
      console.error("Failed to get recommendations:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  if (isLoading) {
    return <div className="py-16 text-center text-slate-600 dark:text-slate-400">Loading recommendations...</div>
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold">AI Project Recommender</h2>
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Tell me what you're interested in, and I'll recommend relevant projects
          </p>
        </motion.div>

        {/* Skill Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Select technologies you're interested in:
          </p>
          <div className="flex flex-wrap gap-2">
            {allSkills.slice(0, 20).map((skill: any) => (
              <motion.button
                key={skill.id}
                onClick={() => handleSkillToggle(skill.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  userInterests.includes(skill.name)
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
                }`}
              >
                {skill.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Button
            onClick={handleGetRecommendations}
            disabled={userInterests.length === 0 || isAnalyzing}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            {isAnalyzing ? (
              <>
                <span className="animate-spin mr-2">⚡</span>
                Analyzing...
              </>
            ) : (
              <>
                Get Recommendations
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Recommended projects based on your interests:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
