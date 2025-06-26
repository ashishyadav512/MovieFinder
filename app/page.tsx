import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MovieIcon } from "@/components/movie-icon" // Ensure this path is correct

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <MovieIcon className="h-6 w-6" />
          <span className="sr-only">MovieFinder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/movies">
            Explore Movies
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Movie
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Explore a vast collection of movies, from timeless classics to the latest blockbusters. Find
                    details, ratings, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/movies">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-500 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Explore Movies
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                alt="Popcorn and film reels"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="400"
                src="/popcorn-film-reels.png"
                width="500"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 MovieFinder. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
