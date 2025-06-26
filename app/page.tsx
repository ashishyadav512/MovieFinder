import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MovieIcon } from "@/components/movie-icon"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 xl:py-56 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Movie
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Explore a vast collection of movies, get detailed information, and find your perfect watch.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/movies"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Movies
                  </Link>
                  <Button
                    variant="outline"
                    className="text-white border-gray-600 hover:bg-gray-700 hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                src="/popcorn-film-reels.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features at a Glance</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our MovieFinder app offers a seamless experience for all film enthusiasts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <MovieIcon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Extensive Database</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access details for millions of movies, from classics to the latest releases.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <MovieIcon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Detailed Information</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get cast, crew, plot summaries, ratings, and more for every film.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <MovieIcon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Intuitive Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Find movies quickly with powerful search and filtering options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MovieFinder. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
