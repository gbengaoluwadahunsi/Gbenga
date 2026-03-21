import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gbengaoluwadahunsi.vercel.app'),
  title: "Gbenga Oluwadahunsi — AI Engineer (Healthcare · Edge & Private AI)",
  description:
    "Biochemistry-trained AI engineer and CTO at Novate AI (Antler-backed), building healthcare AI systems—from architecture to deployment—with a focus on privacy-preserving, decentralized, and edge AI.",
  keywords: [
    "Gbenga Oluwadahunsi",
    "AI Engineer",
    "Healthcare AI",
    "Edge AI",
    "Private AI",
    "Decentralized AI",
    "Novate AI",
    "Antler",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "NovateScribe",
  ],
  authors: [{ name: "Gbenga Oluwadahunsi", url: "https://gbengaoluwadahunsi.vercel.app" }],
  creator: "Gbenga Oluwadahunsi",
  publisher: "Gbenga Oluwadahunsi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // You'll need to add this from Google Search Console
  },
  icons: {
    icon: [
      { url: "/O.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/O.png",
    apple: "/O.png",
  },
  openGraph: {
    title: "Gbenga Oluwadahunsi — AI Engineer (Healthcare · Edge & Private AI)",
    description:
      "CTO at Novate AI (Antler-backed). Biochemistry → AI architecture: intelligent systems for healthcare with a focus on privacy-preserving and edge deployment.",
    url: "https://gbengaoluwadahunsi.vercel.app",
    siteName: "Gbenga Oluwadahunsi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gbenga Oluwadahunsi - AI Engineer & FullStack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbenga Oluwadahunsi — AI Engineer (Healthcare AI)",
    description:
      "Biochemistry-trained AI engineer. CTO at Novate AI. Healthcare, edge, and privacy-first intelligent systems.",
    images: ["/og-image.png"],
    creator: "@gbengaoluwadahunsi", // Add your Twitter handle if you have one
  },
  alternates: {
    canonical: "https://gbengaoluwadahunsi.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gbenga Oluwadahunsi",
    "jobTitle": "AI Engineer & CTO",
    "description": "AI engineer focused on healthcare: privacy-preserving, decentralized, and edge AI. CTO at Novate AI (Antler-backed).",
    "url": "https://gbengaoluwadahunsi.vercel.app",
    "sameAs": [
      "https://github.com/gbengaoluwadahunsi",
      "https://www.linkedin.com/in/gbengaoluwadahunsi/",
      "https://www.novatescribe.com",
      "https://catalystar.vercel.app/"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "NovateScribe",
        "url": "https://www.novatescribe.com"
      },
      {
        "@type": "Organization", 
        "name": "Catalystar Environmental Services",
        "url": "https://catalystar.vercel.app/"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Healthcare Technology",
      "Edge Computing",
      "Privacy-Preserving AI",
      "Full Stack Development",
      "Next.js",
      "TypeScript",
      "System Architecture"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University"
    },
    "nationality": "Nigerian",
    "email": "contact@gbengaoluwadahunsi.com",
    "image": "https://gbengaoluwadahunsi.vercel.app/photo2.png"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
