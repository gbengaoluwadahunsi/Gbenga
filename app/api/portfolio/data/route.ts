import { NextResponse } from "next/server"
import DataLoader from "@/lib/data-loader"

export async function GET() {
  try {
    const skills = DataLoader.getAllSkills()
    const projects = DataLoader.getProjects()

    return NextResponse.json({
      skills,
      projects,
      success: true
    })
  } catch (error) {
    console.error("Portfolio data error:", error)
    return NextResponse.json(
      { error: "Failed to fetch portfolio data" },
      { status: 500 }
    )
  }
}
