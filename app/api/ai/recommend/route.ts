import { NextRequest, NextResponse } from "next/server"
import type { Project } from "@/types"

export async function POST(request: NextRequest) {
  try {
    const { interests, projects } = await request.json()

    if (!interests || !Array.isArray(interests) || interests.length === 0) {
      return NextResponse.json(
        { error: "Interests array is required" },
        { status: 400 }
      )
    }

    if (!projects || !Array.isArray(projects)) {
      return NextResponse.json(
        { error: "Projects array is required" },
        { status: 400 }
      )
    }

    // Score each project based on interest match
    const scoredProjects = projects.map((project: Project) => {
      let score = 0

      // Check technology matches
      const projectTechs = project.technologies.map((t) => t.toLowerCase())
      interests.forEach((interest) => {
        const lowerInterest = interest.toLowerCase()
        if (projectTechs.some((tech) => tech.includes(lowerInterest))) {
          score += 2
        }
      })

      // Boost featured projects
      if (project.featured) {
        score += 1
      }

      // Boost recent projects
      const currentYear = new Date().getFullYear()
      if (project.year === currentYear) {
        score += 0.5
      }

      return { ...project, score }
    })

    // Sort by score and get top 4
    const recommendations = scoredProjects
      .filter((p) => p.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(({ score, ...project }) => project) // Remove score from response

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("AI recommendation error:", error)
    return NextResponse.json(
      { error: "Failed to get recommendations" },
      { status: 500 }
    )
  }
}
