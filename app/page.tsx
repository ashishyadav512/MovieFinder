import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {" "}
      {/* Adjust min-height to account for header */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Movie
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                    Explore a vast collection of movies, from timeless classics to the latest blockbusters. Find
                    details, ratings, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/movies"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Movies
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/popcorn-film-reels.png"
                width={550}
                height={400}
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover lg:order-last"
              />
            </div>
          </div>
        </section>
        {/* You can add more sections here, e.g., featured movies, categories, etc. */}
      </main>
    </div>
  )
}
