import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gbenga Oluwadahunsi - AI Engineer & FullStack Developer",
  description:
    "Professional portfolio of Gbenga Oluwadahunsi, a Software Engineer and Full Stack Developer specializing in modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js"],
  authors: [{ name: "Gbenga Oluwadahunsi" }],
  creator: "Gbenga Oluwadahunsi",
  openGraph: {
    title: "Gbenga Oluwadahunsi - AI Engineer & FullStack Developer",
    description:
      "Professional portfolio of Gbenga Oluwadahunsi, a Software Engineer and Full Stack Developer specializing in modern web technologies.",
    url: "https://gbengaoluwadahunsi.vercel.app",
    siteName: "Gbenga Oluwadahunsi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gbenga Oluwadahunsi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
