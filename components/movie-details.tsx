"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { StarRating } from "./star-rating"
import { useMovieRating } from "@/hooks/use-movie-rating"
import type { MovieDetail } from "@/types/movie"

interface MovieDetailsProps {
  movie: MovieDetail
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const { rating, setRating } = useMovieRating(movie.imdbID)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-4">
          <div className="aspect-[2/3] relative overflow-hidden rounded-lg">
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.svg?height=450&width=300&query=movie poster"}
              alt={movie.Title}
              fill
              className="object-cover"
              sizes="300px"
              priority
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <StarRating rating={rating} onRatingChange={setRating} size="lg" />
              {rating > 0 && (
                <p className="text-sm text-muted-foreground mt-2">You rated this movie {rating} out of 5 stars</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{movie.Year}</Badge>
              <Badge variant="outline">{movie.Rated}</Badge>
              <Badge variant="outline">{movie.Runtime}</Badge>
              {movie.imdbRating !== "N/A" && <Badge variant="secondary">IMDb: {movie.imdbRating}/10</Badge>}
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.Genre.split(", ").map((genre) => (
                <Badge key={genre} variant="default">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Plot</h2>
            <p className="text-muted-foreground leading-relaxed">{movie.Plot}</p>
          </div>

          <Separator />

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Director</h3>
              <p className="text-muted-foreground">{movie.Director}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Writer</h3>
              <p className="text-muted-foreground">{movie.Writer}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Actors</h3>
              <p className="text-muted-foreground">{movie.Actors}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Language</h3>
              <p className="text-muted-foreground">{movie.Language}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Country</h3>
              <p className="text-muted-foreground">{movie.Country}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Released</h3>
              <p className="text-muted-foreground">{movie.Released}</p>
            </div>
          </div>

          {movie.Awards !== "N/A" && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Awards</h3>
                <p className="text-muted-foreground">{movie.Awards}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
