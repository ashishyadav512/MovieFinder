import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMovieDetails } from "@/lib/api"
import MovieClientPage from "./MovieClientPage"

interface MovieDetailsPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: MovieDetailsPageProps): Promise<Metadata> {
  const imdbID = params.id
  const movie = await getMovieDetails(imdbID)

  if (!movie) {
    return {
      title: "Movie Not Found",
    }
  }

  return {
    title: movie.Title,
    description: movie.Plot,
    openGraph: {
      images: [movie.Poster],
    },
  }
}

export default async function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const imdbID = params.id
  const movie = await getMovieDetails(imdbID)

  if (!movie) {
    notFound()
  }

  return <MovieClientPage imdbID={imdbID} />
}
