import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gbengaoluwadahunsi.vercel.app'),
  title: "Gbenga Oluwadahunsi — Fullstack & AI Engineer",
  description:
    "Fullstack and AI Engineer building high-performance, privacy-first products—from architecture to deployment—across web, mobile, and edge AI.",
  keywords: [
    "Gbenga Oluwadahunsi",
    "AI Engineer",
    "Fullstack Engineer",
    "Product Engineer",
    "Edge AI",
    "Private AI",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Mobile Development",
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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/O.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/O.png",
    apple: "/O.png",
  },
  openGraph: {
    title: "Gbenga Oluwadahunsi — Fullstack & AI Engineer",
    description:
      "Fullstack and AI architecture: intelligent, privacy-first products with a focus on performance and edge deployment.",
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
    title: "Gbenga Oluwadahunsi — Fullstack & AI Engineer",
    description:
      "Fullstack and AI Engineer. Privacy-first, high-performance products across web, mobile, and edge.",
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
    "jobTitle": "AI Engineer",
    "description": "Fullstack and AI engineer building privacy-first, high-performance products across web, mobile, and edge.",
    "url": "https://gbengaoluwadahunsi.vercel.app",
    "sameAs": [
      "https://github.com/gbengaoluwadahunsi",
      "https://www.linkedin.com/in/gbengaoluwadahunsi/",
      "https://www.novatescribe.com"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Novate AI",
        "url": "https://www.novatescribe.com"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Product Engineering",
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
    "image": "https://gbengaoluwadahunsi.vercel.app/two.png"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/me.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/me2.png" as="image" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
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
