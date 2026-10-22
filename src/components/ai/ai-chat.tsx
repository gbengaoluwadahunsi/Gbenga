"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Sparkles, X } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
}

const SUGGESTIONS = ["What has he shipped?", "What's his stack?", "AI / ML expertise?", "Is he available?"]

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi — I'm Gbenga's portfolio assistant. Ask me about his products, stack, experience, or how to get in touch.",
      sender: "ai",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const threadRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isLoading])

  const send = useCallback(
    async (text: string) => {
      const q = text.trim()
      if (!q || isLoading) return

      setMessages((prev) => [...prev, { id: `${Date.now()}u`, text: q, sender: "user" }])
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: q }),
        })
        const data = await response.json()
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}a`,
            text: data.reply || "Sorry, I couldn't process that. Try asking about projects or experience.",
            sender: "ai",
          },
        ])
      } catch {
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}e`, text: "Sorry, I hit an error. Please try again.", sender: "ai" },
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading],
  )

  const close = useCallback(() => {
    setIsOpen(false)
    launcherRef.current?.focus()
  }, [])

  // Other parts of the page (the hero prompt bar) can open the assistant, optionally with a question
  useEffect(() => {
    const open = (e: Event) => {
      setIsOpen(true)
      const question = (e as CustomEvent<{ question?: string }>).detail?.question
      if (question) send(question)
    }
    window.addEventListener("portfolio:open-chat", open)
    return () => window.removeEventListener("portfolio:open-chat", open)
  }, [send])

  useEffect(() => {
    if (!isOpen) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, close])

  return (
    <>
      <button
        ref={launcherRef}
        className="fab"
        type="button"
        aria-controls="assistant"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
      >
        <span className="fab-icon">
          <Sparkles size={18} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="fab-text">Ask my AI</span>
      </button>

      <aside
        className={`assistant${isOpen ? " open" : ""}`}
        id="assistant"
        role="dialog"
        aria-modal="false"
        aria-labelledby="assistant-title"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="assistant-core">
          <header>
            <div>
              <h2 id="assistant-title">Ask about Gbenga</h2>
              <p>Answers drawn from this portfolio</p>
            </div>
            <button className="icon-btn" type="button" aria-label="Close assistant" onClick={close}>
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </header>

          <div className="thread" ref={threadRef} role="log" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`msg ${m.sender === "user" ? "me" : "bot"}`}>
                {m.text}
              </div>
            ))}
            {isLoading && (
              <div className="msg bot" aria-label="Assistant is typing">
                <span className="typing" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
          </div>

          {messages.length === 1 && !isLoading && (
            <div className="chips">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chip" type="button" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
          >
            <label htmlFor="assistant-input" className="sr-only">
              Your question
            </label>
            <input
              ref={inputRef}
              id="assistant-input"
              autoComplete="off"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button className="kbd" type="submit" aria-label="Send" disabled={isLoading || !input.trim()}>
              ↵
            </button>
          </form>
        </div>
      </aside>
    </>
  )
}

export default AIChat
