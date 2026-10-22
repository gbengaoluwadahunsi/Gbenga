"use client"

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { Send } from "lucide-react"
import { PROFILE } from "@/lib/portfolio"

const schema = z.object({
  name: z.string().trim().min(1, "Please tell me your name."),
  email: z.string().trim().email("That email doesn't look right."),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, "A sentence or two helps — at least 10 characters."),
})

type FormData = z.infer<typeof schema>
type Status = { kind: "idle" | "sent" | "error"; text: string }

const IDLE: Status = { kind: "idle", text: "Replies within two working days." }

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>(IDLE)
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onTouched" })

  const mailtoFallback = () => {
    const v = getValues()
    const body = encodeURIComponent(`${v.message ?? ""}\n\n— ${v.name ?? ""} (${v.email ?? ""})`)
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(v.subject || "Hello")}&body=${body}`
  }

  const onSubmit = async () => {
    if (!formRef.current) return
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      if (result.status !== 200) throw new Error("Send failed")
      reset()
      setStatus({ kind: "sent", text: "Message sent — thank you. I'll be in touch soon." })
    } catch {
      setStatus({ kind: "error", text: "Couldn't send right now." })
    }
  }

  const field = (name: keyof FormData, label: string, opts: { full?: boolean; area?: boolean; type?: string; placeholder?: string; autoComplete?: string } = {}) => {
    const err = errors[name]?.message
    const Tag = opts.area ? "textarea" : "input"
    return (
      <div className={`field${opts.full ? " full" : ""}${err ? " invalid" : ""}`}>
        <label htmlFor={`f-${name}`}>{label}</label>
        <Tag
          id={`f-${name}`}
          type={opts.area ? undefined : opts.type ?? "text"}
          placeholder={opts.placeholder}
          autoComplete={opts.autoComplete}
          aria-invalid={!!err}
          aria-describedby={`h-${name}`}
          {...register(name)}
        />
        <span className="help" id={`h-${name}`}>
          {err}
        </span>
      </div>
    )
  }

  return (
    <form ref={formRef} className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      {field("name", "Name", { autoComplete: "name" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      {field("subject", "Subject", { full: true, placeholder: "Contract role, advisory, a product idea" })}
      {field("message", "Message", { full: true, area: true })}
      <div className="form-foot">
        <p className={`form-status form-status--${status.kind}`} role="status" aria-live="polite">
          {status.text}
          {status.kind === "error" && (
            <>
              {" "}
              <a href={mailtoFallback()}>Email me directly instead.</a>
            </>
          )}
        </p>
        <button className="btn btn--ghost" type="submit" aria-busy={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send"}
          <span className="btn-icon">
            <Send size={16} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </button>
      </div>
    </form>
  )
}
