import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { ProofStrip } from "@/components/site/proof-strip"
import { Work } from "@/components/site/work"
import { Experience } from "@/components/site/experience"
import { Capabilities } from "@/components/site/capabilities"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"
import { AIChat } from "@/src/components/ai/ai-chat"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Work />
        <Experience />
        <Capabilities />
        <Contact />
      </main>
      <SiteFooter />
      <AIChat />
    </>
  )
}
