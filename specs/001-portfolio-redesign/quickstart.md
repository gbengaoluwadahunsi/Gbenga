# Quickstart: Portfolio Redesign

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # must pass with no type errors
```

Optional env (see `.env.example`): `NEXT_PUBLIC_EMAILJS_*` for the contact form, `LLM_API_KEY`
for the AI assistant (falls back to rule-based answers without it).

## Manual verification
1. 390×844 and 1440×900, dark and light: hero name, role, positioning and "View work" visible
   without scrolling; no horizontal scroll.
2. Tab through the page: skip link first, every link/button shows a focus ring, mobile menu
   opens and closes with the keyboard.
3. OS "reduce motion" on: no marquee or reveal animation.
4. View source / disable JS: all six product names and four roles present.
5. Contact form: empty submit shows inline errors.
6. Hero prompt bar opens the assistant; Escape closes it.
