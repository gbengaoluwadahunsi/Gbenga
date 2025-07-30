import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gbengaoluwadahunsi.vercel.app'),
  title: "Gbenga Oluwadahunsi - AI Engineer, FullStack Developer & Tech Entrepreneur",
  description:
    "Gbenga Oluwadahunsi is a professional AI Engineer, Full Stack Developer, and Tech Entrepreneur specializing in modern web technologies, artificial intelligence, and environmental solutions. Creator of NovateScribe, Catalystar Environmental Services, and multiple innovative web applications.",
  keywords: [
    "Gbenga Oluwadahunsi", 
    "AI Engineer", 
    "Full Stack Developer", 
    "Tech Entrepreneur",
    "Software Engineer", 
    "React Developer", 
    "Next.js Developer", 
    "TypeScript Developer", 
    "Node.js Developer",
    "NovateScribe",
    "Catalystar Environmental Services",
    "Web Developer Nigeria",
    "AI Developer",
    "Environmental Technology"
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
    title: "Gbenga Oluwadahunsi - AI Engineer, FullStack Developer & Tech Entrepreneur",
    description:
      "Professional AI Engineer, Full Stack Developer, and Tech Entrepreneur specializing in modern web technologies, artificial intelligence, and environmental solutions. Creator of NovateScribe and Catalystar Environmental Services.",
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
    title: "Gbenga Oluwadahunsi - AI Engineer & FullStack Developer",
    description: "Professional AI Engineer, Full Stack Developer, and Tech Entrepreneur specializing in modern web technologies and artificial intelligence.",
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
    "jobTitle": ["AI Engineer", "Full Stack Developer", "Tech Entrepreneur"],
    "description": "Professional AI Engineer, Full Stack Developer, and Tech Entrepreneur specializing in modern web technologies, artificial intelligence, and environmental solutions.",
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
      "Full Stack Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Environmental Technology",
      "Web Development",
      "Software Engineering"
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
      <body className={inter.className}>
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
