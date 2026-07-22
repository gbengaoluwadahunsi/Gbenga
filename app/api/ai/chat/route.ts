import { NextRequest, NextResponse } from "next/server"
import DataLoader from "@/lib/data-loader"

type AnyProject = { title: string; description: string; featured?: boolean; category?: string; technologies?: string[] }
type AnySkill = { name: string; category: string; proficiency?: string }
type AnyExp = { title: string; company: string; isCurrentRole?: boolean; period?: string; description?: string }

/**
 * Rule-based responder. Always available — used as a fallback when no LLM
 * key is configured, or if the LLM request fails for any reason.
 */
function ruleBasedReply(
  message: string,
  data: { projects: AnyProject[]; skills: AnySkill[]; experience: AnyExp[]; stats: ReturnType<typeof DataLoader.getStats> }
): string {
  const { projects, skills, experience, stats } = data
  const m = message.toLowerCase()

  if (m.includes("project") || m.includes("work") || m.includes("build")) {
    const featuredCount = projects.filter((p) => p.featured).length
    return `I've worked on ${projects.length} projects, with ${featuredCount} featured ones. Some highlights include:\n\n${projects
      .slice(0, 3)
      .map((p) => `• ${p.title} - ${p.description}`)
      .join("\n")}`
  }

  if (
    m.includes("skill") || m.includes("technology") || m.includes("technologies") ||
    m.includes("tech") || m.includes("stack") || m.includes("expertise") ||
    m.includes("tool") || m.includes("language") || m.includes("framework")
  ) {
    const names = (cat: string) => skills.filter((s) => s.category === cat).map((s) => s.name)
    return `Here's Gbenga's tech stack:\n\n▸ Frontend: ${names("frontend").join(", ")}\n\n▸ Backend: ${names("backend").join(", ")}\n\n▸ AI / ML: ${names("ai").slice(0, 14).join(", ")}\n\n▸ Tools: ${names("tools").join(", ")}`
  }

  if (m.includes("experience") || m.includes("role") || m.includes("job") || m.includes("work at")) {
    const current = experience.find((e) => e.isCurrentRole)
    return `I have ${stats.yearsOfExperience}+ years of experience. Currently, I'm ${current?.title} at ${current?.company}.\n\nPrevious roles include:\n${experience
      .filter((e) => !e.isCurrentRole)
      .map((e) => `• ${e.title} at ${e.company}`)
      .join("\n")}`
  }

  if (m.includes("ai") || m.includes("machine learning") || m.includes("llm") || m.includes("generative")) {
    const aiSkills = skills.filter((s) => s.category === "ai")
    const aiProjects = projects.filter((p) => (p.category || "").toLowerCase().includes("ai"))
    return `I'm passionate about AI engineering! I have expertise in:\n${aiSkills.map((s) => `• ${s.name} (${s.proficiency})`).join("\n")}\n\nRelevant projects: ${aiProjects.map((p) => p.title).join(", ")}`
  }

  if (m.includes("hi") || m.includes("hello") || m.includes("hey")) {
    return `Hey! I'm an AI assistant trained on Gbenga's portfolio. Ask me about their:\n• Projects and products they've built\n• Technical skills and expertise\n• Professional experience\n• AI/ML specializations`
  }

  if (m.includes("summary") || m.includes("tell me about") || m.includes("who")) {
    return `Gbenga is a full-stack engineer and AI architect with ${stats.yearsOfExperience}+ years of experience. They've:\n• Built ${stats.totalProjects} projects (${stats.featuredProjects} featured)\n• Mastered ${stats.totalSkills} technologies across ${stats.categories} categories\n• Specialized in AI engineering and full-stack development`
  }

  const featuredNames = projects.filter((p) => p.featured).slice(0, 2).map((p) => p.title)
  const recent = featuredNames.length ? featuredNames.join(" & ") : projects.slice(0, 2).map((p) => p.title).join(" & ")
  return `Happy to help — here's a quick snapshot of Gbenga:\n\n• Fullstack & AI engineer shipping ${stats.totalProjects} products across web, mobile & edge\n• Recent work: ${recent}\n• AI focus: RAG, agentic systems, and privacy-first on-device ML\n\nAsk me to go deeper on his projects, tech stack, experience, or AI work.`
}

/** Build a compact, factual context block from portfolio data for the LLM. */
function buildContext(projects: AnyProject[], skills: AnySkill[], experience: AnyExp[]): string {
  const byCat = (cat: string) => skills.filter((s) => s.category === cat).map((s) => s.name).join(", ")
  const projectLines = projects
    .map((p) => `- ${p.title}${p.featured ? " (featured)" : ""}: ${p.description}${p.technologies?.length ? ` [${p.technologies.join(", ")}]` : ""}`)
    .join("\n")
  const expLines = experience
    .map((e) => `- ${e.title} at ${e.company}${e.period ? ` (${e.period})` : ""}${e.isCurrentRole ? " — current" : ""}${e.description ? `: ${e.description}` : ""}`)
    .join("\n")
  return [
    "PROJECTS:", projectLines,
    "\nSKILLS:",
    `Frontend: ${byCat("frontend")}`,
    `Backend: ${byCat("backend")}`,
    `AI/ML: ${byCat("ai")}`,
    `Tools: ${byCat("tools")}`,
    "\nEXPERIENCE:", expLines,
  ].join("\n")
}

/**
 * Call an OpenAI-compatible chat API (Groq by default; DeepSeek/OpenAI via env).
 * Returns null on any failure so the caller can fall back to the rule responder.
 */
async function llmReply(message: string, contextBlock: string): Promise<string | null> {
  const apiKey = process.env.LLM_API_KEY || process.env.GROQ_API_KEY
  if (!apiKey) return null

  const baseUrl = process.env.LLM_BASE_URL || "https://api.groq.com/openai/v1"
  const model = process.env.LLM_MODEL || "llama-3.3-70b-versatile"

  const system =
    "You are the portfolio assistant for Gbenga Oluwadahunsi, a fullstack & AI engineer. " +
    "Answer questions about Gbenga concisely and accurately using ONLY the context below. " +
    "Speak about Gbenga in the third person. Keep replies short — a few sentences or a tight list. " +
    "If a question is unrelated to Gbenga or his work, politely steer back to his projects, skills, or experience. " +
    "Never invent facts not present in the context.\n\n" +
    contextBlock

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      cache: "no-store",
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 500,
        messages: [
          { role: "system", content: system },
          { role: "user", content: message },
        ],
      }),
    })
    if (!res.ok) {
      console.error("LLM request failed:", res.status, await res.text().catch(() => ""))
      return null
    }
    const data = await res.json()
    const text = data?.choices?.[0]?.message?.content?.trim()
    return text || null
  } catch (err) {
    console.error("LLM request error:", err)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const projects = DataLoader.getProjects() as AnyProject[]
    const skills = DataLoader.getAllSkills() as AnySkill[]
    const experience = DataLoader.getExperience() as AnyExp[]
    const stats = DataLoader.getStats()

    // Prefer a real LLM when a key is configured; otherwise (or on failure)
    // fall back to the deterministic rule-based responder.
    const fromLLM = await llmReply(message, buildContext(projects, skills, experience))
    const reply = fromLLM ?? ruleBasedReply(message, { projects, skills, experience, stats })

    return NextResponse.json({ reply, source: fromLLM ? "llm" : "rules" })
  } catch (error) {
    console.error("AI chat error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
