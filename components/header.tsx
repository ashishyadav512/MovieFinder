"use client"

import Link from "next/link"
import { MovieIcon } from "./movie-icon"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MovieIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">MovieFinder</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/movies" className="text-sm font-medium hover:underline" prefetch={false}>
            Movies
          </Link>
          {/* Add more navigation links here if needed */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
