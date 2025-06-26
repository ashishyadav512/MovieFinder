import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MovieIcon } from "@/components/movie-icon"

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12">
      {/* HERO */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <MovieIcon className="mx-auto md:mx-0 h-10 w-10 text-primary" label="MovieFinder" />
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
            Discover movies, ratings&nbsp;&amp; more
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground md:mx-0">
            Search the world’s biggest movie database and keep track of your favourites – all in one place.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/movies">Explore Movies</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/popcorn-film-reels.png"
          alt="Popcorn and film reels"
          width={600}
          height={400}
          priority
          className="rounded-lg shadow-lg"
        />
      </section>
    </main>
  )
}
