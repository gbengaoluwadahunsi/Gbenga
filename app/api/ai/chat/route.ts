import { NextRequest, NextResponse } from "next/server"
import DataLoader from "@/lib/data-loader"

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Build context from portfolio data
    const projects = context?.projects || DataLoader.getProjects()
    const skills = context?.skills || DataLoader.getAllSkills()
    const experience = context?.experience || DataLoader.getExperience()
    const stats = DataLoader.getStats()

    // Simple AI response logic (demonstrates understanding of data)
    let reply = ""

    const lowerMessage = message.toLowerCase()

    // Projects queries
    if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("build")
    ) {
      const projectCount = projects.length
      const featuredCount = projects.filter((p) => p.featured).length
      reply = `I've worked on ${projectCount} projects, with ${featuredCount} featured ones. Some highlights include:\n\n${projects
        .slice(0, 3)
        .map((p) => `• ${p.title} - ${p.description}`)
        .join("\n")}`
    }

    // Skills / stack queries
    else if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("technologies") ||
      lowerMessage.includes("tech") ||
      lowerMessage.includes("stack") ||
      lowerMessage.includes("expertise") ||
      lowerMessage.includes("tool") ||
      lowerMessage.includes("language") ||
      lowerMessage.includes("framework")
    ) {
      const names = (cat: string) => skills.filter((s) => s.category === cat).map((s) => s.name)
      reply = `Here's Gbenga's tech stack:\n\n▸ Frontend: ${names("frontend").join(", ")}\n\n▸ Backend: ${names("backend").join(", ")}\n\n▸ AI / ML: ${names("ai").slice(0, 14).join(", ")}\n\n▸ Tools: ${names("tools").join(", ")}`
    }

    // Experience queries
    else if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("role") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("work at")
    ) {
      const current = DataLoader.getCurrentRole()
      reply = `I have ${stats.yearsOfExperience}+ years of experience. Currently, I'm ${current?.title} at ${current?.company}.\n\nPrevious roles include:\n${experience
        .filter((e) => !e.isCurrentRole)
        .map((e) => `• ${e.title} at ${e.company}`)
        .join("\n")}`
    }

    // AI/ML specific queries
    else if (
      lowerMessage.includes("ai") ||
      lowerMessage.includes("machine learning") ||
      lowerMessage.includes("llm") ||
      lowerMessage.includes("generative")
    ) {
      const aiSkills = skills.filter((s) => s.category === "ai")
      const aiProjects = projects.filter((p) =>
        p.category.toLowerCase().includes("ai")
      )
      reply = `I'm passionate about AI engineering! I have expertise in:\n${aiSkills.map((s) => `• ${s.name} (${s.proficiency})`).join("\n")}\n\nRelevant projects: ${aiProjects.map((p) => p.title).join(", ")}`
    }

    // General greeting
    else if (
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey")
    ) {
      reply = `Hey! I'm an AI assistant trained on Gbenga's portfolio. Ask me about their:\n• Projects and products they've built\n• Technical skills and expertise\n• Professional experience\n• AI/ML specializations`
    }

    // Stats/summary
    else if (
      lowerMessage.includes("summary") ||
      lowerMessage.includes("tell me about") ||
      lowerMessage.includes("who")
    ) {
      reply = `Gbenga is a full-stack engineer and AI architect with ${stats.yearsOfExperience}+ years of experience. They've:\n• Built ${stats.totalProjects} projects (${stats.featuredProjects} featured)\n• Mastered ${stats.totalSkills} technologies across ${stats.categories} categories\n• Worked at leading tech companies\n• Specialized in AI engineering and full-stack development`
    }

    // Default response
    else {
      reply = `That's a great question! I can help with information about Gbenga's:\n• Projects - Ask about specific work or portfolio items\n• Skills - Ask about technologies and expertise\n• Experience - Ask about professional background\n• AI/ML - Ask about AI engineering specializations\n\nWhat would you like to know?`
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("AI chat error:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
