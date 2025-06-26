"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MovieIcon } from "@/components/movie-icon"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-2xl space-y-6">
        <MovieIcon className="mx-auto text-primary h-14 w-14" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Discover&nbsp;
          <span className="text-primary">Movies</span>&nbsp;Effortlessly
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Search, rate, and explore detailed information on your favourite films with lightning-fast global search.
        </p>
        <Button asChild size="lg" className="mx-auto">
          <Link href="/movies">Explore Movies</Link>
        </Button>
      </div>
      {/* Decorative popcorn image */}
      <img
        src="/popcorn-film-reels.png"
        alt=""
        width={360}
        height={240}
        className="pointer-events-none mt-12 select-none opacity-70 dark:opacity-40"
      />
    </main>
  )
}
