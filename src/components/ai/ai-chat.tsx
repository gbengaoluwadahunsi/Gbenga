"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
}

const SUGGESTIONS = [
  "What has he built?",
  "AI / ML expertise?",
  "Work experience?",
  "Tech stack?",
]

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi — I'm Gbenga's portfolio assistant, running on his project data. Ask me about his products, stack, or experience.",
      sender: "ai",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  // Allow other parts of the page (e.g. the hero prompt bar) to open the assistant
  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener("portfolio:open-chat", open)
    return () => window.removeEventListener("portfolio:open-chat", open)
  }, [])

  const send = async (text: string) => {
    const q = text.trim()
    if (!q || isLoading) return

    setMessages((prev) => [...prev, { id: Date.now().toString(), text: q, sender: "user" }])
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
          id: (Date.now() + 1).toString(),
          text: data.reply || "Sorry, I couldn't process that. Try asking about projects or experience.",
          sender: "ai",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 2).toString(), text: "Sorry, I hit an error. Please try again.", sender: "ai" },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/40"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
        )}
        <span className="relative">
          {isOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </span>
      </motion.button>

      {/* Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-24 right-6 z-40 flex h-[28rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Portfolio Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono uppercase tracking-wider">online</span>
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm bg-secondary text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="font-mono text-xs uppercase tracking-wider">inferring…</span>
                </div>
              )}

              {/* Suggestion chips (only before the first user turn) */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex gap-2 border-t border-border p-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, stack, experience…"
                disabled={isLoading}
                className="flex-1 border-border bg-background"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} size="icon" aria-label="Send">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChat
