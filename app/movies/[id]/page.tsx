import MovieClientPage from "./MovieClientPage"
import { getMovieDetails } from "@/lib/api"

interface MoviePageProps {
  params: { id: string }
}

export default async function MoviePage({ params }: MoviePageProps) {
  return <MovieClientPage params={params} />
}

export async function generateMetadata({ params }: MoviePageProps) {
  const { id } = params

  try {
    const movie = await getMovieDetails(id)

    if (!movie || movie.Response === "False") {
      return {
        title: "Movie Not Found",
      }
    }

    return {
      title: `${movie.Title} (${movie.Year}) - MovieFinder`,
      description: movie.Plot,
    }
  } catch {
    return {
      title: "Movie Not Found",
    }
  }
}
