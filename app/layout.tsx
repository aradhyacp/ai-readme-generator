import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Readme.ify - AI README Generator",
  description: "Generate comprehensive README documentation for your projects using AI",
  keywords: [
    "README generator",
    "AI documentation",
    "project documentation",
    "software README",
    "documentation generator",
  ],
  openGraph: {
    title: "Readme.ify - AI README Generator",
    description: "Generate comprehensive README documentation for your projects using AI",
    type: "website",
    siteName: "Readme.ify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Readme.ify - AI README Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Readme.ify - AI README Generator",
    description: "Generate comprehensive README documentation for your projects using AI",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
