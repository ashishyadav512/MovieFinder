import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { MovieIcon } from "@/components/movie-icon"

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-12 bg-gradient-to-b from-background to-muted px-4 py-12 text-center">
      {/* Logo & title */}
      <div className="flex flex-col items-center gap-4">
        <MovieIcon size={56} className="text-primary" />
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">MovieFinder</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Discover movie plots, ratings, posters, and more &mdash; powered by the OMDb&nbsp;API.
        </p>
      </div>

      {/* Hero illustration */}
      <Image
        src="/popcorn-film-reels.png"
        alt="Popcorn and film reels"
        width={640}
        height={360}
        priority
        className="rounded-lg shadow-xl"
      />

      {/* Call-to-action */}
      <Link
        href="/movies"
        className={buttonVariants({
          size: "lg",
          className: "px-8 py-6 text-lg",
        })}
      >
        Explore Movies
      </Link>
    </main>
  )
}
