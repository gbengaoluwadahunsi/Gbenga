"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

/** Hero prompt bar: hands the question to the floating assistant (see ai-chat.tsx). */
export function HeroAsk() {
  const [q, setQ] = useState("")

  return (
    <form
      className="ask"
      role="search"
      aria-label="Ask about Gbenga's work"
      onSubmit={(e) => {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent("portfolio:open-chat", { detail: { question: q.trim() } }))
        setQ("")
      }}
    >
      <Sparkles size={18} strokeWidth={1.5} className="ask-icon" aria-hidden="true" />
      <label htmlFor="hero-ask-input" className="sr-only">
        Ask my AI about my work, stack, or experience
      </label>
      <input
        id="hero-ask-input"
        name="q"
        type="text"
        autoComplete="off"
        placeholder="Ask my AI about my work, stack, or experience…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button className="kbd" type="submit" aria-label="Ask">
        ↵
      </button>
    </form>
  )
}
