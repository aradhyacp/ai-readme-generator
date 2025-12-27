"use client"

import { Github } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-md py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Made with love */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with ❤️ by ACPx1337.io
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <a
              href="https://github.com/aradhyacp/ai-readme-generator/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
