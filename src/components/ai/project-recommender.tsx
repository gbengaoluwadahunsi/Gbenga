"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project, Skill } from "@/types"

export function ProjectRecommender() {
  const [userInterests, setUserInterests] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<Project[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [allSkills, setAllSkills] = useState<Skill[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  const orderedSkills = useMemo(() => {
    const ai = allSkills.filter((s) => s.category === "ai")
    const rest = allSkills.filter((s) => s.category !== "ai")
    return [...ai, ...rest]
  }, [allSkills])

  const handleSkillToggle = (skillName: string) => {
    setUserInterests((prev) =>
      prev.includes(skillName) ? prev.filter((s) => s !== skillName) : [...prev, skillName]
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
          projects: projects,
        }),
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
    return (
      <div className="py-16 text-center text-slate-400">
        Loading recommender…
      </div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8 shadow-xl md:p-12"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">AI Project Recommender</h2>
            <Sparkles className="h-6 w-6 text-violet-400" />
          </div>
          <p className="text-lg text-slate-300">
            Pick AI / ML engineering topics you care about — I&apos;ll surface projects that align.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-300/90">
            AI &amp; machine learning
          </p>
          <p className="mb-4 text-sm font-medium text-slate-200">
            Select skills &amp; concepts (full-stack tags follow — same matcher):
          </p>
          <div className="flex flex-wrap gap-2">
            {orderedSkills.map((skill) => (
              <motion.button
                key={skill.id}
                type="button"
                onClick={() => handleSkillToggle(skill.name)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                  userInterests.includes(skill.name)
                    ? "bg-violet-600 text-white shadow-md ring-1 ring-violet-400/60"
                    : "border border-slate-600 bg-slate-800/90 text-slate-100 hover:border-violet-500/50 hover:bg-slate-800"
                }`}
              >
                {skill.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <Button
            onClick={handleGetRecommendations}
            disabled={userInterests.length === 0 || isAnalyzing}
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500"
          >
            {isAnalyzing ? (
              <>
                <span className="mr-2 inline-block animate-spin">⚡</span>
                Analyzing…
              </>
            ) : (
              <>
                Get recommendations
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </motion.div>

        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="mb-4 text-sm font-semibold text-slate-200">
              Recommended projects:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {recommendations.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-xl border border-slate-700 bg-slate-900/80 p-6 transition-all hover:border-violet-500/40 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
                  <p className="mb-4 text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || []).slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-violet-950/80 px-2 py-1 text-xs text-violet-200 ring-1 ring-violet-800/50"
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
