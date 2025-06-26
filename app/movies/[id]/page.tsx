import { getMovieDetails } from "@/lib/api"
import { notFound } from "next/navigation"
import MovieClientPage from "./MovieClientPage"
import type { Metadata } from "next"

interface MovieDetailsPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: MovieDetailsPageProps): Promise<Metadata> {
  const movie = await getMovieDetails(params.id)

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "The requested movie could not be found.",
    }
  }

  return {
    title: `${movie.Title} (${movie.Year}) - MovieFinder`,
    description: movie.Plot,
    openGraph: {
      title: `${movie.Title} (${movie.Year})`,
      description: movie.Plot,
      images: [
        {
          url: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.svg",
          alt: movie.Title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${movie.Title} (${movie.Year})`,
      description: movie.Plot,
      images: [movie.Poster !== "N/A" ? movie.Poster : "/placeholder.svg"],
    },
  }
}

export default async function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const movie = await getMovieDetails(params.id)

  if (!movie) {
    notFound()
  }

  return <MovieClientPage movie={movie} />
}
