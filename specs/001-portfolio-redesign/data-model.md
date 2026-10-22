# Data Model: Portfolio Redesign

All content lives in `lib/portfolio.ts` as typed constants.

```ts
type Profile = {
  name: string; role: string; positioning: string; availability: string
  email: string; resumeUrl: string; portrait: string
  socials: { label: "GitHub" | "LinkedIn"; href: string }[]
}
type Stat = { value: string; label: string }
type Capability = { title: string; summary: string; stack: string[] }
type Role = { title: string; org: string; period: string; impact: string; current?: boolean }
type Product = {
  title: string; summary: string; image: string; href: string
  tags: string[]; featured: boolean; year?: string; role?: string
}
```

Validation: every `Product.href` is an absolute https URL; exactly two products are `featured`;
roles are listed newest first; at most one role is `current`.
