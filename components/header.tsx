"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/movies" className="flex items-center space-x-2" aria-label="Home">
          <span className="inline-block font-bold text-xl">MovieFinder</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
