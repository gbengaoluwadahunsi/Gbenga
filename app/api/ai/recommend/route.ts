import { NextRequest, NextResponse } from "next/server"
import type { Project } from "@/types"

/** Normalize for fuzzy match: strip punctuation and extra spaces. */
function norm(s: string) {
  return s
    .toLowerCase()
    .replace(/[/,&]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function tokens(s: string) {
  return norm(s)
    .split(" ")
    .filter((t) => t.length > 1)
}

/** True if interest matches tech label (substring either way or shared token). */
function interestMatches(interest: string, tech: string): boolean {
  const a = norm(interest)
  const b = norm(tech)
  if (a.length < 2 || b.length < 2) return false
  if (b.includes(a) || a.includes(b)) return true
  const ta = tokens(interest)
  const tb = tokens(tech)
  return ta.some((x) => tb.some((y) => x === y || y.includes(x) || x.includes(y)))
}

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

      const projectTechs = (project.technologies || []).map((t) => t.toLowerCase())
      const blob = projectTechs.join(" ").toLowerCase()

      interests.forEach((interest: string) => {
        const lowerInterest = interest.toLowerCase()
        let matched = false
        for (const tech of projectTechs) {
          if (interestMatches(interest, tech)) {
            matched = true
            break
          }
        }
        if (!matched && blob.includes(lowerInterest.replace(/\s+/g, " ").trim())) {
          matched = true
        }
        if (matched) {
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
