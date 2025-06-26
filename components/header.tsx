"use client"

import Link from "next/link"
import { Film } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/movies" className="flex items-center space-x-2">
          <Film className="h-6 w-6" />
          <span className="font-bold text-xl">MovieFinder</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/movies" className="text-sm font-medium hover:text-primary transition-colors">
            Movies
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
